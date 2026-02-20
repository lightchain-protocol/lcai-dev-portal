import CommunitySection from "@/components/blocks/community";
import UpcomingEventSection from "@/components/blocks/events";
import LightchainFundamentals from "@/components/blocks/fundamentals";
import GetStartedSection from "@/components/blocks/get-started";
import HeroSection from "@/components/blocks/hero";
import SecuritySection from "@/components/blocks/security";
import ToolsSection from "@/components/blocks/tools";

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
			<img
				alt="Pattern lines"
				className="h-auto w-full"
				height={48}
				src="/images/pattern-lines.png"
				width="100%"
			/>
			<ToolsSection />
			<img
				alt="Pattern lines"
				className="h-auto w-full"
				height={48}
				src="/images/pattern-lines.png"
				width="100%"
			/>
			<SecuritySection />
			<img
				alt="Pattern lines"
				className="h-auto w-full"
				height={48}
				src="/images/pattern-lines.png"
				width="100%"
			/>
			<UpcomingEventSection />

		</>
	);
}
