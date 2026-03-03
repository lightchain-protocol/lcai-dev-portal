# Contributing to Lightchain Dev Portal

First off, thank you for considering contributing to the Lightchain Dev Portal! It's people like you that make open source such a great community.

## Development Environment Setup

This project uses [Bun](https://bun.sh/) as its package manager and runtime, and it's a Turborepo monorepo.

1. **Fork & Clone**: Fork the repository and clone it to your local machine.
2. **Setup**: Run `bun install` to install dependencies.
3. **Environment Variables**: Copy `.env.example` to `.env` and fill in the required variables (if any).
4. **Run Locally**: Use `bun run dev` to start the development servers.

## Making Changes

- Ensure your branch is up-to-date with `main` before starting.
- Create a new branch for your feature or bug fix: `git checkout -b feature/my-new-feature` or `git checkout -b fix/issue-123`.

## Formatting and Linting

We use [Biome](https://biomejs.dev/) (via the `ultracite` CLI package) for rapid and consistent code formatting and linting.

- To check your code: `bun run check`
- To fix auto-fixable errors and format: `bun run fix`
- To check TypeScript types: `bun run check-types`

Please ensure `bun run check` passes before submitting a Pull Request! The CI pipeline will fail otherwise.

## Commit Guidelines

We enforce [Conventional Commits](https://www.conventionalcommits.org/). Your commit messages should be formatted like this:

- `feat: added a new button`
- `fix: resolved crashing issue on login`
- `docs: updated README.md instructions`
- `chore: updated dependencies`

Husky git hooks are set up to run `commitlint` and `lint-staged`, which will automatically format your code and verify your commit message on `git commit`.

## Submitting a Pull Request

1. Push your changes to your fork.
2. Open a Pull Request against the `main` branch.
3. Fill out the Pull Request template comprehensively.
4. Wait for CI checks to pass and for maintainers to review your code.
