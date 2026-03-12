import { FundamentalCard } from "./fundamental-card";

const FUNDAMENTALS = [
	{
		icon: "/icons/shield.svg",
		title: "Proof of Intelligence",
		desc: "Consensus mechanism that validates AI computations on-chain.",
	},
	{
		icon: "/icons/brain.svg",
		title: "AI Virtual Machine",
		desc: "Execute and verify AI inference directly on the blockchain.",
	},
	{
		icon: "/icons/lock.svg",
		title: "Privacy options",
		desc: "Zero-knowledge proofs and encrypted computation for sensitive workloads.",
	},
	{
		icon: "/icons/governance.svg",
		title: "On-chain governance",
		desc: "Community-driven protocol upgrades and parameter adjustments.",
	},
];

export function FundamentalsGrid() {
	return (
		<>
			<h2 className="mb-6 text-center font-semibold text-3xl text-content-slate-medium leading-[1.16] tracking-[-0.48px] md:mb-10 md:text-5xl">
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
