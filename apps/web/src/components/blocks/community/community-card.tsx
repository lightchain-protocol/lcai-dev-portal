import type { ReactNode } from "react";
import Glow2 from "@/components/icons/glow-2";

export default function CommunityCard({
	title,
	text,
	icon,
}: {
	title: string;
	text: string;
	icon: ReactNode;
}) {
	return (
		<div className="relative rounded-3xl border border-border-slate-soft bg-surface-slate-strong px-5 pt-4 pb-6 text-center">
			<Glow2 className="absolute right-0 bottom-0 left-0" />
			<div className="mx-auto mb-4 flex h-21 w-21 items-center justify-center">
				{icon}
			</div>
			<h5 className="mb-1.5 text-content-slate-strong">{title}</h5>
			<p className="type-body-m text-[#9F9FA9]">{text}</p>
		</div>
	);
}
