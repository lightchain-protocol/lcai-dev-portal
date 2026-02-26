import { Icon } from "@/components/shared/icon";
import { socialIconMap } from "@/lib/footer/socialIconMap";
import type { RawSocialLink } from "@/lib/footer/types";

type SocialProps = {
  socials: RawSocialLink[];
};

export default function SocialLinks({ socials }: SocialProps) {

  return (
    <div className="flex items-center gap-4">
      {socials.map((social, idx) => {
        const IconComponent = socialIconMap[social.iconKey];
        if (!IconComponent) return null;

        return (
          <a
            key={idx}
            href={social?.href}
            aria-label={social?.text}
            className="text-lg text-white transition-colors"
            target={social?.target ?? undefined}
          >
            <IconComponent />
          </a>
        );
      })}
    </div>
  );
}
