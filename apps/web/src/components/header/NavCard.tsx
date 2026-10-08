"use client";

import clsx from "clsx";
import { ArrowRight, ChevronRight } from "lucide-react";
import Link from "next/link";
import type { NavCardItem } from "./types";

export default function NavCard({ item }: { item: NavCardItem }) {
	const base =
		"relative group flex items-start gap-3 rounded-xl px-2.5 py-2 transition-all duration-300 ease-in-out";
	const hover =
		"hover:bg-surface-slate-soft hover:shadow-[inset_0_0_0_1px_rgba(255,255,255,0.06)]";
	const active = item.active
		? "bg-surface-soft shadow-[inset_0_0_0_1px_rgba(255,255,255,0.12)]"
		: "";

	const gradient = {
		background:
			"linear-gradient(94deg,#dd00ac 10.66%,#7130c3 53.03%,#410093 96.34%,rgba(255,0,238,0.26) 191.41%,rgba(255,59,212,0) 191.43%)",
	} as const;

	return (
		<Link
			className={clsx(base, hover, active)}
			href={item.href}
			target={item.target}
		>
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
				<span className="absolute inset-px rounded-full bg-background ring-2 ring-border-slate-soft transition-all duration-300 group-hover:ring-transparent" />
				{/* actual icon on top */}
				<span className="relative z-1 inline-flex h-9 w-9 items-center justify-center rounded-full">
					{item.icon ? (
						<item.icon
							className="text-content-slate-medium transition-transform duration-300 group-hover:scale-[1.02]"
							size={16}
						/>
					) : null}
				</span>
			</span>

			{/* text */}
			<span className="min-w-0">
				<span className="block font-semibold text-content-slate-strong text-sm leading-tight">
					{item.label}
				</span>
				{item.desc && (
					<span className="mt-0.5 block text-content-slate-medium text-xs leading-snug">
						{item.desc}
					</span>
				)}
			</span>

			{/* right arrows */}
			<span className="absolute top-1/2 right-2 flex w-4 -translate-y-1/2 overflow-hidden">
				<ArrowRight
					className="-translate-x-3 opacity-0 transition-all duration-300 ease-in-out group-hover:translate-x-0 group-hover:opacity-100"
					size={22}
				/>
				<ChevronRight
					className="-ml-3 translate-x-0 opacity-100 transition-all duration-300 ease-in-out group-hover:translate-x-3 group-hover:opacity-0"
					size={22}
				/>
			</span>
		</Link>
	);
}
