"use client";

import clsx from "clsx";
import { ChevronDown } from "lucide-react";
import React from "react";
import NavCard from "./NavCard";
import type { MegaCol, MenuConfig } from "./types";

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
		<div onMouseLeave={() => setOpen(null)} role="none">
			<nav className="mainmenu-nav relative">
				<ul className="mainmenu flex items-center">
					{menus.map((menu, idx) => {
						const groupedCols = groupColumns(menu.columns);
						const cols = groupedCols.filter(
							(col) => col.content.type !== "imageCard"
						);
						const contentColCount = cols.filter(
							(c) => c.content.type !== "title"
						).length;

						const effectiveWidth =
							contentColCount <= 1 ? undefined : menu.width;

						// Replace nested ternary with clean logic
						let widthClass = "w-[300px]";
						if (effectiveWidth === "wide") {
							widthClass = "w-[600px]";
						} else if (effectiveWidth === "xwide") {
							widthClass = "w-[900px]";
						}

						const align = menu.align === "right" ? "right-0" : "left-0";

						return (
							<div
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

								{open === idx && (
									<div
										className={clsx(
											"absolute top-full z-50 mt-2 rounded-lg border border-bdr-light bg-surface-white shadow-lg transition-all duration-300 ease-in-out",
											widthClass,
											align
										)}
									>
										<div className="grid grid-cols-1 gap-6 p-6 md:grid-cols-2 xl:grid-cols-3">
											{groupedCols.map((col, colIdx) => {
												if (col.content.type === "title") {
													return (
														<div key={col.content.title ?? colIdx}>
															<h4 className="mb-2 font-semibold text-content-strong text-sm">
																{col.content.title}
															</h4>
														</div>
													);
												}

												if (col.content.type === "cards") {
													return (
														<div key={col.heading ?? colIdx}>
															{col.heading && (
																<h4 className="mb-2 font-semibold text-content-strong text-sm">
																	{col.heading}
																</h4>
															)}
															<div className="flex flex-col gap-3">
																{col.content.items.map((item, itemIdx) => (
																	<NavCard
																		key={item.label ?? itemIdx}
																		{...item}
																	/>
																))}
															</div>
														</div>
													);
												}

												return null;
											})}
										</div>
									</div>
								)}
							</div>
						);
					})}
				</ul>
			</nav>
		</div>
	);
}
