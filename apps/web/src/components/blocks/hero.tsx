import { Bolt, Icon, Rocket } from "@/components/shared/icon";
import { Button } from "../ui/button";

export default function HeroSection() {
	return (
		<section className="-mt-23 flex min-h-dvh flex-col items-center justify-center gap-6 bg-[url('/images/hero-bg.png')] bg-black bg-center bg-cover px-6 pb-30 text-center">
			<h1 className="type-hero m-0 font-bold font-sans text-white">
				Build Verifiable
				<br />
				<span className="text-brand-primary">AI Apps </span>
				on <Bolt className="inline-block h-[49px] w-[39px]" />{" "}
				<span className="bg-linear-to-r from-[#7064E9] via-60% to-[#FF12FB] bg-clip-text text-transparent">
					LightChain
				</span>
			</h1>
			<p className="type-body-l max-w-[775px] text-content-slate-medium">
				An AI-native blockchain with Proof of Intelligence consensus and an AI
				Virtual Machine for verifiable AI workloads. Deploy smart contracts or
				run trustworthy AI inference on-chain.
			</p>
			<div className="mt-2 flex flex-wrap items-center justify-center gap-3">
				<Button variant="gradient">
					<Rocket size={20} /> Start on Testnet
				</Button>
				<Button variant="outline">
					<Icon name="book" size={20} /> Read Docs
				</Button>
			</div>
		</section>
	);
}
