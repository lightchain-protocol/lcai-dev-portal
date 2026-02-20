import Glow from "@/components/icons/glow";
import IconLightning from "@/components/icons/icon-lightning";
import { Button } from "@/components/ui/button";

export default function CtaBanner() {
	return (
		<div className="relative mx-auto max-w-[1000px] rounded-3xl bg-surface-slate-medium px-4 pt-8 pb-12 text-center">
			<Glow className="absolute inset-0" />

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
