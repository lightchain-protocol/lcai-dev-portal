"use client";

import { iconMap } from "@/lib/nav/iconMap";
import { resolveTarget } from "@/lib/nav/resolveTarget";
import type { RawNavConfig } from "@/lib/nav/types";
import { Menu } from "lucide-react";
import { useState } from "react";
import Logo from "../layout/logo";
import SocialLinks from "../layout/social-links";
import { Button } from "../ui/button";
import Navbar from "./nav-menu";
import PopupMobileMenu from "./PopupMobileMenu";
import type { MenuConfig, NavCardItem } from "./types";
import type { RawSocialLink } from "@/lib/footer/types";

function resolveMenus(raw: RawNavConfig[]): MenuConfig[] {
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
  { rawMenus, socials }: { rawMenus: RawNavConfig[], socials: RawSocialLink[] }
) {
  const menus = resolveMenus(rawMenus);
  const [isMenuActive, setIsMenuActive] = useState(false);

  const closeMenu = () => setIsMenuActive(false);
  const toggleMenu = () => setIsMenuActive((v) => !v);

  return (
    <>
      <header className="sticky top-0 z-50 w-full bg-black/50 backdrop-blur-md">
        <div className="flex h-20 items-center justify-between px-6 md:h-20 md:px-12.5">
          {/* Left: Logo */}
          <Logo />

          {/* Center: Navigation (Desktop only) */}
          {/* Desktop nav */}
          <div className="hidden xl:block">
            <Navbar menus={menus} />
          </div>

          {/* Right: Actions */}
          <div className="flex items-center gap-4 md:gap-8">
            <div className="hidden items-center gap-8 lg:flex">
              <SocialLinks socials={socials} />
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
        socials={socials}
      />
    </>
  );
}
