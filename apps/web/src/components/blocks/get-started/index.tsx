import Divider from "@/components/ui/divider";
import { DeploymentGuides } from "./deployment-guides";
import { NetworkSpecs } from "./network-specs";

export default function GetStartedSection() {
	return (
		<section className="flex flex-col items-center bg-[url('/images/bg-pattern.png')] bg-center bg-cover bg-no-repeat py-30 font-sans">
			<div className="mx-auto max-w-[1100px] rounded-[24px] border border-border-slate-medium p-3">
				<h2 className="mb-3 text-center font-semibold text-content-slate-medium">
					Get started on Lightchain
				</h2>
				<p className="type-body-l mx-auto max-w-[480px] text-center text-content-slate-medium">
					Add LightChain to your wallet and deploy your first contract or AI
					workload in minutes.
				</p>
				<Divider className="mx-auto mt-3 mb-4" />

				<div className="grid w-full grid-cols-2 gap-4 pt-4">
					<NetworkSpecs />
					<DeploymentGuides />
				</div>
			</div>
		</section>
	);
}
