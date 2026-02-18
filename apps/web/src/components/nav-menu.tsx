"use client";

import { ChevronDown } from "lucide-react";
import { usePathname } from "next/navigation";

import { Link } from "@/components/ui/link";
import { cn } from "@/lib/utils";

const NAV_ITEMS = [
	{ label: "Docs", href: "/docs", hasDropdown: true },
	{ label: "Tutorials", href: "/tutorials" },
	{ label: "Reference", href: "/reference" },
	{ label: "Event", href: "/event" },
];

export default function NavMenu() {
	const pathname = usePathname();

	return (
		<nav className="hidden items-center gap-9 md:flex">
			{NAV_ITEMS.map((item) => (
				<Link
					className={cn(
						"flex items-center gap-1 font-medium text-body-m transition-colors hover:text-brand-secondary",
						pathname === item.href
							? "text-brand-secondary"
							: "text-content-slate-strong"
					)}
					href={item.href}
					key={item.href}
				>
					{item.label}
					{item.hasDropdown && (
						<ChevronDown
							aria-hidden="true"
							className="size-4 text-content-slate-strong"
						/>
					)}
				</Link>
			))}
		</nav>
	);
}
