import IconAudits from "@/components/icons/icon-audits";
import IconBestPractices from "@/components/icons/icon-best-practices";
import IconBugBounty from "@/components/icons/icon-bug-bounty";
import { SecurityCard } from "./security-card";

const ITEMS = [
	{
		icon: IconBestPractices,
		title: "Best Practices",
		desc: "Follow security guidelines for smart contracts and AI workload deployment.",
		cta: "Read guidelines",
	},
	{
		icon: IconAudits,
		title: "Audits",
		desc: "Review third-party security audits of the Lightchain protocol and contracts.",
		cta: "View audits",
	},
	{
		icon: IconBugBounty,
		title: "Bug Bounty",
		desc: "Report vulnerabilities responsibly and earn rewards for valid findings.",
		cta: "Report bug",
	},
];

export function SecurityGrid() {
	return (
		<div className="relative mx-auto w-full max-w-5xl px-4">
			{/* Vertical Dotted Lines (2 lines for 3 columns) */}
			<div className="pointer-events-none absolute inset-y-0 left-1/3 hidden w-px border-white/10 border-l border-dashed sm:block" />
			<div className="pointer-events-none absolute inset-y-0 left-2/3 hidden w-px border-white/10 border-l border-dashed sm:block" />

			{/* Grid Content */}
			<div className="grid grid-cols-1 sm:grid-cols-3">
				{ITEMS.map((item) => (
					<SecurityCard key={item.title} {...item} />
				))}
			</div>
		</div>
	);
}
