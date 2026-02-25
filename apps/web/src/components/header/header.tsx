"use client";

import { Menu } from "lucide-react";
import { Button } from "../ui/button";
import Logo from "../layout/logo";
import NavMenu from "./nav-menu";
import SocialLinks from "../layout/social-links";
import Navbar from "./nav-menu";
import type { RawNavConfig } from "@/lib/nav/types";
import type { MenuConfig, NavCardItem } from "./types";
import { iconMap } from "@/lib/nav/iconMap";
import { resolveTarget } from "@/lib/nav/resolveTarget";
import { useState } from "react";
import PopupMobileMenu from "./PopupMobileMenu";

function resolveMenus(raw: RawNavConfig[]): MenuConfig[] {
  // function resolveMenus(raw?: RawNavConfig[] | null): MenuConfig[] {
  // if (!raw || !Array.isArray(raw)) return [];

  return raw.map((menu) => ({
    ...menu,
    columns: menu.columns.map((col) => {
      if (col.type === "cards") {
        return {
          ...col,
          items: col.items.map((item) => ({
            ...item,
            href: item.href as NavCardItem["href"],
            icon: iconMap[item.iconKey] ?? iconMap["default"],
            target: resolveTarget(item.href, item.target),
          })),
        };
      }
      return col;
    }),
  }));
}

export default function Header(
  { rawMenus }: { rawMenus: RawNavConfig[] }
) {
  const menus = resolveMenus(rawMenus);
  const [isMenuActive, setIsMenuActive] = useState(false);

  const closeMenu = () => setIsMenuActive(false);
  const toggleMenu = () => setIsMenuActive((v) => !v);

  return (
    <>
      <header className="sticky top-0 z-50 w-full bg-black/50 backdrop-blur-md">
        <div className="flex h-20 items-center justify-between px-6 md:h-23 md:px-12.5">
          {/* Left: Logo */}
          <Logo />

          {/* Center: Navigation (Desktop only) */}
          {/* <NavMenu /> */}
          {/* Desktop nav */}
          <div className="hidden xl:block">
            <Navbar menus={menus} />
          </div>

          {/* Right: Actions */}
          <div className="flex items-center gap-4 md:gap-8">
            <div className="hidden items-center gap-8 lg:flex">
              <SocialLinks />
            </div>
            <Button
              className="hidden px-5 md:flex"
              size="default"
              variant="gradient"
            >
              Build On LCAI
            </Button>

            {/* Mobile Menu Toggle */}
            <div className="block h-11 xl:hidden">
              <Button
                aria-expanded={isMenuActive}
                aria-haspopup="dialog"
                className="flex size-11 items-center justify-center rounded-full border border-bdr-soft bg-surface-base-subtle text-content-strong transition-all p-0"
                onClick={toggleMenu}
                variant="outline"
              >
                <Menu size={24} />
              </Button>
            </div>
          </div>
        </div>
      </header>

      <PopupMobileMenu
        isActive={isMenuActive}
        menus={menus}
        onClose={closeMenu}
      />
    </>
  );
}
