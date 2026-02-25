import { fetchFooterConfig } from "@/lib/footer/fetchFooterConfig";
import { socialIconMap } from "@/lib/footer/socialIconMap";
import { Icon } from "../shared/icon";

export default async function Footer() {
  const raw = await fetchFooterConfig();
  const { columns: footerColumns, social: socials } = raw;

  return (
    <footer className="border-[#27272A] border-t bg-surface-slate-strong px-6 pt-16 pb-10 md:px-14">
      <div className="container">
        <div className="grid gap-10 grid-cols-2 md:grid-cols-3 lg:grid-cols-4 pb-12 max-w-[1020px] mx-auto">
          {footerColumns.map((col) => (
            <div className="flex flex-col gap-4" key={col.title}>
              <h4 className="mb-2 font-semibold text-base text-white leading-normal md:mb-4">
                {col.title}
              </h4>
              <ul className="flex flex-col gap-2.5">
                {col.links.map((link, idx) => (
                  <li key={idx}>
                    <a
                      href={link.href}
                      className="text-[#9F9FA9] text-sm transition-colors hover:text-white/80"
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
      </div>
    </footer>
  );
}