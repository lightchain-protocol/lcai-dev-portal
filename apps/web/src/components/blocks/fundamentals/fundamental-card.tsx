import { Button } from "@/components/ui/button";

interface FundamentalCardProps {
	icon: React.ComponentType<{ className?: string }>;
	title: string;
	desc: string;
}

export function FundamentalCard({
	icon: Icon,
	title,
	desc,
}: FundamentalCardProps) {
	return (
		<div className="flex h-full flex-col rounded-[16px] border border-border-slate-soft bg-surface-slate-medium p-5">
			<Icon className="mb-5" />
			<h5 className="mb-1.5 font-medium text-content-slate-strong">{title}</h5>
			<p className="type-body-m mb-4 text-[#9F9FA9]">{desc}</p>
			<div className="mt-auto">
				<Button className="" size="sm" variant="outline">
					More Details
				</Button>
			</div>
		</div>
	);
}
