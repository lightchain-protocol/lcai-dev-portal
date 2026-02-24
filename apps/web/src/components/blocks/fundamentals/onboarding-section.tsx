import { Icon } from "@/components/shared/icon";
import { Button } from "@/components/ui/button";

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
		<div className="relative overflow-hidden rounded-3xl border border-border-slate-soft bg-surface-slate-medium p-6 pt-10 mt-4">
			<div className="relative z-10">
				<h2 className="text-content-slate-medium text-center mb-15">
					Your first 30 minutes <br /> on Lightchain
				</h2>

				<div className="relative mx-auto mt-4 mb-15 max-w-[1100px]">
					{/* Vertical Lines - only on desktop */}
					<div className="hidden lg:block">
						{[0, 33.33, 66.66, 100].map((left) => (
							<div
								className="absolute top-[-45px] bottom-[-45px] w-px"
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
						{/* Row 1: Seq Numbers - Hidden on mobile if redundant with vertical layout, or kept if styled */}
						<div className="relative col-span-1 lg:col-span-3 lg:flex hidden h-14 items-center">
							<div
								className="absolute top-0 right-[-80px] left-[-80px] h-px"
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
								className="absolute right-[-80px] bottom-0 left-[-80px] h-px"
								style={{
									background:
										"linear-gradient(to right, transparent, rgba(255,255,255,0.08) 10%, rgba(255,255,255,0.08) 90%, transparent)",
								}}
							/>
						</div>

						{/* Main Content Area */}
						{STEPS.map((step) => (
							<div key={step.num} className="flex flex-col">
								{/* step number for mobile */}
								<div className="block lg:hidden px-4 pt-8">
									<span className="type-body-s font-semibold text-brand-primary">
										{step.num}
									</span>
								</div>
								
								<div className="flex flex-col p-6 lg:px-6 lg:py-5 md:h-60">
									<div className="h-10 w-10 mb-8">{step.icon}</div>
									<div className="flex flex-col gap-2">
										<h3 className="h5 text-content-slate-strong mb-2">
											{step.title}
										</h3>
										<p className="type-body-m text-[#9F9FA9]">
											{step.desc}
										</p>
									</div>
								</div>

								<div className="px-6 pb-12 lg:hidden">
									{step.num === "03" ? (
										<div className="flex flex-col sm:flex-row gap-3">
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
											{step.num === "01"
												? "Add to Wallet"
												: "Visit Faucet"}
										</Button>
									)}
								</div>
								
								{/* Divider for mobile */}
								<div className="lg:hidden h-px bg-white/10 mx-4" />
							</div>
						))}

						{/* Row 3: Buttons - Desktop only */}
						<div className="relative col-span-1 lg:col-span-3 hidden lg:flex items-center">
							<div
								className="absolute right-[-80px] top-0 left-[-80px] h-px"
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
												{step.num === "01"
													? "Add to Wallet"
													: "Visit Faucet"}
											</Button>
										)}
									</div>
								))}
							</div>
							<div
								className="absolute right-[-80px] bottom-0 left-[-80px] h-px"
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
