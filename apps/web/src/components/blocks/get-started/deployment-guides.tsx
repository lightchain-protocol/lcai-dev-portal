import { Icon } from "@/components/shared/icon";
import { Button } from "@/components/ui/button";
import { ToolCard } from "./tool-card";

export function DeploymentGuides() {
	return (
		<div className="flex flex-col rounded-3xl bg-surface-slate-strong p-4 md:p-6">
			<h4 className="mb-1.5 font-medium text-white">Deployment Guides</h4>
			<p className="type-body-s max-w-[365px] text-content-slate-medium">
				Choose your preferred development environment and deploy in minutes.
			</p>

			{/* Tool cards */}
			<div className="mt-6 mb-4 grid grid-cols-1 gap-2.5 sm:grid-cols-3">
				<ToolCard
					desc="Browser IDE to deploy fast, no local setup."
					icon={<Icon name="remix" size={20} />}
					name="Remix"
				/>
				<ToolCard
					desc="Local dev workflow with scripts, tests, and plugins."
					icon={<Icon name="hardhat" size={20} />}
					name="Hardhat"
				/>
				<ToolCard
					desc="High-speed Solidity toolkit for testing, fuzzing, and scripting."
					icon={<Icon name="foundry" size={20} />}
					name="Foundry"
				/>
			</div>

			{/* Documentation button */}
			<div className="mt-auto">
				<Button variant="outline">Documentation</Button>
			</div>
		</div>
	);
}
