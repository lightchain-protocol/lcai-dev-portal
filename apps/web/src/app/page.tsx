import CommunitySection from "@/components/blocks/community";
import VideoCoursesSection from "@/components/blocks/courses";
import UpcomingEventSection from "@/components/blocks/events";
import LightchainFundamentals from "@/components/blocks/fundamentals";
import GetStartedSection from "@/components/blocks/get-started";
import HeroSection from "@/components/blocks/hero";
import SecuritySection from "@/components/blocks/security";
import ToolsSection from "@/components/blocks/tools";
import PatternLines from "@/components/shared/pattern-lines";

export default function Home() {
	return (
		<>
			<HeroSection />
			<GetStartedSection />
			<PatternLines />
			<LightchainFundamentals />
			<PatternLines/>
			<ToolsSection />
			<PatternLines/>
			<SecuritySection />
			<PatternLines/>
			<UpcomingEventSection />
			<PatternLines/>
			<VideoCoursesSection />
			<PatternLines/>
			<CommunitySection />
		</>
	);
}
