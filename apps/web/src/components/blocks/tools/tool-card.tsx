import { Icon } from "@/components/shared/icon";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

interface ToolCardProps {
	icon: string;
	title: string;
	desc: string;
	cta: string;
}

export function ToolCard({ icon, title, desc, cta }: ToolCardProps) {
	return (
		<div className="p-5 flex flex-col relative">
			<Icon className="mb-5" name={icon.replace("/icons/", "").replace(".svg", "")} size={32} />
			<h3 className="heading-5 text-content-slate-strong mb-1.5">{title}</h3>
			<p className="type-body-m text-[#9F9FA9] mb-6">
				{desc}
			</p>
			<Button size="sm" variant="outline" className="mt-auto mr-auto">
				{cta} <ArrowRight width={14} height={14} />
			</Button>
			<div className="pointer-events-none absolute bottom-0 left-0 h-px w-full border-white/10 border border-dashed lg:hidden" />
		</div>
	);
}
