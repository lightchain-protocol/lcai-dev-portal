import IconConnect from "@/components/icons/icon-connect";
import IconDeploy from "@/components/icons/icon-deploy";
import IconFund from "@/components/icons/icon-fund";
import { Button } from "@/components/ui/button";

const STEPS = [
	{
		num: "01",
		icon: IconConnect,
		title: "Connect",
		desc: "Add the Lightchain network to MetaMask or your preferred Web3 wallet.",
	},
	{
		num: "02",
		icon: IconFund,
		title: "Fund",
		desc: "Get testnet LIGHT tokens from the faucet to start deploying.",
	},
	{
		num: "03",
		icon: IconDeploy,
		title: "Deploy",
		desc: "Choose your path: deploy a smart contract or run an AI workload.",
	},
];

export function OnboardingSection() {
	return (
		<div className="pt-18 pb-30">
			<div className="container">
				<div className="relative overflow-hidden rounded-[32px] border border-white/5 bg-[#080812]">
					{/* Background Glow */}
					<div className="absolute top-0 left-1/2 h-[300px] w-[600px] -translate-x-1/2 rounded-full bg-brand-primary/10 blur-[120px]" />

					{/* Content */}
					<div className="relative z-10">
						{/* Header */}
						<div className="flex flex-col items-center px-6 py-14 text-center">
							<h2 className="type-h2 font-bold text-white leading-tight md:text-4xl">
								Your first 30 minutes <br /> on Lightchain
							</h2>
						</div>

						{/* Grid Area with Custom Lines */}
						<div className="relative mx-auto mt-4 max-w-[1100px] px-4 pb-12">
							{/* Vertical Lines */}
							{[0, 33.33, 66.66, 100].map((left) => (
								<div
									className="absolute top-[-15px] bottom-0 w-px"
									key={left}
									style={{
										left: `${left}%`,
										background:
											"linear-gradient(to bottom, transparent, rgba(255,255,255,0.08) 15%, rgba(255,255,255,0.08) 85%, transparent)",
									}}
								/>
							))}

							{/* Horizontal Lines */}
							{/* The heights of rows are dynamic, so we can't easily use absolute for horizontal lines if we want them to cross the vertical ones perfectly across rows. 
                               Instead, we'll keep the grid structure but use custom border styles or semi-transparent lines.
                               Wait, the user wants them to cross and fade. 
                               Let's use a 3x3 grid structure where each row has the horizontal line.
                            */}

							<div className="grid grid-cols-3">
								{/* Row 1: Seq Numbers */}
								<div className="relative col-span-3 flex h-14 items-center">
									<div
										className="absolute top-0 right-[-30px] left-[-30px] h-px"
										style={{
											background:
												"linear-gradient(to right, transparent, rgba(255,255,255,0.08) 10%, rgba(255,255,255,0.08) 90%, transparent)",
										}}
									/>
									<div className="grid w-full grid-cols-3">
										{STEPS.map((step) => (
											<div className="px-8" key={step.num}>
												<span className="type-body-s font-semibold text-brand-primary">
													{step.num}
												</span>
											</div>
										))}
									</div>
									<div
										className="absolute right-[-30px] bottom-0 left-[-30px] h-px"
										style={{
											background:
												"linear-gradient(to right, transparent, rgba(255,255,255,0.08) 10%, rgba(255,255,255,0.08) 90%, transparent)",
										}}
									/>
								</div>

								{/* Row 2: Main Content */}
								<div className="col-span-3 grid grid-cols-3">
									{STEPS.map((step) => (
										<div className="flex flex-col gap-6 p-10" key={step.num}>
											<step.icon className="h-10 w-10" />
											<div className="flex flex-col gap-2">
												<h3 className="type-h4 font-bold text-white">
													{step.title}
												</h3>
												<p className="type-body-s text-content-slate-medium leading-relaxed">
													{step.desc}
												</p>
											</div>
										</div>
									))}
								</div>

								{/* Row 3: Buttons */}
								<div className="relative col-span-3 flex items-center">
									<div
										className="absolute top-0 right-[-30px] left-[-30px] h-px"
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
										className="absolute right-[-30px] bottom-0 left-[-30px] h-px"
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
			</div>
		</div>
	);
}
