import Image from "next/image";
import { FundamentalsGrid } from "./fundamentals-grid";
import { OnboardingSection } from "./onboarding-section";

export default function LightchainFundamentals() {
	return (
		<section className="px-6 py-20">
			<div className="container">
				<div className="relative mb-12 mx-auto w-full max-w-[604px] aspect-video">
					<Image
						alt="Lightchain Fundamentals"
						fill
						loading="lazy"
						sizes="(max-width: 768px) 100vw, 604px"
						className="object-contain"
						src="/images/export-image.png"
					/>
				</div>
				<FundamentalsGrid />
				<OnboardingSection />
			</div>
		</section>
	);
}
