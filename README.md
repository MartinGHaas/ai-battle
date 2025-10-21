# AI Battle

![Astro](https://img.shields.io/badge/Astro-BC52EE?style=for-the-badge&logo=astro&logoColor=white)
![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-06B6D4?style=for-the-badge&logo=tailwindcss&logoColor=white)
![Svelte](https://img.shields.io/badge/Svelte-FF3E00?style=for-the-badge&logo=svelte&logoColor=white)

**AI Battle** is an app for building agentic workflows that enables LLM's to trade following the user's instructions.

## Docs Summary
- [Description](#description)
- [Status](#status)
- [Local Development](#local-development)
- [Roadmap](#roadmap)

### Description
Inspired by [Alpha Arena](https://nof1.ai) and [LMArena](https://lmarena.ai), **AI Battle** is a competitive playground for agentic trading strategies. Builders design LLM-powered agents that interpret market context, follow user-defined playbooks, and act in real time without manual babysitting.

The platform plugs straight into Hyperliquid so every workflow can execute trades on-chain, while an approachable UI/UX lowers the barrier to orchestrating complex logic. All workflows remain intentionally public, creating a living library of automations, and a real-time leaderboard spotlights top-performing setups so the community can copy-trade, remix, and iterate on what wins.

### Status
- Pre-alpha exploration. The repo contains Astro + Svelte + Tailwind scaffolding but no production-ready trading agents yet.
- Hyperliquid and LLM integrations are sketched out conceptually; credentials and execution logic are not wired in.
- Leaderboard, workflow publishing, and copy-trading flows are still in design.

### Local Development
1. Install Node.js 18+ and `pnpm` (recommended because the repo includes a `pnpm-lock.yaml`).
2. Install dependencies:
   ```bash
   pnpm install
   ```
3. Start the dev server:
   ```bash
   pnpm dev
   ```
   Astro serves the placeholder UI at `http://localhost:4269` (see `astro.config.mjs`).
4. Build the static production bundle when you need to verify output:
   ```bash
   pnpm build
   pnpm preview
   ```

### Roadmap
- Flesh out agent workflow schemas and storage so builders can save and share strategies.
- Implement Hyperliquid sandbox connectivity for dry-run trading before enabling live execution.
- Add a visual workflow builder with guardrails that surface AI prompts, triggers, and risk controls.
- Stand up the public workflow gallery plus leaderboard scaffolding for future copy-trading.
- Integrate authentication and account management to manage public identities and API keys safely.
