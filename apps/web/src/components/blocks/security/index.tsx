import { SecurityCard } from "./security-card";

const ITEMS = [
  {
    icon: "/icons/icon-best-practices.svg",
    title: "Best Practices",
    desc: "Follow security guidelines for smart contracts and AI workload deployment.",
    cta: "Read guidelines",
  },
  {
    icon: "/icons/icon-audits.svg",
    title: "Audits",
    desc: "Review third-party security audits of the Lightchain protocol and contracts.",
    cta: "View audits",
  },
  {
    icon: "/icons/icon-bug-bounty.svg",
    title: "Bug Bounty",
    desc: "Report vulnerabilities responsibly and earn rewards for valid findings.",
    cta: "Report bug",
  },
];

export default function SecuritySection() {
  return (
    <section className="py-10 md:py-20 xl:py-30">
      <div className="container">
        <h2 className="text-3xl md:text-5xl font-semibold leading-[1.16] tracking-[-0.48px] mb-6 text-center text-content-slate-medium">
          Security and responsible disclosure
        </h2>
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3">
          {ITEMS.map((item) => (
            <SecurityCard key={item.title} {...item} />
          ))}
        </div>
      </div>
    </section>
  );
}
