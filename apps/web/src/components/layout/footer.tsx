import { socialIconMap } from "@/lib/footer/social-icon-map";
import type { RawFooterColumn, RawSocialLink } from "@/lib/footer/types";
import { Icon } from "../shared/icon";

interface FooterProps {
	socials: RawSocialLink[];
	footerColumns: RawFooterColumn[];
}

export default function Footer({ socials, footerColumns }: FooterProps) {
	return (
		<footer className="border-[#27272A] border-t bg-surface-slate-strong px-6 pt-16 pb-10 md:px-14">
			<div className="container">
				<div className="mx-auto grid max-w-[1020px] grid-cols-2 gap-10 pb-12 md:grid-cols-3 lg:grid-cols-4">
					{footerColumns.map((col) => (
						<div className="flex flex-col gap-4" key={col.title}>
							<h4 className="mb-2 font-semibold text-base text-white leading-normal md:mb-4">
								{col.title}
							</h4>
							<ul className="flex flex-col gap-2.5">
								{col.links.map((link, _idx) => (
									<li key={link.href ?? link.label}>
										<a
											className="text-[#9F9FA9] text-sm transition-colors hover:text-white/80"
											href={link.href}
										>
											{link.text}
										</a>
									</li>
								))}
							</ul>
						</div>
					))}
				</div>
			</div>

			<div className="flex flex-col items-center justify-between gap-6 border-[#27272A] border-t py-8 text-center md:flex-row md:gap-4 md:py-4 md:text-left">
				<div className="flex flex-col items-center gap-4 text-[#9F9FA9] text-sm md:flex-row">
					<Icon name="logo" size={24} />
					<span> © 2026 Lightchain. All rights reserved.</span>
				</div>
				<div className="flex items-center gap-5">
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
			</div>
		</footer>
	);
}
