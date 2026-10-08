import type { ReactNode } from "react";
import { Link } from "@/components/ui/link";
import CommunityGlow from "@/components/ui/svgs/community-glow";

export default function CommunityCard({
	title,
	text,
	icon,
	href,
}: {
	title: string;
	text: string;
	icon: ReactNode;
	href: string;
}) {
	return (
		<Link
			className="relative overflow-hidden rounded-3xl border border-border-slate-soft bg-surface-slate-strong px-5 pt-4 pb-6 text-center transition-all duration-300 hover:bg-brand-dark"
			href={href}
		>
			<div
				className="absolute bottom-0 left-0"
				style={{ willChange: "filter" }}
			>
				<CommunityGlow />
			</div>
			<div className="relative z-10 mx-auto mb-4 flex h-21 w-21 items-center justify-center">
				{icon}
			</div>
			<h5 className="relative z-10 mb-1.5 text-content-slate-strong">
				{title}
			</h5>
			<p className="type-body-m relative z-10 text-[#9F9FA9]">{text}</p>
		</Link>
	);
}
