import Image from "next/image";
import { FundamentalsGrid } from "./fundamentals-grid";
import { OnboardingSection } from "./onboarding-section";

export default function LightchainFundamentals() {
  return (
    <section className="py-10 md:py-20 xl:py-30">
      <div className="container">
        <div className="relative mx-auto mb-12 aspect-video w-full max-w-[604px] -mt-8">
          <Image
            alt="Lightchain Fundamentals"
            className="object-contain"
            fill
            loading="lazy"
            sizes="(max-width: 768px) 100vw, 604px"
            src="/images/export-image.png"
          />
        </div>
        <FundamentalsGrid />
        <OnboardingSection />
      </div>
    </section>
  );
}
