import Image from "next/image";
import { Button } from "@/components/ui/button";

interface FundamentalCardProps {
	icon: string;
	title: string;
	desc: string;
}

export function FundamentalCard({ icon, title, desc }: FundamentalCardProps) {
	return (
		<div className="flex h-full flex-col rounded-[16px] border border-border-slate-soft bg-surface-slate-medium p-5 transition-colors hover:bg-white/4">
			<Image
				alt={title}
				className="mb-5 h-8 w-8"
				height={32}
				src={icon}
				width={32}
			/>
			<h5 className="mb-1.5 font-medium text-content-slate-strong">{title}</h5>
			<p className="type-body-m mb-4 text-[#9F9FA9]">{desc}</p>
			<div className="mt-auto">
				<Button size="sm" variant="outline">
					More Details
				</Button>
			</div>
		</div>
	);
}
