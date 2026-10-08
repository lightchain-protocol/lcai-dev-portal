"use client";

import { useState } from "react";
import { SwitcherToggle } from "@/components/ui/switcher";
import { MainnetSpecs } from "./mainnet-specs";
import { TestnetSpecs } from "./testnet-specs";

export function NetworkSpecs() {
	const [activeIndex, setActiveIndex] = useState(0);
	const buttons = ["testnet", "mainnet"];
	const contents = [
		<TestnetSpecs key="testnet" />,
		<MainnetSpecs key="mainnet" />,
	];

	return (
		<div className="rounded-3xl bg-surface-slate-strong p-4 md:p-6 md:pb-4">
			<div className="mb-6 flex flex-wrap items-center justify-between gap-3">
				<h4 className="font-medium text-white">Network Specs</h4>
				<SwitcherToggle
					activeIndex={activeIndex}
					buttons={buttons}
					onChange={setActiveIndex}
				/>
			</div>

			{contents[activeIndex]}

			<p className="type-caption mt-3 text-content-slate-soft">
				Having trouble connecting?{" "}
				<a className="text-brand-primary no-underline hover:underline" href="/">
					Check Status
				</a>{" "}
				or try an alternate RPC endpoint.
			</p>
		</div>
	);
}
