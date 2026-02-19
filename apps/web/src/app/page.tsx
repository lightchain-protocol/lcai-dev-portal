import LightchainFundamentals from "@/components/blocks/fundamentals";
import GetStartedSection from "@/components/blocks/get-started";
import HeroSection from "@/components/blocks/hero";

export default function Home() {
	return (
		<>
			<HeroSection />
			<GetStartedSection />
			<img
				alt="Pattern lines"
				className="h-auto w-full"
				height={48}
				src="/images/pattern-lines.png"
				width="100%"
			/>
			<LightchainFundamentals />
		</>
	);
}
