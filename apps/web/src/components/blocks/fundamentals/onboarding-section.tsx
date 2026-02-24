import clsx from "clsx";
import { Icon } from "@/components/shared/icon";
import { Button } from "@/components/ui/button";
import FundamentalGlow from "@/components/ui/svgs/fundamental-glow";

const STEPS = [
	{
		num: "01",
		icon: <Icon name="icon-connect" size={40} />,
		title: "Connect",
		desc: "Add the Lightchain network to MetaMask or your preferred Web3 wallet.",
	},
	{
		num: "02",
		icon: <Icon name="icon-fund" size={40} />,
		title: "Fund",
		desc: "Get testnet LIGHT tokens from the faucet to start deploying.",
	},
	{
		num: "03",
		icon: <Icon name="icon-deploy" size={40} />,
		title: "Deploy",
		desc: "Choose your path: deploy a smart contract or run an AI workload.",
	},
];

export function OnboardingSection() {
	return (
		<div className="relative mt-4 overflow-hidden rounded-3xl border border-border-slate-soft bg-surface-slate-medium p-6 pt-10">
			<div className="absolute top-0 left-0" style={{ willChange: "filter" }}>
				<FundamentalGlow />
			</div>
			<div className="relative z-10">
				<h2 className="mb-8 text-center text-content-slate-medium md:mb-15">
					Your first 30 minutes <br /> on Lightchain
				</h2>

				<div className="relative mx-auto max-w-275 md:mt-4 md:mb-15">
					{/* Vertical Lines - only on desktop */}
					<div className="hidden lg:block">
						{[0, 33.33, 66.66, 100].map((left) => (
							<div
								className="absolute -top-11.25 -bottom-11.25 w-px"
								key={left}
								style={{
									left: `${left}%`,
									background:
										"linear-gradient(to bottom, transparent, rgba(255,255,255,0.08) 20%, rgba(255,255,255,0.08) 85%, transparent)",
								}}
							/>
						))}
					</div>

					<div className="grid grid-cols-1 lg:grid-cols-3">
						{/* Row 1: Seq Numbers - For desktop */}
						<div className="relative col-span-1 hidden h-14 items-center lg:col-span-3 lg:flex">
							<div
								className="absolute top-0 -right-20 -left-20 h-px"
								style={{
									background:
										"linear-gradient(to right, transparent, rgba(255,255,255,0.08) 10%, rgba(255,255,255,0.08) 90%, transparent)",
								}}
							/>
							<div className="grid w-full grid-cols-3">
								{STEPS.map((step) => (
									<div className="px-8" key={step.num}>
										<span className="type-body-l font-semibold text-brand-primary">
											{step.num}
										</span>
									</div>
								))}
							</div>
							<div
								className="absolute -right-20 bottom-0 -left-20 h-px"
								style={{
									background:
										"linear-gradient(to right, transparent, rgba(255,255,255,0.08) 10%, rgba(255,255,255,0.08) 90%, transparent)",
								}}
							/>
						</div>

						{/* Main Content Area */}
						{STEPS.map((step, idx) => (
							<div
								className={clsx("flex flex-col", idx !== 0 && "pt-6")}
								key={step.title}
							>
								{/* step number for mobile */}
								<div className="mb-2 lg:hidden">
									<span className="type-body-m font-semibold text-brand-primary">
										{step.num}
									</span>
								</div>

								<div className="flex flex-col md:h-60 lg:px-6 lg:py-5">
									<div className="mb-8 h-10 w-10">{step.icon}</div>
									<div className="flex flex-col gap-2">
										<h3 className="h5 mb-2 text-content-slate-strong">
											{step.title}
										</h3>
										<p className="type-body-m text-[#9F9FA9]">{step.desc}</p>
									</div>
								</div>

								<div className="py-6 lg:hidden">
									{step.num === "03" ? (
										<div className="flex gap-3 sm:flex-row">
											<Button
												className="flex-1 border-white/10 bg-white/5 hover:bg-white/10"
												variant="outline"
											>
												Deploy
											</Button>
											<Button
												className="flex-1 border-white/10 bg-white/5 hover:bg-white/10"
												variant="outline"
											>
												Workload
											</Button>
										</div>
									) : (
										<Button
											className="w-full border-white/10 bg-white/5 hover:bg-white/10"
											variant="outline"
										>
											{step.num === "01" ? "Add to Wallet" : "Visit Faucet"}
										</Button>
									)}
								</div>

								{/* Divider for mobile */}
								{idx !== STEPS.length - 1 && (
									<div className="mx-4 h-px bg-white/10 lg:hidden" />
								)}
							</div>
						))}

						{/* Row 3: Buttons - Desktop only */}
						<div className="relative col-span-1 hidden items-center lg:col-span-3 lg:flex">
							<div
								className="absolute top-0 -right-20 -left-20 h-px"
								style={{
									background:
										"linear-gradient(to right, transparent, rgba(255,255,255,0.08) 10%, rgba(255,255,255,0.08) 90%, transparent)",
								}}
							/>
							<div className="grid w-full grid-cols-3">
								{STEPS.map((step) => (
									<div className="p-8" key={step.num}>
										{step.num === "03" ? (
											<div className="flex gap-3">
												<Button
													className="flex-1 border-white/10 bg-white/5 hover:bg-white/10"
													variant="outline"
												>
													Deploy
												</Button>
												<Button
													className="flex-1 border-white/10 bg-white/5 hover:bg-white/10"
													variant="outline"
												>
													Workload
												</Button>
											</div>
										) : (
											<Button
												className="w-full border-white/10 bg-white/5 hover:bg-white/10"
												variant="outline"
											>
												{step.num === "01" ? "Add to Wallet" : "Visit Faucet"}
											</Button>
										)}
									</div>
								))}
							</div>
							<div
								className="absolute -right-20 bottom-0 -left-20 h-px"
								style={{
									background:
										"linear-gradient(to right, transparent, rgba(255,255,255,0.08) 10%, rgba(255,255,255,0.08) 90%, transparent)",
								}}
							/>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}
