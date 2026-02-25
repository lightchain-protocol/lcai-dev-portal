import type { ReactNode } from "react";
import CommunityGlow from "@/components/ui/svgs/community-glow";

export default function CommunityCard({
  title,
  text,
  icon,
}: {
  title: string;
  text: string;
  icon: ReactNode;
}) {
  return (
    <div className="relative overflow-hidden rounded-3xl border border-border-slate-soft bg-surface-slate-strong px-5 pt-4 pb-6 text-center">
      <div
        className="absolute bottom-0 left-0"
        style={{ willChange: "filter" }}
      >
        <CommunityGlow />
      </div>
      <div className="relative z-10 mx-auto mb-4 flex h-21 w-21 items-center justify-center">
        {icon}
      </div>
      <h5 className="relative z-10 mb-1.5 text-content-slate-strong">
        {title}
      </h5>
      <p className="type-body-m relative z-10 text-[#9F9FA9]">{text}</p>
    </div>
  );
}
