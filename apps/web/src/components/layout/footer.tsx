import { Icon } from "../shared/icon";

export default function Footer() {
  return (
    <footer className="bg-surface-slate-strong border-t border-[#27272A] pt-16 px-6 md:px-14 pb-10">
        <div className="container">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-10 pb-12">
                {footerNav.map((col) => (
                    <div key={col.heading} className="flex flex-col gap-4">
                        <h4 className="text-base leading-normal font-semibold text-white mb-2 md:mb-4">{col.heading}</h4>
                        <ul className="flex flex-col gap-2.5">
                            {col.links.map((link) => (
                                <li key={link}>
                                    <a
                                        href="/"
                                        className="text-sm text-[#9F9FA9] hover:text-white/80 transition-colors"
                                    >
                                        {link}
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </div>
                ))}
            </div>
        </div>
      
      <div className="border-t border-[#27272A] py-8 md:py-4 flex flex-col md:flex-row items-center justify-between gap-6 md:gap-4 text-center md:text-left">
          <div className="flex flex-col md:flex-row items-center gap-4 text-sm text-[#9F9FA9]">
            <Icon name="logo" size={24}/>
            <span> © 2026 Lightchain. All rights reserved.</span>
          </div>

          <div className="flex items-center gap-5">
            {socials.map(({ label, icon }) => (
              <a
                key={label}
                href="#"
                aria-label={label}
                className="text-white transition-colors text-lg"
              >
                <Icon name={icon} size={24} className="text-white"/>
              </a>
            ))}
          </div>
      </div>

    </footer>
  );
}

const footerNav = [
  {
    heading: "Docs",
    links: ["Core Concepts", "APIs", "SDKs", "Smart Contracts", "CLI Reference"],
  },
  {
    heading: "Build",
    links: ["Quickstart Guides", "Tutorials", "Starter Kits", "Example Apps", "And Dev Tooling"],
  },
  {
    heading: "Run a Node",
    links: ["Validator Guide", "Hardware Requirements", "Staking", "Testnet Participation", "Monitoring"],
  },
  {
    heading: "Ecosystem",
    links: ["Projects, Wallets", "Explorers", "Infrastructure Partners", "Potentially Grants."],
  },
  {
    heading: "Research",
    links: ["Whitepaper", "Protocol Specs", "Governance", "Roadmap", "Improvement Proposals"],
  },
];

const socials = [
  { label: "Twitter", icon: "x-white" },
  { label: "GitHub", icon: "github-white" },
  { label: "Discord", icon: "discord-white" },
  { label: "YouTube", icon: "youtube-white" }
];