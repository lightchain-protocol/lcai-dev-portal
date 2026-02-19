import { ChevronRightIcon } from "lucide-react";

interface ToolCardProps {
	icon: React.ReactNode;
	name: string;
	desc: string;
}

export function ToolCard({ icon, name, desc }: ToolCardProps) {
	return (
		<div className="rounded-[12px] border border-border-slate-medium bg-surface-slate-soft p-3">
			<div className="mb-4 flex h-9 w-9 items-center justify-center rounded-[8px] bg-[#FFFFFF08]">
				{icon}
			</div>
			<div className="mb-1.5 flex items-center justify-between">
				<span className="text-body-m text-content-slate-medium">{name}</span>
				<ChevronRightIcon className="text-content-slate-medium" />
			</div>
			<p className="type-caption text-content-slate-medium">{desc}</p>
		</div>
	);
}
