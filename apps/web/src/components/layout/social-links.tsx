import { Icon } from "@/components/shared/icon";
import { Link } from "@/components/ui/link";

const SOCIALS = [
	{
		icon: (className: string) => <Icon className={className} name="x-white" />,
		href: "https://x.com",
		label: "X (Twitter)",
	},
	{
		icon: (className: string) => <Icon className={className} name="discord-white" />,
		href: "https://discord.com",
		label: "Discord",
	},
	{
		icon: (className: string) => <Icon className={className} name="youtube-white" />,
		href: "https://youtube.com",
		label: "YouTube",
	},
];

export default function SocialLinks() {
	return (
		<div className="flex items-center gap-4">
			{SOCIALS.map((social) => (
				<Link
					aria-label={social.label}
					className="block text-content-slate-strong transition-colors hover:text-brand-secondary"
					href={social.href}
					key={social.label}
				>
					{social.icon("size-5")}
				</Link>
			))}
		</div>
	);
}
