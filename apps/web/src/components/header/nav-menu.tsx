"use client";

import React from "react";
import clsx from "clsx";
import { ChevronDown } from "lucide-react";
import type { MegaCol, MenuConfig } from "./types";
import NavCard from "./NavCard";

/** Merge pattern: [title, cards] -> single visual column */
function groupColumns(cols: MegaCol[]) {
  const grouped: Array<{ heading?: string; content: MegaCol }> = [];
  for (let i = 0; i < cols.length; i++) {
    const c = cols[i];
    if (c.type === "title" && cols[i + 1]?.type === "cards") {
      grouped.push({ heading: c.title, content: cols[i + 1] });
      i++; // skip next (already merged)
    } else {
      grouped.push({ content: c });
    }
  }
  return grouped;
}

export default function Navbar({ menus }: { menus: MenuConfig[] }) {
  const [open, setOpen] = React.useState<number | null>(null);

  return (
    <nav className="mainmenu-nav relative" onMouseLeave={() => setOpen(null)}>
      <ul className="mainmenu flex items-center">
        {menus.map((menu, idx) => {
          const groupedCols = groupColumns(menu.columns);
          const cols = groupedCols.filter((col) => col.content.type !== "imageCard");
          const contentColCount = cols.filter((c) => c.content.type !== "title").length;
          const effectiveWidth = contentColCount <= 1 ? undefined : menu.width;

          const width =
            effectiveWidth === "small" || effectiveWidth === undefined
              ? "w-[300px]"
              : effectiveWidth === "wide"
                ? "w-[600px]"
                : "w-[900px]"; // xwide

          const align = menu.align === "right" ? "right-0" : "left-0";

          return (
            <li
              key={menu.label}
              className="with-megamenu has-menu-child-item relative px-1 sm:px-2"
              onMouseEnter={() => setOpen(idx)}
            >
              <button
                className={clsx(
                  "flex h-20 items-center gap-1 px-3 text-base font-medium text-content-strong transition-colors duration-300 ease-in-out",
                  open === idx ? "text-surface-brand-pink" : "hover:text-surface-brand-pink"
                )}
                aria-expanded={open === idx}
              >
                {menu.label}
                <ChevronDown size={20} className="ml-1" />
              </button>

              <div
                className={clsx(
                  "lightchain-megamenu absolute top-[100%-10px] z-40 opacity-0 invisible transition-opacity duration-300 ease-in-out bg-background",
                  align,
                  open === idx && "visible opacity-100"
                )}
              >
                <div
                  className={clsx(
                    "wrapper mt-0 overflow-hidden rounded-b-2xl border border-bdr-light border-t-0 bg-surface-x-soft-hex shadow-[0_8px_24px_-6px_rgba(12,12,13,0.08),_0_4px_4px_-4px_rgba(12,12,13,0.05)]",
                    width,
                    "max-w-[95vw] xl:max-w-none"
                  )}
                >
                  <div
                    className={clsx(
                      effectiveWidth === "xwide"
                        ? "grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3"
                        : effectiveWidth === "wide"
                          ? "grid grid-cols-1 md:grid-cols-2"
                          : "grid grid-cols-1"
                    )}
                  >
                    {cols.map((g, i) => {
                      // visual column wrapper
                      const isLast = i === cols.length - 1;
                      return (
                        <div
                          key={i}
                          className={clsx(
                            "single-mega-item p-4",
                            !isLast && "border-r border-bdr-light"
                          )}
                        >
                          {/* Title like the screenshot */}
                          {g.heading && (
                            <h3 className="lcai-short-title mb-3 border-b border-bdr-light pb-2 text-xs font-semibold uppercase tracking-wide text-content-soft">
                              {g.heading}
                            </h3>
                          )}

                          {/* Content */}
                          {g.content.type === "cards" && (
                            <ul className="mega-menu-item mega-menu-card-item flex flex-col gap-1">
                              {g.content.items.map((item) => (
                                <li key={item.label}>
                                  <NavCard item={item} />
                                </li>
                              ))}
                            </ul>
                          )}
                        </div>
                      );
                    })}
                  </div>
                </div>
              </div>
            </li>
          );
        })}
      </ul>
    </nav>
  );
}
