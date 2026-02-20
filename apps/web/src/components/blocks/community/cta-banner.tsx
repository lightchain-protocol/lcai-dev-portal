import IconLightning from "@/components/icons/icon-lightning";
import { Button } from "@/components/ui/button";

export default function CtaBanner() {
	return (
		<div className="relative mx-auto max-w-[1000px] overflow-hidden rounded-3xl bg-surface-slate-medium px-4 pt-8 pb-12 text-center">
			<div
				className="pointer-events-none absolute inset-0 opacity-40"
				style={{ mixBlendMode: "lighten" }}
			>
				<div className="absolute -top-1/2 left-1/2 h-full w-[120%] -translate-x-1/2 rounded-full bg-[#7342FE] blur-[120px]" />
				<div className="absolute -top-1/4 left-1/2 h-[80%] w-[80%] -translate-x-1/2 rounded-full bg-[#E017FB] blur-[100px]" />
			</div>

			<IconLightning className="relative z-30 mx-auto" />

			<h3 className="relative z-30 my-2 text-content-slate-strong">
				Building something serious?
			</h3>
			<p className="type-body-l relative z-30 mx-auto max-w-md text-content-slate-strong">
				Let's help you ship it. Grants, technical support, and launch help for
				teams building on LightChain.
			</p>

			<div className="relative z-30 mt-10 flex flex-wrap items-center justify-center gap-3">
				<Button variant="gradient">Explore grants</Button>
				<Button variant="outline">Talk to the team</Button>
			</div>
		</div>
	);
}
