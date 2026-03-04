# Demo Factory Template — Claude Code Instructions

This is a **template repository** for creating unique demo/landing page sites. Each clone should produce a **visually distinct** site. The goal is VARIETY — never make two demos look alike.

## Quick Start for a New Demo

1. Clone this repo
2. Edit `src/config/site.ts` — change name, colors, fonts, style direction
3. Run `pnpm dev` to start developing
4. Customize components, add sections, make it unique
5. Run `pnpm screenshot` to capture screenshots and verify the design visually
6. Deploy with `pnpm build` → upload `dist/` to Cloudflare Pages

## The Config File: `src/config/site.ts`

This is the **first file to edit** when starting a new demo. It controls:

- **name** — The site/brand name
- **style** — The overall design direction (see catalog below)
- **fonts** — Google Fonts names for heading, body, and mono
- **colors** — OKLCH color values for the entire palette

Changing this file instantly transforms the site's appearance since all CSS tokens flow from it.

## Style Direction Catalog

Pick ONE direction per demo. If you've already used a direction recently, pick a different one. Variety is the whole point.

### 1. Minimal Clean
- **Feel:** Whitespace-heavy, precise, calm
- **Colors:**
  ```
  primary: "oklch(0.25 0.01 260)"
  secondary: "oklch(0.45 0.01 260)"
  accent: "oklch(0.55 0.15 150)"
  background: "oklch(0.99 0.002 100)"
  foreground: "oklch(0.10 0.005 260)"
  muted: "oklch(0.96 0.005 260)"
  border: "oklch(0.92 0.005 260)"
  ```
- **Fonts:** Inter + Inter (or DM Sans + DM Sans)
- **Animations:** Subtle fade-ins only, long durations (0.8s+), ease-out
- **Tips:** Lots of padding, thin borders, understated. Let typography breathe.

### 2. Bold Brutalist
- **Feel:** Raw, high-contrast, unapologetic
- **Colors:**
  ```
  primary: "oklch(0.85 0.25 135)"
  secondary: "oklch(0.70 0.20 30)"
  accent: "oklch(0.90 0.30 90)"
  background: "oklch(0.12 0.005 260)"
  foreground: "oklch(0.98 0.005 80)"
  muted: "oklch(0.18 0.005 260)"
  border: "oklch(0.30 0.01 260)"
  ```
- **Fonts:** Space Mono + Space Mono (or JetBrains Mono + IBM Plex Mono)
- **Animations:** Hard cuts, no easing (ease: "none"), instant state changes
- **Tips:** Thick borders, uppercase text, harsh shadows, visible grid. Break conventions intentionally.

### 3. Soft Organic
- **Feel:** Warm, flowing, natural
- **Colors:**
  ```
  primary: "oklch(0.55 0.12 55)"
  secondary: "oklch(0.60 0.10 145)"
  accent: "oklch(0.65 0.14 25)"
  background: "oklch(0.97 0.01 80)"
  foreground: "oklch(0.18 0.02 55)"
  muted: "oklch(0.93 0.015 80)"
  border: "oklch(0.88 0.02 75)"
  ```
- **Fonts:** Fraunces + Nunito (or Playfair Display + Lato)
- **Animations:** Morphing shapes (`animate-morph`), gentle parallax, floating elements
- **Tips:** Rounded corners (2xl+), blob shapes, soft shadows, earthy tones.

### 4. Dark Luxe
- **Feel:** Premium, sophisticated, exclusive
- **Colors:**
  ```
  primary: "oklch(0.78 0.10 85)"
  secondary: "oklch(0.65 0.08 55)"
  accent: "oklch(0.72 0.12 65)"
  background: "oklch(0.13 0.01 260)"
  foreground: "oklch(0.92 0.01 80)"
  muted: "oklch(0.18 0.008 260)"
  border: "oklch(0.25 0.01 260)"
  ```
- **Fonts:** Cormorant Garamond + Montserrat (or Libre Baskerville + Raleway)
- **Animations:** Smooth, slow reveals (1s+), scale-in, gold shimmer effects
- **Tips:** Dark backgrounds, gold/cream accents, generous spacing, thin elegant type.

### 5. Retro Playful
- **Feel:** Fun, nostalgic, energetic
- **Colors:**
  ```
  primary: "oklch(0.65 0.22 25)"
  secondary: "oklch(0.60 0.18 250)"
  accent: "oklch(0.75 0.20 140)"
  background: "oklch(0.96 0.02 90)"
  foreground: "oklch(0.15 0.02 40)"
  muted: "oklch(0.92 0.025 90)"
  border: "oklch(0.85 0.03 85)"
  ```
