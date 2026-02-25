import { Icon } from "../shared/icon";

export default function Footer() {
  return (
    <footer className="border-[#27272A] border-t bg-surface-slate-strong px-6 pt-16 pb-10 md:px-14">
      <div className="container">
        <div className="grid gap-10 grid-cols-2 md:grid-cols-3 lg:grid-cols-5 pb-12">
          {footerNav.map((col) => (
            <div className="flex flex-col gap-4" key={col.heading}>
              <h4 className="mb-2 font-semibold text-base text-white leading-normal md:mb-4">
                {col.heading}
              </h4>
              <ul className="flex flex-col gap-2.5">
                {col.links.map((link) => (
                  <li key={link}>
                    <a
                      className="text-[#9F9FA9] text-sm transition-colors hover:text-white/80"
                      href="/"
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

      <div className="flex flex-col items-center justify-between gap-6 border-[#27272A] border-t py-8 text-center md:flex-row md:gap-4 md:py-4 md:text-left">
        <div className="flex flex-col items-center gap-4 text-[#9F9FA9] text-sm md:flex-row">
          <Icon name="logo" size={24} />
          <span> © 2026 Lightchain. All rights reserved.</span>
        </div>

        <div className="flex items-center gap-5">
          {socials.map(({ label, icon }) => (
            <a
              aria-label={label}
              className="text-lg text-white transition-colors"
              href="/"
              key={label}
            >
              <Icon className="text-white" name={icon} size={24} />
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
    links: [
      "Core Concepts",
      "APIs",
      "SDKs",
      "Smart Contracts",
      "CLI Reference",
    ],
  },
  {
    heading: "Build",
    links: [
      "Quickstart Guides",
      "Tutorials",
      "Starter Kits",
      "Example Apps",
      "And Dev Tooling",
    ],
  },
  {
    heading: "Run a Node",
    links: [
      "Validator Guide",
      "Hardware Requirements",
      "Staking",
      "Testnet Participation",
      "Monitoring",
    ],
  },
  {
    heading: "Ecosystem",
    links: [
      "Projects, Wallets",
      "Explorers",
      "Infrastructure Partners",
      "Potentially Grants.",
    ],
  },
  {
    heading: "Research",
    links: [
      "Whitepaper",
      "Protocol Specs",
      "Governance",
      "Roadmap",
      "Improvement Proposals",
    ],
  },
];

const socials = [
  { label: "Twitter", icon: "x-white" },
  { label: "GitHub", icon: "github-white" },
  { label: "Discord", icon: "discord-white" },
  { label: "YouTube", icon: "youtube-white" },
];
