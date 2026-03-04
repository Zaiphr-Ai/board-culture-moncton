import { test } from "@playwright/test";
import { mkdirSync } from "fs";
import { join } from "path";

const SCREENSHOT_DIR = join(process.cwd(), "screenshots");

// Ensure screenshots directory exists
mkdirSync(SCREENSHOT_DIR, { recursive: true });

const routes = ["/"];

for (const route of routes) {
  const routeName = route === "/" ? "home" : route.replace(/\//g, "-").slice(1);

  test(`screenshot ${routeName}`, async ({ page }, testInfo) => {
    await page.goto(route, { waitUntil: "networkidle" });

    // Wait for fonts to load
    await page.evaluate(() => document.fonts.ready);

    // Small delay for above-the-fold GSAP animations to fire
    await page.waitForTimeout(500);

    // Scroll through the entire page to trigger all ScrollTrigger animations
    await page.evaluate(async () => {
      const scrollHeight = document.body.scrollHeight;
      const step = Math.floor(window.innerHeight * 0.7);
      for (let y = 0; y < scrollHeight; y += step) {
        window.scrollTo(0, y);
        await new Promise((r) => setTimeout(r, 100));
      }
      // Scroll to bottom to catch everything
      window.scrollTo(0, scrollHeight);
      await new Promise((r) => setTimeout(r, 300));
      // Scroll back to top for the screenshot
      window.scrollTo(0, 0);
      await new Promise((r) => setTimeout(r, 200));
    });

    // Wait for all animations to settle
    await page.waitForTimeout(1000);

    const viewport = page.viewportSize();
    const suffix = viewport && viewport.width > 1000 ? "desktop" : "mobile";

    await page.screenshot({
      path: join(SCREENSHOT_DIR, `${routeName}-${suffix}.png`),
      fullPage: true,
    });
  });
}
