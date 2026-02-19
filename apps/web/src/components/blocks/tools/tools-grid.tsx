import IconCli from "@/components/icons/icon-cli";
import IconExplorer from "@/components/icons/icon-explorer";
import IconFaucetTools from "@/components/icons/icon-faucet-tools";
import IconGovernanceTools from "@/components/icons/icon-governance-tools";
import IconRpc from "@/components/icons/icon-rpc";
import IconSdks from "@/components/icons/icon-sdks";
import { ToolCard } from "./tool-card";

const TOOLS = [
	{
		icon: IconCli,
		title: "Lightchain CLI",
		desc: "Command-line interface for deploying contracts, managing networks, and running AI workloads.",
		cta: "Install CLI",
	},
	{
		icon: IconSdks,
		title: "SDKs",
		desc: "Client libraries for JavaScript, Python, Rust, and Go to interact with Lightchain.",
		cta: "Browse SDKs",
	},
	{
		icon: IconRpc,
		title: "RPC and JSON-RPC",
		desc: "Ethereum-compatible RPC endpoints for reading and writing blockchain data.",
		cta: "RPC docs",
	},
	{
		icon: IconGovernanceTools,
		title: "Governance",
		desc: "Propose, discuss, and vote on network upgrades, grants, and protocol parameters.",
		cta: "Open governance",
	},
	{
		icon: IconFaucetTools,
		title: "Faucet",
		desc: "Get testnet tokens instantly to start building without needing real funds.",
		cta: "Get tokens",
	},
	{
		icon: IconExplorer,
		title: "Explorer",
		desc: "Browse blocks, transactions, addresses, and AI workloads on the blockchain.",
		cta: "More Details",
	},
];

export function ToolsGrid() {
	return (
		<div className="relative mx-auto w-full max-w-5xl px-4">
			{/* Vertical Dotted Lines (2 lines for 3 columns) */}
			<div className="pointer-events-none absolute inset-y-0 left-1/3 hidden w-px border-l border-dashed border-white/10 lg:block" />
			<div className="pointer-events-none absolute inset-y-0 left-2/3 hidden w-px border-l border-dashed border-white/10 lg:block" />

			{/* Horizontal Dotted Line (between rows) */}
			<div className="pointer-events-none absolute inset-x-0 top-1/2 hidden h-px border-t border-dashed border-white/10 lg:block" />

			{/* Grid Content */}
			<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
				{TOOLS.map((tool) => (
					<ToolCard key={tool.title} {...tool} />
				))}
			</div>
		</div>
	);
}

