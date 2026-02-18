import DiscordIcon from "@/components/icons/discord";
import XIcon from "@/components/icons/x";
import YoutubeIcon from "@/components/icons/youtube";

import { Link } from "@/components/ui/link";

const SOCIALS = [
	{ icon: XIcon, href: "https://x.com", label: "X (Twitter)" },
	{ icon: DiscordIcon, href: "https://discord.com", label: "Discord" },
	{ icon: YoutubeIcon, href: "https://youtube.com", label: "YouTube" },
];

export default function SocialLinks() {
	return (
		<div className="flex items-center gap-4">
			{SOCIALS.map((social) => (
				<Link
					aria-label={social.label}
					className="block text-content-slate-light transition-colors hover:text-brand-primary"
					href={social.href}
					key={social.label}
				>
					<social.icon className="size-5" />
				</Link>
			))}
		</div>
	);
}
