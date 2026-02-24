import Divider from "@/components/ui/divider";
import GetStartedGlow from "@/components/ui/svgs/get-started-glow";
import { DeploymentGuides } from "./deployment-guides";
import { NetworkSpecs } from "./network-specs";

export default function GetStartedSection() {
	return (
		<section className="flex flex-col items-center bg-[url('/images/bg-pattern.png')] bg-center bg-cover bg-no-repeat py-20 font-sans md:py-30">
			<div className="container">
				<div className="relative mx-auto w-full max-w-275 overflow-hidden rounded-[24px] border border-border-slate-medium bg-[#06060e] p-3 pt-8">
					<div
						className="absolute top-0 left-0"
						style={{ willChange: "filter" }}
					>
						<GetStartedGlow />
					</div>
					<h2 className="mb-3 text-center text-content-slate-medium">
						Get started on Lightchain
					</h2>
					<p className="type-body-l mx-auto max-w-120 text-center text-content-slate-medium">
						Add LightChain to your wallet and deploy your first contract or AI
						workload in minutes.
					</p>
					<Divider className="mx-auto my-3 max-w-full" />

					<div className="mt-4 grid w-full grid-cols-1 gap-8 md:grid-cols-2 md:gap-4 lg:gap-12">
						<NetworkSpecs />
						<DeploymentGuides />
					</div>
				</div>
			</div>
		</section>
	);
}
