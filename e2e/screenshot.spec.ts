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

    // Small delay for GSAP animations to fire
    await page.waitForTimeout(1500);

    const viewport = page.viewportSize();
    const suffix = viewport && viewport.width > 1000 ? "desktop" : "mobile";

    await page.screenshot({
      path: join(SCREENSHOT_DIR, `${routeName}-${suffix}.png`),
      fullPage: true,
    });
  });
}