- **Fonts:** Poppins + Poppins (or Baloo 2 + Quicksand)
- **Animations:** Bouncy easing (back.out), overshoots, playful hover effects
- **Tips:** Rounded everything, drop shadows, stickers/badges, bright saturated colors.

### 6. Corporate Clean
- **Feel:** Professional, trustworthy, polished
- **Colors:**
  ```
  primary: "oklch(0.50 0.15 250)"
  secondary: "oklch(0.55 0.10 210)"
  accent: "oklch(0.60 0.18 165)"
  background: "oklch(0.99 0.003 250)"
  foreground: "oklch(0.15 0.01 250)"
  muted: "oklch(0.96 0.005 250)"
  border: "oklch(0.90 0.01 250)"
  ```
- **Fonts:** Plus Jakarta Sans + Plus Jakarta Sans (or Source Sans 3 + Source Sans 3)
- **Animations:** Minimal, functional — simple fade-up on scroll, crisp
- **Tips:** Clean grids, card-based layouts, blue tones, clear hierarchy. Think "enterprise SaaS."

### 7. Neon Cyber
- **Feel:** Futuristic, edgy, high-energy
- **Colors:**
  ```
  primary: "oklch(0.75 0.30 310)"
  secondary: "oklch(0.70 0.25 180)"
  accent: "oklch(0.80 0.28 140)"
  background: "oklch(0.10 0.02 280)"
  foreground: "oklch(0.95 0.005 280)"
  muted: "oklch(0.15 0.015 280)"
  border: "oklch(0.22 0.03 280)"
  ```
- **Fonts:** Orbitron + Exo 2 (or Rajdhani + Share Tech)
- **Animations:** Glitch effects, text-glow, neon pulse, gradient rotation
- **Tips:** Dark bg with neon accents, glow effects, scanlines, tech-inspired UI. Use `text-glow` animation.

### 8. Warm Editorial
- **Feel:** Magazine-like, readable, curated
- **Colors:**
  ```
  primary: "oklch(0.45 0.12 25)"
  secondary: "oklch(0.50 0.08 55)"
  accent: "oklch(0.55 0.15 15)"
  background: "oklch(0.97 0.01 65)"
  foreground: "oklch(0.15 0.01 40)"
  muted: "oklch(0.94 0.012 65)"
  border: "oklch(0.88 0.015 60)"
  ```
- **Fonts:** Libre Baskerville + Source Sans 3 (or Lora + Open Sans)
- **Animations:** Scroll-driven reveals, parallax images, content that unfolds
- **Tips:** Serif headings, generous line-height, pull quotes, image-heavy layouts.

### 9. Glassmorphic
- **Feel:** Layered, translucent, modern
- **Colors:**
  ```
  primary: "oklch(0.60 0.18 260)"
  secondary: "oklch(0.55 0.15 200)"
  accent: "oklch(0.70 0.20 310)"
  background: "oklch(0.95 0.01 260)"
  foreground: "oklch(0.12 0.005 260)"
  muted: "oklch(0.90 0.015 260)"
  border: "oklch(0.85 0.02 260)"
  ```
- **Fonts:** Outfit + Outfit (or Sora + Sora)
- **Animations:** Blur transitions, fade with backdrop changes, floating panels
- **Tips:** Use the `.glass` utility class extensively. Frosted panels, blur layers, subtle gradients behind glass.

### 10. Vibrant Gradient
- **Feel:** Bold, energetic, eye-catching
- **Colors:**
  ```
  primary: "oklch(0.60 0.25 310)"
  secondary: "oklch(0.55 0.22 250)"
  accent: "oklch(0.70 0.20 30)"
  background: "oklch(0.99 0.005 280)"
  foreground: "oklch(0.10 0.01 280)"
  muted: "oklch(0.95 0.01 280)"
  border: "oklch(0.88 0.015 280)"
  ```
- **Fonts:** Sora + Sora (or General Sans + General Sans via Fontshare)
- **Animations:** Gradient rotation (`animate-gradient-rotate`), parallax, scale-in-up
- **Tips:** Multi-color gradients everywhere, gradient text (`text-gradient` utility), vibrant bg sections.

### 11. Monochrome Swiss
- **Feel:** Intellectual, structured, timeless
- **Colors:**
  ```
  primary: "oklch(0.20 0.005 250)"
  secondary: "oklch(0.40 0.005 250)"
  accent: "oklch(0.99 0.005 250)"
  background: "oklch(0.98 0.002 250)"
  foreground: "oklch(0.12 0.005 250)"
  muted: "oklch(0.94 0.005 250)"
  border: "oklch(0.20 0.005 250 / 0.1)"
  ```
- **Fonts:** Arimo + Arimo (or Inter + Inter)
- **Animations:** Precise, snapping grid reveals, `data-kinetic` on all headers, rigid 90-degree transitions
- **Tips:** Use a 12-column grid, no shadows, no rounded corners, absolute alignment. Everything should feel like a 1950s Swiss poster.

