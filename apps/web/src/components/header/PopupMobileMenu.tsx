'use client';

import Image from 'next/image';
import Link from 'next/link';
import { useEffect, useMemo, useRef, useState } from 'react';
import clsx from 'clsx';

import { ChevronDown, Facebook, Instagram, Network, Twitter, X } from 'lucide-react';
import type { MegaCol, MenuConfig, NavCardItem } from './types';
import Logo from '../layout/logo';

interface PopupMobileMenuProps {
  menus: MenuConfig[];
  isActive: boolean;
  onClose: () => void;
}

const socialLinks = [
  { href: 'https://linktr.ee/lightchainai', label: 'Linktr', icon: <svg stroke="currentColor" fill="none" strokeWidth="2" viewBox="0 0 24 24" strokeLinecap="round" strokeLinejoin="round" height="20" width="20" xmlns="http://www.w3.org/2000/svg"><path d="M4 10h16"></path><path d="M6.5 4.5l11 11"></path><path d="M6.5 15.5l11 -11"></path><path d="M12 10v-8"></path><path d="M12 15v7"></path></svg> },
  { href: 'https://x.com/LightchainAI', label: 'X / Twitter', icon: <Twitter size={20} /> },
  { href: 'https://www.instagram.com/light.chain.ai/', label: 'Instagram', icon: <Instagram size={20} /> },
  {
    href: 'https://discord.com/invite/lightchain', label: 'Discord', icon: <svg
      xmlns="http://www.w3.org/2000/svg"
      width="20"
      height="20"
      viewBox="0 0 24 24"
      fill="currentColor"
    >
      <path d="M20.317 4.369a19.791 19.791 0 00-4.885-1.515c-.21.375-.455.888-.623 1.288a18.27 18.27 0 00-5.618 0 18.493 18.493 0 00-.626-1.288A19.736 19.736 0 003.68 4.37C.533 9.055-.32 13.59.099 18.057A19.9 19.9 0 006.18 20.69c.492-.671.93-1.385 1.308-2.138a12.72 12.72 0 01-2.083-.996c.176-.128.348-.26.515-.396a13.98 13.98 0 0011.658 0c.168.137.34.27.515.396-.662.4-1.36.735-2.084.997.38.753.817 1.466 1.31 2.137a19.89 19.89 0 006.078-2.63c.5-5.177-.838-9.674-3.08-13.29zM8.02 15.33c-1.182 0-2.148-1.088-2.148-2.425 0-1.337.955-2.425 2.148-2.425 1.202 0 2.158 1.088 2.148 2.425 0 1.337-.946 2.425-2.148 2.425zm7.975 0c-1.182 0-2.148-1.088-2.148-2.425 0-1.337.955-2.425 2.148-2.425 1.202 0 2.158 1.088 2.148 2.425 0 1.337-.946 2.425-2.148 2.425z" />
    </svg>
  },
];

/** Flatten the desktop mega-menu columns into a simple mobile list */
function extractItemsFromColumns(columns: MegaCol[]) {
  type MobileItem = { label: string; href?: NavCardItem["href"]; badge?: string };
  const groups: { title?: string; items: MobileItem[] }[] = [];

  columns.forEach((col) => {
    // Title-only column becomes a group header (no items)
    if (col.type === 'title') {
      groups.push({ title: col.title, items: [] });
      return;
    }

    // Cards column: add each card as a link item
    if (col.type === 'cards') {
      const items: MobileItem[] = (col.items || []).map((it: NavCardItem) => ({
        label: it.label || 'Untitled',
        href: it.href || '#',
        badge: it.badge,
      }));
      // If the previous pushed group was a title with no items, append to it;
      // otherwise create an unnamed group.
      const last = groups[groups.length - 1];
      if (last && last.items.length === 0 && last.title) {
        last.items.push(...items);
      } else {
        groups.push({ items });
      }
      return;
    }

    // Optional: show imageCard as a single CTA if provided
    if (col.type === 'imageCard' && col.href && col.title) {
      groups.push({
        items: [{ label: col.title, href: col.href as NavCardItem["href"] }],
      });
    }
  });

  // If nothing matched, provide an empty group to avoid collapse oddities
  if (groups.length === 0) groups.push({ items: [] });
  return groups;
}

