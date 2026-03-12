import { socialIconMap } from "@/lib/footer/social-icon-map";
import type { RawSocialLink } from "@/lib/footer/types";

interface SocialProps {
	socials: RawSocialLink[];
}

export default function SocialLinks({ socials }: SocialProps) {
	return (
		<div className="flex items-center gap-4">
			{socials.map((social, _idx) => {
				const IconComponent = socialIconMap[social.iconKey];
				if (!IconComponent) {
					return null;
				}

				return (
					<a
						aria-label={social?.text}
						className="text-lg text-white transition-colors"
						href={social?.href}
						key={social.href ?? social.iconKey}
						target={social?.target ?? undefined}
					>
						<IconComponent />
					</a>
				);
			})}
		</div>
	);
}
