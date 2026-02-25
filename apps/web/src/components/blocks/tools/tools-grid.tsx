import { ToolCard } from "./tool-card";

const TOOLS = [
  {
    icon: "/icons/icon-cli.svg",
    title: "Lightchain CLI",
    desc: "Command-line interface for deploying contracts, managing networks, and running AI workloads.",
    cta: "Install CLI",
  },
  {
    icon: "/icons/icon-sdks.svg",
    title: "SDKs",
    desc: "Client libraries for JavaScript, Python, Rust, and Go to interact with Lightchain.",
    cta: "Browse SDKs",
  },
  {
    icon: "/icons/icon-rpc.svg",
    title: "RPC and JSON-RPC",
    desc: "Ethereum-compatible RPC endpoints for reading and writing blockchain data.",
    cta: "RPC docs",
  },
  {
    icon: "/icons/icon-governance-tools.svg",
    title: "Governance",
    desc: "Propose, discuss, and vote on network upgrades, grants, and protocol parameters.",
    cta: "Open governance",
  },
  {
    icon: "/icons/icon-faucet-tools.svg",
    title: "Faucet",
    desc: "Get testnet tokens instantly to start building without needing real funds.",
    cta: "Get tokens",
  },
  {
    icon: "/icons/icon-explorer.svg",
    title: "Explorer",
    desc: "Browse blocks, transactions, addresses, and AI workloads on the blockchain.",
    cta: "More Details",
  },
];

export function ToolsGrid() {
  return (
    <div className="relative mx-auto w-full max-w-5xl px-4">
      {/* Vertical Dotted Lines (2 lines for 3 columns) */}
      <div className="pointer-events-none absolute inset-y-0 md:left-1/2 lg:left-1/3 hidden w-px border-white/10 border-l border-dashed md:block" />
      <div className="pointer-events-none absolute inset-y-0 left-2/3 hidden w-px border-white/10 border-l border-dashed lg:block" />

      {/* Horizontal Dotted Line (between rows) */}
      <div className="pointer-events-none absolute inset-x-0 top-1/2 hidden h-px border-white/10 border-t border-dashed lg:block" />

      {/* Grid Content */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
        {TOOLS.map((tool) => (
          <ToolCard key={tool.title} {...tool} />
        ))}
      </div>
    </div>
  );
}