### 12. Neumorphic Soft-UI
- **Feel:** Tactile, futuristic-plastic, extruded
- **Colors:**
  ```
  primary: "oklch(0.55 0.18 250)"
  secondary: "oklch(0.60 0.12 250)"
  accent: "oklch(0.70 0.20 200)"
  background: "oklch(0.92 0.005 250)"
  foreground: "oklch(0.25 0.01 250)"
  muted: "oklch(0.94 0.01 250)"
  border: "oklch(0.92 0.005 250)"
  ```
- **Fonts:** Lexend + Lexend
- **Animations:** Elements that "press in" on hover (scale: 0.98), soft elastic easing (ease: "elastic.out(1, 0.3)")
- **Tips:** Relies heavily on double shadows (one light, one dark) to create depth. Use the background color for cards so they appear to grow out of the page.

### 13. High-Contrast Acid
- **Feel:** Experimental, "Anti-Design," high-energy
- **Colors:**
  ```
  primary: "oklch(0.85 0.35 120)"
  secondary: "oklch(0.65 0.30 310)"
  accent: "oklch(0.95 0.05 100)"
  background: "oklch(0.05 0.005 250)"
  foreground: "oklch(0.85 0.35 120)"
  muted: "oklch(0.15 0.05 120)"
  border: "oklch(0.85 0.35 120)"
  ```
- **Fonts:** Syne + Space Mono
- **Animations:** Glitchy text, marquee scrolls, `data-kinetic` with erratic stagger values, rapid color-shifting backgrounds
- **Tips:** Break the grid. Use oversized typography that overflows off-screen. High-intensity OKLCH colors that look flat in hex/RGB.

### 14. Ethereal Glass
- **Feel:** Deep, luminous, immersive (dark mode glassmorphism)
- **Colors:**
  ```
  primary: "oklch(0.80 0.15 210)"
  secondary: "oklch(0.70 0.25 320)"
  accent: "oklch(0.95 0.05 210)"
  background: "oklch(0.08 0.02 240)"
  foreground: "oklch(0.98 0.005 240)"
  muted: "oklch(0.12 0.03 240)"
  border: "oklch(1 0 0 / 0.15)"
  ```
- **Fonts:** Plus Jakarta Sans + Outfit
- **Animations:** `staggerAnimation` with very long durations, glowing border animations via `animate-gradient-rotate`
- **Tips:** Heavy `backdrop-filter: blur(20px)`, glowing circular gradients floating behind Card components, very thin "hairline" borders. Uses existing `@property --gradient-angle` support.

### 15. Cinematic Scroll
- **Feel:** Immersive, narrative, movie-like
- **Colors:**
  ```
  primary: "oklch(0.95 0.01 60)"
  secondary: "oklch(0.70 0.08 40)"
  accent: "oklch(0.85 0.12 50)"
  background: "oklch(0.07 0.01 260)"
  foreground: "oklch(0.95 0.005 60)"
  muted: "oklch(0.12 0.01 260)"
  border: "oklch(0.20 0.005 260)"
  ```
- **Fonts:** Bebas Neue + Inter (or Oswald + Source Sans 3)
- **Animations:** Very slow `data-duration="1.2"` reveals, `scale-up` on every section entry, `staggerAnimation` with 0.2s+ gaps. Layer elements with different `data-delay` values for parallax depth.
- **Tips:** Letterboxed sections (`max-h-screen overflow-hidden`), oversized hero with `min-h-screen`, cinematic aspect ratios, dim overlays. Think film title sequence. Pacing is the centerpiece.

### 16. P3 Wide-Gamut
- **Feel:** Vivid, otherworldly, display-pushing
- **Colors:**
  ```
  primary: "oklch(0.70 0.37 150)"
  secondary: "oklch(0.65 0.35 290)"
  accent: "oklch(0.80 0.33 80)"
  background: "oklch(0.98 0.005 150)"
  foreground: "oklch(0.10 0.01 260)"
  muted: "oklch(0.95 0.01 150)"
  border: "oklch(0.88 0.02 150)"
  ```
- **Fonts:** Instrument Sans + Instrument Sans
- **Animations:** `animate-gradient-rotate` on hero backgrounds using P3 colors, smooth `fade-up` reveals, gradient-shift between primary/secondary/accent
- **Tips:** Use `text-gradient` with `from-primary via-secondary to-accent` — the gradient pops on wide-gamut displays. Keep layout clean so color is the spectacle. Chroma values above 0.30 fall outside sRGB — this is why we use OKLCH.

