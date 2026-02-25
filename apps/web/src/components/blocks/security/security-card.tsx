import { ArrowRight } from "lucide-react";
import { Icon } from "@/components/shared/icon";
import { Button } from "@/components/ui/button";

interface SecurityCardProps {
  icon: string;
  title: string;
  desc: string;
  cta: string;
}

export function SecurityCard({ icon, title, desc, cta }: SecurityCardProps) {
  return (
    <div className="rounded-lg md:rounded-3xl border border-border-slate-soft bg-surface-slate-medium p-5">
      <Icon
        className="mb-5"
        name={icon.replace("/icons/", "").replace(".svg", "")}
        size={32}
      />
      <h3 className="mb-1.5 font-medium text-[20px] text-content-slate-strong leading-[1.4]">
        {title}
      </h3>
      <p className="type-body-m mb-6 text-[#9F9FA9]">{desc}</p>
      <Button size="sm" variant="outline">
        {cta} <ArrowRight height={12} width={12} />
      </Button>
    </div>
  );
}
