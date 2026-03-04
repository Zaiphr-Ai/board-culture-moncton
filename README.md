# Demo Factory Template

A reusable template for spinning up visually distinct static marketing/landing page demo sites. Clone it, swap the config, build something unique.

## Tech Stack

- **Astro 5** — Static site framework with island architecture
- **Tailwind CSS v4** — CSS-first theming with `@theme`
- **GSAP + ScrollTrigger** — Scroll-driven animations
- **TypeScript** — Type-safe components
- **Playwright** — Visual screenshot testing
- **Cloudflare Pages** — Static hosting and deployment

## Quick Start

```bash
# Install dependencies
pnpm install

# Start dev server
pnpm dev

# Build for production
pnpm build

# Take screenshots
pnpm screenshot
```

## How It Works

1. **Edit `src/config/site.ts`** — Set your demo's name, colors, fonts, and style direction
2. **Customize components** — Add/modify sections in `src/components/sections/`
3. **Build pages** — Compose components in `src/pages/`
4. **Deploy** — `pnpm build` and deploy `dist/` to Cloudflare Pages

## Project Structure

```
src/
├── config/site.ts          # Per-demo identity: name, colors, fonts, style
├── styles/
│   ├── global.css          # Tailwind v4 @theme with config tokens
│   ├── animations.css      # Reusable CSS keyframe animations
│   └── utilities.css       # Fluid typography, glass, grain, helpers
├── layouts/BaseLayout.astro # Head, fonts, SEO, GSAP initialization
├── components/
│   ├── common/             # Navigation, Footer
│   ├── sections/           # Hero, Features, etc.
│   └── ui/                 # Button, Card, etc.
├── lib/
│   ├── gsap.ts             # GSAP setup with data-attribute animations
│   └── types.ts            # Shared TypeScript interfaces
└── pages/index.astro       # Starter page
```

## Commands

| Command | Description |
|---------|-------------|
| `pnpm dev` | Start dev server at `localhost:4321` |
| `pnpm build` | Production build to `dist/` |
| `pnpm preview` | Preview production build locally |
| `pnpm format` | Format code with Prettier |
| `pnpm screenshot` | Capture full-page screenshots (desktop + mobile) |

## Deployment

Built for **Cloudflare Pages**:

```bash
# Manual deploy
pnpm exec wrangler pages deploy dist/

# Or connect the repo to CF Pages for auto-deploy
```

Update `wrangler.toml` with your project name before deploying.

## Design System

The template uses a config-driven design system. All colors, fonts, and theme tokens flow from `src/config/site.ts` through CSS custom properties into Tailwind's `@theme`.

See `CLAUDE.md` for the full style direction catalog with 10 distinct visual directions, font pairings, and color palettes.
