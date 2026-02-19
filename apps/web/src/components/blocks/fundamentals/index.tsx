import Image from "next/image";
import { FundamentalsGrid } from "./fundamentals-grid";
import { OnboardingSection } from "./onboarding-section";

export default function LightchainFundamentals() {
	return (
		<section className="px-6 py-20">
			<div className="container">
				<Image
					alt="Lightchain Fundamentals"
					className="mx-auto"
					height={450}
					loading="lazy"
					src="/images/export-image.png"
					width={604}
				/>

				<FundamentalsGrid />

				<OnboardingSection />
			</div>
		</section>
	);
}
