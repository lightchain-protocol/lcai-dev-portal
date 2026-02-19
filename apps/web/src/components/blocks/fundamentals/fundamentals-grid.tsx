import BrainIcon from "@/components/icons/brain";
import GovernanceIcon from "@/components/icons/governance";
import LockIcon from "@/components/icons/lock";
import ShieldIcon from "@/components/icons/shield";
import { FundamentalCard } from "./fundamental-card";

const FUNDAMENTALS = [
	{
		icon: ShieldIcon,
		title: "Proof of Intelligence",
		desc: "Consensus mechanism that validates AI computations on-chain.",
	},
	{
		icon: BrainIcon,
		title: "AI Virtual Machine",
		desc: "Execute and verify AI inference directly on the blockchain.",
	},
	{
		icon: LockIcon,
		title: "Privacy options",
		desc: "Zero-knowledge proofs and encrypted computation for sensitive workloads.",
	},
	{
		icon: GovernanceIcon,
		title: "On-chain governance",
		desc: "Community-driven protocol upgrades and parameter adjustments.",
	},
];

export function FundamentalsGrid() {
	return (
		<>
			<h2 className="mb-10 text-center text-content-slate-strong">
				Lightchain Fundamentals
			</h2>

			<div className="grid w-full grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
				{FUNDAMENTALS.map((item) => (
					<FundamentalCard key={item.title} {...item} />
				))}
			</div>
		</>
	);
}
