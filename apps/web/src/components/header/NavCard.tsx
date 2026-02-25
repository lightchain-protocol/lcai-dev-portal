"use client";

import React from "react";
import Link from "next/link";
import clsx from "clsx";
import { ArrowRight, ChevronRight } from "lucide-react";
import type { NavCardItem } from "./types";

export default function NavCard({ item }: { item: NavCardItem }) {
  const base =
    "relative group flex items-start gap-3 rounded-xl px-2.5 py-2 transition-all duration-300 ease-in-out";
  const hover =
    "hover:bg-surface-m-soft hover:shadow-[inset_0_0_0_1px_rgba(255,255,255,0.06)]";
  const active = item.active
    ? "bg-surface-soft shadow-[inset_0_0_0_1px_rgba(255,255,255,0.12)]"
    : "";

  const gradient = {
    background:
      "linear-gradient(94deg,#dd00ac 10.66%,#7130c3 53.03%,#410093 96.34%,rgba(255,0,238,0.26) 191.41%,rgba(255,59,212,0) 191.43%)",
  } as const;

  return (
    <Link href={item.href} target={item.target} className={clsx(base, hover, active)}>
      {/* ICON with inline gradient ring (no globals.css) */}
      <span className="relative mt-0.5 inline-flex h-9 w-9 items-center justify-center">
        {/* gradient ring layer */}
        <span
          className={clsx(
            "pointer-events-none absolute -inset-px rounded-full opacity-0 transition-opacity duration-300",
            item.active && "opacity-100",
            "group-hover:opacity-100"
          )}
          style={gradient}
        />
        {/* inner dark disk + thin inner ring */}
        <span className="absolute inset-px rounded-full bg-background ring-2 ring-bdr-light" />
        {/* actual icon on top */}
        <span className="relative z-1 inline-flex h-9 w-9 items-center justify-center rounded-full">
          {item.icon ? (
            <item.icon size={16} className="text-content-primary transition-transform duration-300 group-hover:scale-[1.02]" />
          ) : null}
        </span>
      </span>

      {/* text */}
      <span className="min-w-0">
        <span className="block text-sm font-semibold leading-tight text-content-primary">
          {item.label}
        </span>
        {item.desc && (
          <span className="mt-0.5 block text-xs leading-snug text-content-secondary">
            {item.desc}
          </span>
        )}
      </span>

      {/* right arrows */}
      <span className="absolute right-2 top-1/2 -translate-y-1/2 flex w-4 overflow-hidden">
        <ArrowRight size={22} className="-translate-x-3 opacity-0 transition-all duration-300 ease-in-out group-hover:opacity-100 group-hover:translate-x-0" />
        <ChevronRight size={22} className="-ml-3 translate-x-0 opacity-100 transition-all duration-300 ease-in-out group-hover:translate-x-3 group-hover:opacity-0" />
      </span>
    </Link>
  );
}
