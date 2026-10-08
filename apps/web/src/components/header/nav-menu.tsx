"use client";

import clsx from "clsx";
import { ChevronDown } from "lucide-react";
import React from "react";
import NavCard from "./NavCard";
import type { MegaCol, MenuConfig } from "./types";

const widthClasses = {
	small: "w-[300px]",
	wide: "w-[600px]",
	xwide: "w-[900px]",
} as const;

const gridClasses = {
	small: "grid grid-cols-1",
	wide: "grid grid-cols-1 md:grid-cols-2",
	xwide: "grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3",
} as const;

/** Stable key for a config column (columns carry no ids) */
function columnKey(col: MegaCol): string {
	switch (col.type) {
		case "title":
			return `title:${col.title}`;
		case "cards":
			return `cards:${col.items.map((it) => it.label).join("|")}`;
		case "imageCard":
			return `image:${col.title}`;
		default:
			return col.type;
	}
}

/** Merge pattern: [title, cards] -> single visual column */
function groupColumns(cols: MegaCol[]) {
	const grouped: Array<{ key: string; heading?: string; content: MegaCol }> =
		[];
	for (let i = 0; i < cols.length; i++) {
		const c = cols[i];
		if (c.type === "title" && cols[i + 1]?.type === "cards") {
			grouped.push({
				key: columnKey(cols[i + 1]),
				heading: c.title,
				content: cols[i + 1],
			});
			i++; // skip next (already merged)
		} else {
			grouped.push({ key: columnKey(c), content: c });
		}
	}
	return grouped;
}

export default function Navbar({ menus }: { menus: MenuConfig[] }) {
	const [open, setOpen] = React.useState<number | null>(null);

	return (
		// biome-ignore lint/a11y/noNoninteractiveElementInteractions: hover-intent close for the desktop mega menu; the toggle buttons remain keyboard-accessible
		<nav className="mainmenu-nav relative" onMouseLeave={() => setOpen(null)}>
			<ul className="mainmenu flex items-center">
				{menus.map((menu, idx) => {
					const groupedCols = groupColumns(menu.columns);
					const cols = groupedCols.filter(
						(col) => col.content.type !== "imageCard"
					);
					const contentColCount = cols.filter(
						(c) => c.content.type !== "title"
					).length;
					const effectiveWidth = contentColCount <= 1 ? undefined : menu.width;

					const width = widthClasses[effectiveWidth ?? "small"];

					const align = menu.align === "right" ? "right-0" : "left-0";

					return (
						<li
							className="with-megamenu has-menu-child-item relative px-1 sm:px-2"
							key={menu.label}
						>
							<button
								aria-expanded={open === idx}
								className={clsx(
									"flex h-20 items-center gap-1 px-3 font-medium text-base text-content-strong transition-colors duration-300 ease-in-out",
									open === idx
										? "text-surface-brand-pink"
										: "hover:text-surface-brand-pink"
								)}
								onMouseEnter={() => setOpen(idx)}
								type="button"
							>
								{menu.label}
								<ChevronDown className="ml-1" size={20} />
							</button>

							<div
								className={clsx(
									"lightchain-megamenu invisible absolute top-[100%-10px] z-40 opacity-0 transition-opacity duration-300 ease-in-out",
									align,
									open === idx && "visible opacity-100"
								)}
							>
								<div
									className={clsx(
										"wrapper mt-0 overflow-hidden rounded-b-2xl border border-bdr-light border-t-0 bg-surface-slate-medium bg-surface-x-soft-hex shadow-[0_8px_24px_-6px_rgba(12,12,13,0.08),0_4px_4px_-4px_rgba(12,12,13,0.05)]",
										width,
										"max-w-[95vw] xl:max-w-none"
									)}
								>
									<div className={gridClasses[effectiveWidth ?? "small"]}>
										{cols.map((g, i) => {
											// visual column wrapper
											const isLast = i === cols.length - 1;
											return (
												<div
													className={clsx(
														"single-mega-item p-4",
														!isLast && "border-bdr-light border-r"
													)}
													key={g.key}
												>
													{/* Title like the screenshot */}
													{g.heading && (
														<h3 className="lcai-short-title mb-3 border-bdr-light border-b pb-2 font-semibold text-content-soft text-xs uppercase tracking-wide">
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
