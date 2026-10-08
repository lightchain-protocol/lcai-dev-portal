"use client";

import clsx from "clsx";
import { ChevronDown, X } from "lucide-react";
import Link from "next/link";
import { useEffect, useMemo, useRef, useState } from "react";
import { socialIconMap } from "@/lib/footer/socialIconMap";
import type { RawSocialLink } from "@/lib/footer/types";
import Logo from "../layout/logo";
import type { MegaCol, MenuConfig, NavCardItem } from "./types";

interface PopupMobileMenuProps {
	menus: MenuConfig[];
	isActive: boolean;
	onClose: () => void;
	socials: RawSocialLink[];
}

/** Flatten the desktop mega-menu columns into a simple mobile list */
function extractItemsFromColumns(columns: MegaCol[]) {
	interface MobileItem {
		label: string;
		href?: NavCardItem["href"];
		badge?: string;
	}
	const groups: { title?: string; items: MobileItem[] }[] = [];

	for (const col of columns) {
		// Title-only column becomes a group header (no items)
		if (col.type === "title") {
			groups.push({ title: col.title, items: [] });
			continue;
		}

		// Cards column: add each card as a link item
		if (col.type === "cards") {
			const items: MobileItem[] = (col.items || []).map((it: NavCardItem) => ({
				label: it.label || "Untitled",
				href: it.href || "#",
				badge: it.badge,
			}));
			// If the previous pushed group was a title with no items, append to it;
			// otherwise create an unnamed group.
			const last = groups.at(-1);
			if (last && last.items.length === 0 && last.title) {
				last.items.push(...items);
			} else {
				groups.push({ items });
			}
		}
	}

	// If nothing matched, provide an empty group to avoid collapse oddities
	if (groups.length === 0) {
		groups.push({ items: [] });
	}
	return groups;
}

export default function PopupMobileMenu({
	menus,
	isActive,
	onClose,
	socials,
}: PopupMobileMenuProps) {
	const menuRef = useRef<HTMLDivElement | null>(null);
	const [openIdx, setOpenIdx] = useState<number | null>(0);

	// close on outside click
	useEffect(() => {
		const onDown = (e: MouseEvent) => {
			if (menuRef.current && !menuRef.current.contains(e.target as Node)) {
				onClose();
			}
		};
		if (isActive) {
			document.addEventListener("mousedown", onDown);
		}
		return () => document.removeEventListener("mousedown", onDown);
	}, [isActive, onClose]);

	// lock body scroll when open
	useEffect(() => {
		if (!isActive) {
			return;
		}
		const prev = document.body.style.overflow;
		document.body.style.overflow = "hidden";
		return () => {
			document.body.style.overflow = prev;
		};
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
			aria-hidden={!isActive}
			aria-modal="true"
			className={clsx(
				"fixed inset-0 z-9999 transition-opacity duration-300 ease-in-out xl:hidden",
				isActive ? "visible opacity-100" : "invisible opacity-0"
			)}
			role="dialog"
		>
			{/* Overlay */}
			<button
				aria-label="Close menu"
				className="absolute inset-0 bg-surface-black/70 backdrop-blur-sm"
				onClick={onClose}
				type="button"
			/>

			{/* Drawer */}
			<div
				className={clsx(
					"relative flex h-full w-[304px] flex-col border-r sm:w-[336px]",
					"border-bdr-light bg-background text-content-primary shadow-[0_40px_80px_rgba(0,0,0,0.45)]",
					"transition-transform duration-300 ease-in-out",
					isActive ? "translate-x-0" : "-translate-x-full"
				)}
				ref={menuRef}
			>
				{/* Header */}
				<div className="sticky top-0 z-10 flex items-center justify-between border-bdr-light border-b bg-surface-x-soft-hex p-4">
					<Logo className="inline-flex items-center gap-2" onClick={onClose} />
					<button
						aria-label="Close"
						className="flex h-9 w-9 items-center justify-center rounded-full text-content-secondary transition-colors duration-300 ease-in-out hover:bg-surface-soft"
						onClick={onClose}
						type="button"
					>
						<X size={20} />
					</button>
				</div>

				{/* Sections (from desktop menus) */}
				<div className="flex-1 overflow-y-auto px-3 py-4">
					{sections.map((sec, i) => {
						const open = openIdx === i;
						return (
							<div className="mb-3" key={sec.label}>
								<button
									aria-expanded={open}
									className="flex w-full items-center justify-between px-3 py-2 text-content-secondary text-sm uppercase tracking-wide"
									onClick={() => setOpenIdx(open ? null : i)}
									type="button"
								>
									<span>{sec.label}</span>
									<ChevronDown
										className={clsx(
											"transition-transform duration-300 ease-in-out",
											open && "rotate-180"
										)}
										size={20}
									/>
								</button>

								<div
									className={clsx(
										"ml-4 overflow-hidden",
										open ? "max-h-[1200px] opacity-100" : "max-h-0 opacity-0",
										"transition-all duration-300 ease-in-out"
									)}
								>
									{sec.groups.map((g, gi) => (
										<div
											className={clsx(
												gi > 0 && "border-br-light-soft/50 border-t"
											)}
											key={g.title ?? g.items.map((it) => it.label).join("|")}
										>
											{g.title && (
												<div className="px-4 pt-3 font-semibold text-[11px] text-content-soft uppercase tracking-wide">
													{g.title}
												</div>
											)}
											<ul className="px-1 py-2">
												{g.items.map((item) => (
													<li key={item.label}>
														<Link
															className="flex items-center justify-between rounded-md px-3 py-2 text-[15px] text-content-primary hover:bg-surface-m-soft"
															href={item.href ?? "#"}
															onClick={onClose}
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
				<div className="sticky bottom-0 border-br-light-soft border-t bg-surface-x-soft-hex p-3">
					<h6 className="block w-full rounded-xl pt-2 text-center font-medium text-content-white text-sm">
						Social Media
					</h6>

					<div className="mt-3 flex items-center justify-center gap-3">
						{socials.map((social) => {
							const IconComponent = socialIconMap[social.iconKey];
							if (!IconComponent) {
								return null;
							}

							return (
								<a
									aria-label={social?.text}
									className="text-lg text-white transition-colors"
									href={social?.href}
									key={social.href}
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
