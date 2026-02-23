import { Icon } from "@/components/shared/icon";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

interface SecurityCardProps {
	icon: string;
	title: string;
	desc: string;
	cta: string;
}

export function SecurityCard({ icon, title, desc, cta }: SecurityCardProps) {
	return (
		<div className="rounded-3xl border border-border-slate-soft bg-surface-slate-medium p-5">
			<Icon name={icon.replace("/icons/", "").replace(".svg", "")} size={32} className="mb-5" />
			<h3 className="text-content-slate-strong text-[20px] leading-[1.4] font-medium mb-1.5">{title}</h3>
			<p className="text-[#9F9FA9] type-body-m mb-6">
				{desc}
			</p>
			<Button size="sm" variant="outline">
				{cta} <ArrowRight width={12} height={12}/>
			</Button>
		</div>
	);
}