### 17. Terminal Hacker
- **Feel:** Technical, cypherpunk, command-line aesthetic
- **Colors:**
  ```
  primary: "oklch(0.80 0.25 145)"
  secondary: "oklch(0.60 0.15 145)"
  accent: "oklch(0.90 0.10 85)"
  background: "oklch(0.06 0.01 145)"
  foreground: "oklch(0.80 0.25 145)"
  muted: "oklch(0.10 0.02 145)"
  border: "oklch(0.80 0.25 145 / 0.2)"
  ```
- **Fonts:** JetBrains Mono + JetBrains Mono (or Fira Code + Fira Code)
- **Animations:** `data-kinetic` on every heading for typewriter reveals, `animate-text-glow` for cursor-blink effects, fast stagger (0.02s per character). Use `fade-in` (not `fade-up`) to feel like text rendering.
- **Tips:** Monospace everything including body. Prefix headings with `> ` or `$ `. Use `grain-texture` on body for CRT noise. Cards should look like terminal windows with a top "title bar" border. No rounded corners. Green-on-black default (amber variant with hue 85).

## Image Sourcing

Demo sites should include real photography to feel complete. Use copyright-free images from **Unsplash** or **Pexels**.

### Unsplash CDN URLs
```
https://images.unsplash.com/photo-{PHOTO_ID}?auto=format&fit=crop&w={WIDTH}&q=80
```
- `1600` width for hero/full-width images
- `800` width for feature cards, content sections
- `600` width for thumbnails
- `400` width for avatars, small images

### Rules
- **Always use WebSearch** to find real Unsplash photo URLs — never fabricate photo IDs
- **Fallback:** `https://picsum.photos/seed/{keyword}/{width}/{height}` if no good match is found
- Always set `alt`, `width`, `height`, and `loading="lazy"` (below the fold)
- Use `object-cover` for images filling containers
- For hero backgrounds with text overlay, add a semi-transparent background layer on top

### Licensing
Unsplash License and Pexels License both allow free use without attribution for demo/commercial sites.

## Component Conventions

### Creating New Components

- Place in the appropriate directory:
  - `components/ui/` — small reusable elements (buttons, badges, inputs)
  - `components/sections/` — full-width page sections (features, pricing, testimonials)
  - `components/common/` — shared structural pieces (nav, footer)
- Use theme tokens, never hardcoded colors: `text-foreground`, `bg-primary`, `border-border`
- Accept a `class` prop for customization
- Use `data-animate` for scroll animations

### Animation Usage

**CSS animations** (in `animations.css`):
```html
<div class="animate-fade-in-up">...</div>
<div class="animate-morph">...</div>
<h1 class="animate-text-glow">...</h1>
```

**GSAP data-attribute animations** (in `gsap.ts`):
```html
<div data-animate="fade-up">...</div>
<div data-animate="fade-left" data-delay="0.2">...</div>
<div data-animate="scale" data-duration="0.8">...</div>
```

**Kinetic text:**
```html
<h1 data-kinetic>Animated text</h1>
```

**Stagger groups** (call from a component script):
```ts
import { staggerAnimation } from "@/lib/gsap";
staggerAnimation(".feature-card", { y: 30, opacity: 0 }, 0.1);
```

### CSS Utilities

- `container-fluid` — responsive container with fluid padding
- `text-fluid-*` — fluid typography (xs through 4xl)
- `glass` — frosted glass effect
- `grain-texture` — subtle noise overlay
- `text-gradient` — gradient text (set a background gradient first)
- `text-balance` / `text-pretty` — text wrapping

## Visual Testing with Screenshots

Run `pnpm screenshot` to capture full-page screenshots at desktop (1440px) and mobile (390px). Screenshots save to `screenshots/` (gitignored).

Use this to verify your design looks right. Read the screenshots to check:
- Colors are applied correctly
- Typography is readable and well-spaced
- Layout is responsive
- Animations aren't breaking layout (check for elements stuck at opacity: 0)

## Deployment to Cloudflare Pages

1. `pnpm build` — generates static files to `dist/`
2. Deploy via Cloudflare Pages:
   - Connect the repo to CF Pages, OR
   - Use `pnpm exec wrangler pages deploy dist/` for manual deploy
3. Update `wrangler.toml` with the correct project name
4. Update `site.ts` with the production URL

## Dev Commands

| Command | Description |
|---------|-------------|
| `pnpm dev` | Start dev server (localhost:4321) |
| `pnpm build` | Production build to `dist/` |
| `pnpm preview` | Preview production build |
| `pnpm format` | Format code with Prettier |
| `pnpm screenshot` | Capture page screenshots |

## Key Principle: VARIETY

Every demo cloned from this template should feel different. Different colors, different fonts, different animations, different layouts. The template gives you the tools — you bring the creativity. Don't default to the same patterns. Explore the style catalog, mix ideas, push boundaries.