export default function PopupMobileMenu({ menus, isActive, onClose }: PopupMobileMenuProps) {
  const menuRef = useRef<HTMLDivElement | null>(null);
  const [openIdx, setOpenIdx] = useState<number | null>(0);

  // close on outside click
  useEffect(() => {
    const onDown = (e: MouseEvent) => {
      if (menuRef.current && !menuRef.current.contains(e.target as Node)) onClose();
    };
    if (isActive) document.addEventListener('mousedown', onDown);
    return () => document.removeEventListener('mousedown', onDown);
  }, [isActive, onClose]);

  // lock body scroll when open
  useEffect(() => {
    if (!isActive) return;
    const prev = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    return () => { document.body.style.overflow = prev; };
  }, [isActive]);

  // Mobile sections derived directly from the desktop menus
  const sections = useMemo(() => {
    return menus.map((m: MenuConfig) => ({
      label: m.label,
      groups: extractItemsFromColumns(m.columns || []),
    }));
  }, [menus]);

  return (
    <div
      className={clsx(
        'fixed inset-0 z-9999 xl:hidden transition-opacity duration-300 ease-in-out',
        isActive ? 'visible opacity-100' : 'invisible opacity-0'
      )}
      role="dialog"
      aria-modal="true"
      aria-hidden={!isActive}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-surface-black/70 backdrop-blur-sm" onClick={onClose} />

      {/* Drawer */}
      <div
        ref={menuRef}
        className={clsx(
          'relative flex h-full w-[304px] sm:w-[336px] flex-col border-r',
          'bg-background text-content-primary border-bdr-light shadow-[0_40px_80px_rgba(0,0,0,0.45)]',
          'transition-transform duration-300 ease-in-out',
          isActive ? 'translate-x-0' : '-translate-x-full'
        )}
      >
        {/* Header */}
        <div className="sticky top-0 z-10 flex items-center justify-between border-b border-bdr-light bg-surface-x-soft-hex p-4">
          <Link href="/" onClick={onClose} className="inline-flex items-center gap-2">
            <Logo />
          </Link>
          <button
            className="flex h-9 w-9 items-center justify-center rounded-full text-content-secondary transition-colors duration-300 ease-in-out hover:bg-surface-soft"
            onClick={onClose}
            aria-label="Close"
          >
            <X size={20} />
          </button>
        </div>

        {/* Sections (from desktop menus) */}
        <div className="flex-1 overflow-y-auto px-3 py-4">
          {sections.map((sec, i) => {
            const open = openIdx === i;
            return (
              <div key={sec.label} className="mb-3">
                <button
                  className="w-full flex items-center justify-between text-sm uppercase tracking-wide text-content-secondary px-3 py-2"
                  onClick={() => setOpenIdx(open ? null : i)}
                  aria-expanded={open}
                >
                  <span>{sec.label}</span>
                  <ChevronDown size={20} className={clsx('transition-transform duration-300 ease-in-out', open && 'rotate-180')} />
                </button>

                <div
                  className={clsx(
                    'overflow-hidden ml-4',
                    open ? 'max-h-[1200px] opacity-100' : 'max-h-0 opacity-0',
                    'transition-all duration-300 ease-in-out'
                  )}
                >
                  {sec.groups.map((g, gi) => (
                    <div key={gi} className={clsx(gi > 0 && 'border-t border-br-light-soft/50')}>
                      {g.title && (
                        <div className="px-4 pt-3 text-[11px] font-semibold uppercase tracking-wide text-content-soft">
                          {g.title}
                        </div>
                      )}
                      <ul className="px-1 py-2">
                        {g.items.map((item, ii) => (
                          <li key={`${gi}-${ii}`}>
                            <Link
                              href={item.href ?? '#'}
                              onClick={onClose}
                              className="flex items-center justify-between rounded-md px-3 py-2 text-[15px] text-content-primary hover:bg-surface-m-soft"
                            >
                              <span>{item.label}</span>
                              {item.badge && (
                                <span className="ml-2 rounded-full bg-surface-soft px-2 py-0.5 text-[11px] text-content-secondary">
                                  {item.badge}
                                </span>
                              )}
                            </Link>
                          </li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </div>
              </div>
            );
          })}
        </div>

        {/* Footer */}
        <div className="sticky bottom-0 border-t border-br-light-soft bg-surface-x-soft-hex p-3">
          <h6 className="block w-full rounded-xl pt-2 text-center text-sm font-medium text-content-white"
          >
            Social Media
          </h6>

          <div className="mt-3 flex items-center justify-center gap-3">
            {socialLinks.map(s => (
              <a
                key={s.label}
                href={s.href}
                aria-label={s.label}
                className="flex h-9 w-9 items-center justify-center rounded-full bg-surface-m-soft text-content-secondary hover:text-content-primary hover:bg-surface-soft"
              >
                {s.icon}
              </a>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
