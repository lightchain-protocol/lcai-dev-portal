'use client';

import clsx from 'clsx';
import Link from 'next/link';
import { useEffect, useMemo, useRef, useState } from 'react';

import { socialIconMap } from '@/lib/footer/socialIconMap';
import type { RawSocialLink } from '@/lib/footer/types';
import { ChevronDown, Instagram, Twitter, X } from 'lucide-react';
import Logo from '../layout/logo';
import type { MegaCol, MenuConfig, NavCardItem } from './types';

interface PopupMobileMenuProps {
  menus: MenuConfig[];
  isActive: boolean;
  onClose: () => void;
  socials: RawSocialLink[];
}

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
  });

  // If nothing matched, provide an empty group to avoid collapse oddities
  if (groups.length === 0) groups.push({ items: [] });
  return groups;
}

export default function PopupMobileMenu({ menus, isActive, onClose, socials }: PopupMobileMenuProps) {
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
          <Logo onClick={onClose} className="inline-flex items-center gap-2" />
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
            {socials.map((social, idx) => {
              const IconComponent = socialIconMap[social.iconKey];
              if (!IconComponent) return null;

              return (
                <a
                  key={idx}
                  href={social?.href}
                  aria-label={social?.text}
                  className="text-lg text-white transition-colors"
                  target={social?.target ?? undefined}
                >
                  <IconComponent />
                </a>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}
