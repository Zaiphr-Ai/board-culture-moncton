export const siteConfig = {
  name: "Demo Site",
  url: "https://demo.example.com",
  description: "A stunning demo site built with Astro, Tailwind, and GSAP.",

  // Style direction — guides the overall feel
  // Options: "minimal", "bold-brutalist", "soft-organic", "dark-luxe",
  //          "retro-playful", "corporate-clean", "neon-cyber",
  //          "warm-editorial", "glassmorphic", "vibrant-gradient",
  //          "monochrome-swiss", "neumorphic", "high-contrast-acid",
  //          "ethereal-glass", "cinematic-scroll", "p3-wide-gamut",
  //          "terminal-hacker"
  style: "minimal" as const,

  // Fonts — swap these per demo (Google Fonts names)
  fonts: {
    heading: "Space Grotesk",
    body: "Inter",
    mono: "JetBrains Mono",
  },

  // Colors — OKLCH values, used in @theme via CSS custom properties
  colors: {
    primary: "oklch(0.55 0.18 250)",
    secondary: "oklch(0.50 0.12 180)",
    accent: "oklch(0.65 0.20 330)",
    background: "oklch(0.98 0.005 250)",
    foreground: "oklch(0.15 0.005 250)",
    muted: "oklch(0.94 0.01 250)",
    border: "oklch(0.88 0.015 250)",
  },
};

// Google Fonts URL builder
export function getFontsUrl(): string {
  const { heading, body, mono } = siteConfig.fonts;
  const families = [
    `${heading.replace(/ /g, "+")}:wght@400;500;600;700`,
    `${body.replace(/ /g, "+")}:wght@300;400;500;600`,
    mono ? `${mono.replace(/ /g, "+")}:wght@400;500` : "",
  ]
    .filter(Boolean)
    .map((f) => `family=${f}`)
    .join("&");

  return `https://fonts.googleapis.com/css2?${families}&display=swap`;
}
