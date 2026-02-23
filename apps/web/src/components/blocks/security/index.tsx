
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
		<section className="py-30">
			<div className="container">
				<h2 className="text-center text-content-slate-medium mb-6">
					Security and responsible disclosure
				</h2>
				<div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
					{ITEMS.map((item) => (
						<SecurityCard key={item.title} {...item} />
					))}
				</div>
			</div>
		</section>
	);
}
