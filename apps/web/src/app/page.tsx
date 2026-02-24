import Image from "next/image";
import CommunitySection from "@/components/blocks/community";
import VideoCoursesSection from "@/components/blocks/courses";
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
			<Image
				alt="Pattern lines"
				className="h-auto w-full"
				height={48}
				src="/images/pattern-lines.png"
				width={1440}
			/>
			<LightchainFundamentals />
			<Image
				alt="Pattern lines"
				className="h-auto w-full"
				height={48}
				src="/images/pattern-lines.png"
				width={1440}
			/>
			<ToolsSection />
			<Image
				alt="Pattern lines"
				className="h-auto w-full"
				height={48}
				src="/images/pattern-lines.png"
				width={1440}
			/>
			<SecuritySection />
			<Image
				alt="Pattern lines"
				className="h-auto w-full"
				height={48}
				src="/images/pattern-lines.png"
				width={1440}
			/>
			<UpcomingEventSection />
			<Image
				alt="Pattern lines"
				className="h-auto w-full"
				height={48}
				src="/images/pattern-lines.png"
				width={1440}
			/>
			<VideoCoursesSection />
			<Image
				alt="Pattern lines"
				className="h-auto w-full"
				height={48}
				src="/images/pattern-lines.png"
				width={1440}
			/>
			<CommunitySection />
		</>
	);
}
