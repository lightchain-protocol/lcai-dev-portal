import { Button } from "@/components/ui/button";

interface SecurityCardProps {
	icon: React.ComponentType<{ className?: string }>;
	title: string;
	desc: string;
	cta: string;
}

export function SecurityCard({
	icon: Icon,
	title,
	desc,
	cta,
}: SecurityCardProps) {
	return (
		<div className="flex flex-col gap-5 px-8 py-10">
			{/* Icon */}
			<Icon className="h-8 w-8 text-brand-primary" />

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
