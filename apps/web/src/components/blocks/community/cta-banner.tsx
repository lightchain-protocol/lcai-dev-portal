import { Icon } from "@/components/shared/icon";
import { Button } from "@/components/ui/button";
import CommunityHorizontalBar from "@/components/ui/svgs/community-horizontal-bar";
import CommunityVerticalBar from "@/components/ui/svgs/community-vertical-bar";

export default function CtaBanner() {
	return (
		<div className="relative mx-auto flex min-h-[415px] max-w-[1000px] flex-col items-center justify-center overflow-hidden rounded-3xl bg-surface-slate-medium px-4 pt-8 pb-12 text-center">
			<div className="absolute top-0 left-0">
				<img src="/images/glow-effects.png" />
			</div>

			<div className="absolute top-8 bottom-8 left-4">
				<CommunityVerticalBar />
			</div>
			<div className="absolute top-8 right-4 bottom-8">
				<CommunityVerticalBar />
			</div>
			<div className="absolute top-4 right-8 left-8">
				<CommunityHorizontalBar />
			</div>
			<div className="absolute right-8 bottom-4 left-8">
				<CommunityHorizontalBar />
			</div>

			<div className="relative z-30 mx-auto flex h-[94px] w-[71px] justify-center">
				<Icon name="icon-lightning" size={94} />
			</div>

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
