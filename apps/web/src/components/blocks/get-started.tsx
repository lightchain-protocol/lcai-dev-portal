import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { CopyIcon } from "lucide-react";

interface FieldProps {
	label: string;
	value: string;
	fullWidth?: boolean;
}

interface ToolCardProps {
	icon: React.ReactNode;
	name: string;
	desc: string;
	mono?: boolean;
}

export default function GetStartedSection() {
	return (
		<section className="flex flex-col items-center px-6 py-20 font-sans">
			{/* Section heading */}
			<h2 className="mb-3 text-center text-white font-bold text-[clamp(1.8rem,4vw,2.5rem)]">
				Get started on Lightchain
			</h2>
			<p className="mb-10 max-w-[480px] text-center text-white/50 text-base leading-relaxed">
				Add LightChain to your wallet and deploy your first contract or AI
				workload in minutes.
			</p>

			{/* Main box */}
			<div className="grid w-full max-w-[900px] grid-cols-1 gap-8 rounded-[20px] border border-brand-primary/25 bg-linear-to-br from-brand-primary/18 via-brand-dark/95 to-brand-dark/98 p-10 md:grid-cols-2">
				{/* ── LEFT: Network Specs ── */}
				<div className="flex flex-col gap-6">
					{/* Title + tabs */}
					<div className="flex items-center justify-between">
						<h3 className="m-0 text-white font-bold text-xl">Network Specs</h3>

						{/* Tab pills */}
						<div className="flex overflow-hidden rounded-lg border border-brand-primary/30">
							{/* Active tab */}
							<span className="cursor-pointer bg-linear-to-r from-[#7064E9] to-[#FF12FB] px-4 py-1.5 text-white font-semibold text-[0.85rem]">
								Testnet
							</span>
							{/* Inactive tab */}
							<span className="cursor-pointer bg-transparent px-4 py-1.5 text-white/50 font-medium text-[0.85rem]">
								Mainnet
							</span>
						</div>
					</div>

					{/* Divider */}
					<hr className="m-0 border-t border-white/8" />

					{/* Fields grid */}
					<div className="grid grid-cols-1 gap-x-4 gap-y-5 sm:grid-cols-2">
						<Field label="Chain ID" value="[TBD]" />
						<Field label="RPC URL" value="https://testnet-rpc.lightchain.io" />
						<Field label="Currency / Gas Token" value="LCAI" />
						<Field
							label="Explorer URL"
							value="https://testnet-explorer.lightchain.io"
						/>
						<Field
							fullWidth
							label="Faucet"
							value="https://faucet.lightchain.io"
						/>
					</div>

					{/* Buttons */}
					<div className="mt-1 flex flex-wrap gap-3">
						<Button className="flex-1" variant="gradient">
							Add Network to Wallet
						</Button>
						<Button className="flex-1" variant="outline">
							Get Testnet Tokens
						</Button>
					</div>

					<p className="m-0 text-white/40 text-[0.8rem]">
						Having trouble connecting?{" "}
						<a className="text-brand-primary no-underline hover:underline" href="#">
							Check Status
						</a>{" "}
						or try an alternate RPC endpoint.
					</p>
				</div>

				{/* ── RIGHT: Deployment Guides ── */}
				<div className="flex flex-col gap-4">
					<div>
						<h3 className="mb-1.5 text-white font-bold text-xl">
							Deployment Guides
						</h3>
						<p className="m-0 text-white/45 text-sm leading-relaxed">
							Choose your preferred development environment and deploy in
							minutes.
						</p>
					</div>

					{/* Tool cards */}
					<div className="grid grid-cols-1 gap-2.5 sm:grid-cols-3">
						<ToolCard
							desc="Browser IDE to deploy fast, no local setup."
							icon="📄"
							name="Remix"
						/>
						<ToolCard
							desc="Local dev workflow with scripts, tests, and plugins."
							icon="🔨"
							name="Hardhat"
						/>
						<ToolCard
							desc="High-speed Solidity toolkit for testing, fuzzing, and scripting."
							icon=">_"
							mono
							name="Foundry"
						/>
					</div>

					{/* Documentation button */}
					<div className="mt-1">
						<Button variant="outline">Documentation</Button>
					</div>
				</div>
			</div>
		</section>
	);
}

function Field({ label, value, fullWidth }: FieldProps) {
	return (
		<div className={cn(fullWidth && "col-span-full")}>
			<p className="mb-1 text-white/40 font-medium text-[0.75rem] tracking-wider uppercase">
				{label}
			</p>
			<div className="flex items-center gap-2">
				<span className="break-all text-white/85 text-[0.9rem] font-medium">
					{value}
				</span>
				<button
					className="shrink-0 cursor-pointer p-0 text-white/35 text-[0.85rem] transition-colors hover:text-white"
					title="Copy"
					type="button"
				>
					<CopyIcon size={14} />
				</button>
			</div>
		</div>
	);
}

function ToolCard({ icon, name, desc, mono }: ToolCardProps) {
	return (
		<div className="flex flex-col gap-2.5 rounded-xl border border-brand-primary/20 bg-white/3 p-3.5 transition-colors hover:border-brand-primary/40">
			{/* Icon */}
			<div
				className={cn(
					"flex h-9 w-9 items-center justify-center rounded-lg border border-brand-primary/25 bg-brand-primary/15 text-brand-light",
					mono ? "font-mono font-bold text-[0.75rem]" : "text-base"
				)}
			>
				{icon}
			</div>

			{/* Name + arrow */}
			<div className="flex items-center justify-between">
				<span className="text-white font-semibold text-[0.95rem]">{name}</span>
				<span className="text-white/40 text-[0.8rem]">›</span>
			</div>

			{/* Desc */}
			<p className="m-0 text-white/40 text-[0.78rem] leading-relaxed line-clamp-2">
				{desc}
			</p>
		</div>
	);
}