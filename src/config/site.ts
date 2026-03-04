export const siteConfig = {
  name: "Board Culture Moncton",
  url: "https://boardculturemoncton.pages.dev",
  description: "Moncton's underground skate shop. Decks, wheels, trucks, and the local scene. Shred or go home.",

  // Style direction — guides the overall feel
  // Options: "minimal", "bold-brutalist", "soft-organic", "dark-luxe",
  //          "retro-playful", "corporate-clean", "neon-cyber",
  //          "warm-editorial", "glassmorphic", "vibrant-gradient",
  //          "monochrome-swiss", "neumorphic", "high-contrast-acid",
  //          "ethereal-glass", "cinematic-scroll", "p3-wide-gamut",
  //          "terminal-hacker"
  style: "high-contrast-acid" as const,

  // Fonts — swap these per demo (Google Fonts names)
  fonts: {
    heading: "Syne",
    body: "Space Grotesk",
    mono: "Space Mono",
  },

  // Colors — OKLCH values, used in @theme via CSS custom properties
  colors: {
    primary: "oklch(0.85 0.35 120)",
    secondary: "oklch(0.70 0.32 50)",
    accent: "oklch(0.80 0.30 310)",
    background: "oklch(0.06 0.008 250)",
    foreground: "oklch(0.90 0.30 120)",
    muted: "oklch(0.14 0.08 120)",
    border: "oklch(0.85 0.35 120)",
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
