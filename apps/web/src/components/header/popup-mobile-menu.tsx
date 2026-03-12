import clsx from "clsx";
import { X } from "lucide-react";
import { useCallback, useEffect, useMemo, useRef, useState } from "react";
import Logo from "./Logo";

interface MobileItem {
	label: string;
	href: string;
	badge?: string;
}

interface MobileGroup {
	title?: string;
	items: MobileItem[];
}

interface MobileSection {
	label: string;
	groups: MobileGroup[];
}

interface MenuItem {
	label: string;
	href?: string;
	badge?: string;
}

interface MenuColumn {
	type: "title" | "cards";
	title?: string;
	items?: MenuItem[];
}

interface MenuEntry {
	label: string;
	columns: MenuColumn[];
}

export function PopupMobileMenu({
	menus,
	isActive,
	onClose,
}: {
	menus: MenuEntry[];
	isActive: boolean;
	onClose: () => void;
}) {
	const menuRef = useRef<HTMLDivElement>(null);
	const [_openIdx, _setOpenIdx] = useState<number | null>(null);
	const extractItemsFromColumns = useCallback(
		(columns: MenuColumn[]): MobileGroup[] => {
			const groups: MobileGroup[] = [];

			for (const col of columns) {
				if (col.type === "title") {
					groups.push({ title: col.title, items: [] });
				}

				if (col.type === "cards") {
					const items: MobileItem[] = (col.items || []).map((it) => ({
						label: it.label || "Untitled",
						href: it.href || "#",
						badge: it.badge,
					}));

					const last = groups.at(-1);
					if (last && last.items.length === 0 && last.title) {
						last.items.push(...items);
					} else {
						groups.push({ items });
					}
				}
			}

			return groups;
		},
		[] // no dependencies — pure function
	);

	const _sections: MobileSection[] = useMemo(() => {
		return menus.map((m) => ({
			label: m.label,
			groups: extractItemsFromColumns(m.columns || []),
		}));
	}, [menus, extractItemsFromColumns]);

	useEffect(() => {
		function handleClick(e: MouseEvent) {
			if (menuRef.current && !menuRef.current.contains(e.target as Node)) {
				onClose();
			}
		}

		if (isActive) {
			document.addEventListener("mousedown", handleClick);
		}

		return () => {
			document.removeEventListener("mousedown", handleClick);
		};
	}, [isActive, onClose]);

	return (
		<div
			aria-hidden={!isActive}
			aria-modal="true"
			className={clsx(
				"fixed inset-0 z-9999 transition-opacity duration-300 ease-in-out",
				isActive ? "visible opacity-100" : "invisible opacity-0"
			)}
			role="dialog"
		>
			{/* Overlay */}
			<button
				aria-label="Close menu overlay"
				className="absolute inset-0 bg-surface-black/70 backdrop-blur-sm"
				onClick={onClose}
				onKeyDown={(e) => {
					if (e.key === "Enter" || e.key === " ") {
						onClose();
					}
				}}
				type="button"
			/>

			{/* Drawer */}
			<div
				className={clsx(
					"relative flex h-full w-[304px] flex-col border-bdr-light border-r bg-background text-content-primary transition-transform duration-300 ease-in-out",
					isActive ? "translate-x-0" : "-translate-x-full"
				)}
				ref={menuRef}
			>
				{/* Header */}
				<div className="sticky top-0 z-10 flex items-center justify-between border-bdr-light border-b bg-surface-x-soft-hex p-4">
					<Logo className="inline-flex items-center gap-2" onClick={onClose} />

					<button
						aria-label="Close menu"
						className="flex h-9 w-9 items-center justify-center rounded-full text-content-secondary transition-colors duration-300 ease-in-out hover:bg-surface-soft"
						onClick={onClose}
						type="button"
					>
						<X size={20} />
					</button>
				</div>
			</div>
		</div>
	);
}
