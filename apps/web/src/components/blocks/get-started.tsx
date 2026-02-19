"use client";

import { useState } from "react";
import { ChevronRightIcon, CopyIcon } from "lucide-react";
import { toast } from "sonner";
import Foundry from "@/components/icons/foundry";
import HardhatIcon from "@/components/icons/hardhat";
import RemixIcon from "@/components/icons/remix";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import Divider from "../ui/divider";

interface FieldProps {
	label: string;
	value: string;
	fullWidth?: boolean;
}

interface ToolCardProps {
	icon: React.ReactNode;
	name: string;
	desc: string;
}

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
					<div className="flex flex-col gap-6 rounded-3xl bg-surface-slate-strong p-6">
						<Switcher
							buttons={["testnet", "mainnet"]}
							contents={[<TestnetSpecs key="testnet" />, <MainnetSpecs key="mainnet" />]}
						/>

						<p className="m-0 text-[0.8rem] text-white/40">
							Having trouble connecting?{" "}
							<a
								className="text-brand-primary no-underline hover:underline"
								href="/"
							>
								Check Status
							</a>{" "}
							or try an alternate RPC endpoint.
						</p>
					</div>

					{/* ── RIGHT: Deployment Guides ── */}
					<div className="flex flex-col rounded-3xl bg-surface-slate-strong p-6">
						<h4 className="mb-1.5 font-medium text-white">Deployment Guides</h4>
						<p className="type-body-s text-content-slate-medium max-w-[365px]">
							Choose your preferred development environment and deploy in
							minutes.
						</p>

						{/* Tool cards */}
						<div className="grid grid-cols-1 gap-2.5 sm:grid-cols-3 mt-6">
							<ToolCard
								desc="Browser IDE to deploy fast, no local setup."
								icon={<RemixIcon />}
								name="Remix"
							/>
							<ToolCard
								desc="Local dev workflow with scripts, tests, and plugins."
								icon={<HardhatIcon />}
								name="Hardhat"
							/>
							<ToolCard
								desc="High-speed Solidity toolkit for testing, fuzzing, and scripting."
								icon={<Foundry />}
								name="Foundry"
							/>
						</div>

						{/* Documentation button */}
						<div className="mt-auto">
							<Button variant="outline">Documentation</Button>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
}

function Switcher({
	buttons,
	contents,
}: {
	buttons: string[];
	contents: React.ReactNode[];
}) {
	const [activeIndex, setActiveIndex] = useState(0);

	return (
		<div className="flex flex-col gap-6">
			<div className="flex items-center justify-between">
				<h4 className="mb-1.5 font-medium text-white">Network Specs</h4>
				<div className="relative flex h-[36px] w-[180px] items-center rounded-[12px] bg-[#171E2E] p-1">
					<div
						className="absolute top-1 bottom-1 left-1 w-[calc(50%-4px)] rounded-[12px] bg-[#5B4BFF] transition-all duration-300 ease-in-out"
						style={{
							transform: `translateX(${activeIndex * 100}%)`,
						}}
					/>
					{buttons.map((label, idx) => (
						<button
							key={label}
							className={cn(
								"relative z-10 flex-1 cursor-pointer rounded-[12px] px-3 py-1.5 font-semibold type-body-s transition-colors capitalize",
								activeIndex === idx ? "text-white" : "text-white/50"
							)}
							onClick={() => setActiveIndex(idx)}
							type="button"
						>
							{label}
						</button>
					))}
				</div>
			</div>
			{contents[activeIndex]}
		</div>
	);
}

function TestnetSpecs() {
	return (
		<>
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

			<div className="mt-1 flex flex-wrap gap-3">
				<Button className="flex-1" variant="gradient">
					Add Network to Wallet
				</Button>
				<Button className="flex-1" variant="outline">
					Get Testnet Tokens
				</Button>
			</div>
		</>
	);
}

function MainnetSpecs() {
	return (
		<>
			<div className="grid grid-cols-1 gap-x-4 gap-y-5 sm:grid-cols-2">
				<Field label="Chain ID" value="[TBD]" />
				<Field label="RPC URL" value="https://rpc.lightchain.io" />
				<Field label="Currency / Gas Token" value="LCAI" />
				<Field label="Explorer URL" value="https://explorer.lightchain.io" />
			</div>

			<div className="mt-1 flex flex-wrap gap-3">
				<Button className="flex-1" variant="gradient">
					Add Network to Wallet
				</Button>
				<Button className="flex-1" variant="outline">
					Buy LCAI
				</Button>
			</div>
		</>
	);
}

function Field({ label, value, fullWidth }: FieldProps) {
	const handleCopy = () => {
		navigator.clipboard.writeText(value);
		toast.success(`${label} copied to clipboard`);
	};

	return (
		<div className={cn(fullWidth && "col-span-full")}>
			<p className="mb-1 font-medium text-[0.75rem] text-white/40 uppercase tracking-wider">
				{label}
			</p>
			<div className="flex items-center gap-2">
				<span className="break-all font-medium text-[0.9rem] text-white/85">
					{value}
				</span>
				<button
					className="shrink-0 cursor-pointer p-0 text-[0.85rem] text-white/35 transition-colors hover:text-white"
					onClick={handleCopy}
					title="Copy"
					type="button"
				>
					<CopyIcon size={14} />
				</button>
			</div>
		</div>
	);
}

function ToolCard({ icon, name, desc }: ToolCardProps) {
	return (
		<div className="rounded-[12px] border border-border-slate-medium bg-surface-slate-soft p-3">
			<div className="mb-4 flex h-9 w-9 items-center justify-center rounded-[8px] bg-[#FFFFFF08]">
				{icon}
			</div>
			<div className="mb-1.5 flex items-center justify-between">
				<span className="text-body-m text-content-slate-medium">{name}</span>
				<ChevronRightIcon className="text-content-slate-medium" />
			</div>
			<p className="type-caption text-content-slate-medium">{desc}</p>
		</div>
	);
}
