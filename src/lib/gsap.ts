/**
 * GSAP setup with ScrollTrigger and data-attribute-driven animations.
 *
 * Usage in components:
 *   <div data-animate="fade-up">...</div>
 *   <div data-animate="fade-left" data-delay="0.2">...</div>
 *   <div data-animate="scale" data-duration="0.8">...</div>
 *
 * Call initGSAP() once in BaseLayout (client-side).
 */

import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const ANIMATION_PRESETS: Record<
  string,
  gsap.TweenVars
> = {
  "fade-up": { y: 40, opacity: 0 },
  "fade-down": { y: -40, opacity: 0 },
  "fade-left": { x: -40, opacity: 0 },
  "fade-right": { x: 40, opacity: 0 },
  "fade-in": { opacity: 0 },
  scale: { scale: 0.9, opacity: 0 },
  "scale-up": { scale: 0.9, y: 20, opacity: 0 },
};

export function initGSAP(): void {
  // Respect prefers-reduced-motion
  if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
    // Make all animated elements visible immediately
    document.querySelectorAll("[data-animate]").forEach((el) => {
      (el as HTMLElement).style.opacity = "1";
    });
    return;
  }

  // Process all data-animate elements
  const elements = document.querySelectorAll<HTMLElement>("[data-animate]");

  elements.forEach((el) => {
    const preset = el.dataset.animate || "fade-up";
    const delay = parseFloat(el.dataset.delay || "0");
    const duration = parseFloat(el.dataset.duration || "0.6");
    const fromVars = ANIMATION_PRESETS[preset] || ANIMATION_PRESETS["fade-up"];

    gsap.from(el, {
      ...fromVars,
      duration,
      delay,
      ease: "power2.out",
      scrollTrigger: {
        trigger: el,
        start: "top 85%",
        toggleActions: "play none none none",
      },
    });
  });
}

/**
 * Stagger animate a group of elements.
 * Usage: staggerAnimation(".card", { y: 30, opacity: 0 }, 0.1);
 */
export function staggerAnimation(
  selector: string,
  fromVars: gsap.TweenVars = { y: 30, opacity: 0 },
  stagger: number = 0.1,
  triggerSelector?: string,
): void {
  const elements = document.querySelectorAll(selector);
  if (!elements.length) return;

  gsap.from(elements, {
    ...fromVars,
    duration: 0.6,
    stagger,
    ease: "power2.out",
    scrollTrigger: {
      trigger: triggerSelector
        ? document.querySelector(triggerSelector)
        : elements[0],
      start: "top 85%",
      toggleActions: "play none none none",
    },
  });
}

/**
 * Kinetic text animation — splits text into spans and animates each.
 * Apply to an element: <h1 data-kinetic>Hello World</h1>
 */
export function kineticText(): void {
  const elements = document.querySelectorAll<HTMLElement>("[data-kinetic]");

  elements.forEach((el) => {
    const text = el.textContent || "";
    el.innerHTML = text
      .split("")
      .map((char) =>
        char === " "
          ? " "
          : `<span style="display:inline-block">${char}</span>`,
      )
      .join("");

    const chars = el.querySelectorAll("span");

    gsap.from(chars, {
      y: 20,
      opacity: 0,
      duration: 0.4,
      stagger: 0.03,
      ease: "power2.out",
      scrollTrigger: {
        trigger: el,
        start: "top 85%",
        toggleActions: "play none none none",
      },
    });
  });
}

export { gsap, ScrollTrigger };
