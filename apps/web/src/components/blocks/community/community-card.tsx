import type { ReactNode } from "react";

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
		<div className="relative overflow-hidden rounded-3xl border border-border-slate-soft bg-surface-slate-strong px-5 pt-4 pb-6 text-center">
			{/* Glow Effect */}
			<div
				className="pointer-events-none absolute inset-0 opacity-50"
				style={{ mixBlendMode: "lighten" }}
			>
				<div className="absolute -bottom-24 left-1/2 h-44 w-62 -translate-x-1/2 rounded-full bg-[#7342FE] blur-[50px]" />
				<div className="absolute -bottom-16 left-1/2 h-32 w-44 -translate-x-1/2 rounded-full bg-[#E017FB] blur-2xl" />
			</div>

			<div className="relative z-10 mx-auto mb-4 flex h-21 w-21 items-center justify-center">
				{icon}
			</div>
			<h5 className="relative z-10 mb-1.5 text-content-slate-strong">
				{title}
			</h5>
			<p className="type-body-m relative z-10 text-[#9F9FA9]">{text}</p>
		</div>
	);
}
