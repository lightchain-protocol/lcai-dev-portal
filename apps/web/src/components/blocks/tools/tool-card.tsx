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
		<div className="flex flex-col gap-5 px-8 py-10">
			{/* Icon */}
			<Icon name={icon.replace("/icons/", "").replace(".svg", "")} size={32} />

			{/* Text */}
			<div className="flex flex-1 flex-col gap-2">
				<h3 className="type-body-s font-semibold text-white">{title}</h3>
				<p className="type-body-xs text-content-slate-medium leading-relaxed">
					{desc}
				</p>
			</div>

			{/* CTA */}
			<div>
				<Button size="sm" variant="outline">
					{cta}
				</Button>
			</div>
		</div>
	);
}
