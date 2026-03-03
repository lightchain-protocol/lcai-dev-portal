# Lightchain Dev Portal

[![CI](https://github.com/lightchain-protocol/lcai-dev-portal/actions/workflows/ci.yml/badge.svg)](https://github.com/lightchain-protocol/lcai-dev-portal/actions/workflows/ci.yml)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)
[![Bun Version](https://img.shields.io/badge/bun-%3E%3D1.1.0-black?logo=bun)](https://bun.sh)

This project is the official developer portal for the Lightchain Protocol, providing documentation, tools, and resources for building on the Lightchain ecosystem.

It was created with [Better-T-Stack](https://github.com/AmanVarshney01/create-better-t-stack), a modern TypeScript stack.

## 🚀 Features

- **TypeScript** - For type safety and improved developer experience
- **Next.js** - Full-stack React framework
- **TailwindCSS** - Utility-first CSS for rapid UI development
- **shadcn/ui** - Reusable UI components
- **Biome** - Ultra-fast Linting and formatting
- **Turborepo** - Optimized monorepo build system
- **Husky & lint-staged** - Pre-commit hooks for quality assurance

## 🏗️ Project Structure

This is a monorepo managed by [Turborepo](https://turbo.build/):

```text
lcai-dev-portal/
├── apps/
│   ├── web/         # Main Developer Portal (Next.js)
│   └── fumadocs/    # Documentation Engine (Fumadocs)
├── packages/
│   ├── config/      # Shared configuration (TS, Tailwind, Biome)
│   └── env/         # Centralized environment variable management
├── .github/         # GitHub Actions and templates
└── .husky/          # Git hooks
```

## 🛠️ Getting Started

### Prerequisites

- [Bun](https://bun.sh/) (>= 1.1.0)

### Installation

1. Clone the repository
2. Install dependencies:
   ```bash
   bun install
   ```
3. Set up environment variables:
   ```bash
   cp .env.example .env
   ```
4. Run the development server:
   ```bash
   bun run dev
   ```

Open [http://localhost:3001](http://localhost:3001) in your browser.

## 🤝 Contributing

We welcome contributions! Please read our [CONTRIBUTING.md](CONTRIBUTING.md) and [CODE_OF_CONDUCT.md](CODE_OF_CONDUCT.md) before getting started.

- **Found a bug?** [Open an issue](https://github.com/lightchain-protocol/lcai-dev-portal/issues/new?template=bug_report.yml)
- **Feature request?** [Suggestions are welcome](https://github.com/lightchain-protocol/lcai-dev-portal/issues/new?template=feature_request.yml)

## 📜 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.
