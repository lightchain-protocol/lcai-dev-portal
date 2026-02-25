import Divider from "@/components/ui/divider";
import GetStartedGlow from "@/components/ui/svgs/get-started-glow";
import { DeploymentGuides } from "./deployment-guides";
import { NetworkSpecs } from "./network-specs";

export default function GetStartedSection() {
  return (
    <section className="flex flex-col items-center bg-[url('/images/bg-pattern.png')] bg-center bg-cover bg-no-repeat font-sans py-10 md:py-20 xl:py-30">
      <div className="container">
        <div className="relative mx-auto w-full max-w-275 overflow-hidden rounded-[24px] border border-border-slate-medium bg-[#06060e] p-3 pt-5 md:pt-8">
          <div
            className="absolute top-0 left-0"
            style={{ willChange: "filter" }}
          >
            <GetStartedGlow />
          </div>
          <h2 className="mb-3 font-semibold tracking-[-0.4px] text-center text-content-slate-medium relative z-1">
            Get started on Lightchain
          </h2>
          <p className="type-body-l mx-auto max-w-120 text-center text-content-slate-medium relative z-1">
            Add LightChain to your wallet and deploy your first contract or AI
            workload in minutes.
          </p>
          <Divider className="mx-auto my-3 max-w-full" />

          <div className="md:mt-4 grid gap-4 w-full grid-cols-1 md:grid-cols-2 relative z-1">
            <NetworkSpecs />
            <DeploymentGuides />
          </div>
        </div>
      </div>
    </section>
  );
}
