import { Bolt, Icon, Rocket } from "@/components/shared/icon";
import { Button } from "../ui/button";

export default function HeroSection() {
	return (
		<section className="-mt-23 flex min-h-dvh flex-col items-center justify-center gap-6 bg-[url('/images/hero-bg.png')] bg-black bg-center bg-cover py-20 text-center">
			<div className="container">
			<h1 className="mb-4 md:mb-6 font-sans text-white type-hero">
				Build Verifiable
				<br />
				<span className="text-brand-primary">AI Apps </span>
				on <Bolt className="inline-block h-[1.1em] w-auto align-middle" />{" "}
				<span className="bg-linear-to-r from-[#7064E9] via-60% to-[#FF12FB] bg-clip-text text-transparent">
					LightChain
				</span>
			</h1>
			<p className="mx-auto max-w-[775px] type-body-l text-content-slate-medium">
				An AI-native blockchain with Proof of Intelligence consensus and an AI
				Virtual Machine for verifiable AI workloads. Deploy smart contracts or
				run trustworthy AI inference on-chain.
			</p>
			<div className="mt-6 md:mt-16 flex flex-wrap items-center justify-center gap-3">
				<Button variant="gradient">
					<Rocket size={20} /> Start on Testnet
				</Button>
				<Button variant="outline">
					<Icon name="book" size={20} /> Read Docs
				</Button>
			</div>
			</div>
		</section>
	);
}
