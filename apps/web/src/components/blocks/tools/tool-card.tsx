import { ArrowRight } from "lucide-react";
import { Icon } from "@/components/shared/icon";
import { Button } from "@/components/ui/button";

interface ToolCardProps {
	icon: string;
	title: string;
	desc: string;
	cta: string;
}

export function ToolCard({ icon, title, desc, cta }: ToolCardProps) {
	return (
		<div className="relative flex flex-col p-5">
			<Icon
				className="mb-5"
				name={icon.replace("/icons/", "").replace(".svg", "")}
				size={32}
			/>
			<h3 className="heading-5 mb-1.5 text-content-slate-strong">{title}</h3>
			<p className="type-body-m mb-6 text-[#9F9FA9]">{desc}</p>
			<Button className="mt-auto mr-auto" size="sm" variant="outline">
				{cta} <ArrowRight height={14} width={14} />
			</Button>
			<div className="pointer-events-none absolute bottom-0 left-0 h-px w-full border border-white/10 border-dashed lg:hidden" />
		</div>
	);
}
