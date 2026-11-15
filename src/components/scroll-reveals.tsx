"use client";

import { useEffect } from "react";

// Animate content groups individually without moving decorative artwork or the navbar.
const revealSelector = [
  ".hero-copy > *", ".portrait-composition", ".section-heading-row > *",
  ".contact-heading > *", ".experience-item", ".experience-details > *",
  ".featured-project", ".project-grid > li", ".contact-actions > *",
  ".contact-form > *", "#educacion article", "#certificaciones li",
  "#publicaciones li", "#sobre-mi > nav", "#educacion > h2",
  "#certificaciones > h2", "#publicaciones > div", ".about-back", "footer > div",
].join(", ");

export default function ScrollReveals() {
  useEffect(() => {
    const root = document.querySelector(".portfolio-shell");
    if (!root || !("IntersectionObserver" in window)) return;
    const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)");
    const registered = new WeakSet<Element>();
    let sequence = 0;

    const observer = new IntersectionObserver((entries) => {
      for (const entry of entries) {
        if (!entry.isIntersecting) continue;
        const element = entry.target as HTMLElement;
        element.dataset.reveal = "visible";
        observer.unobserve(element);
      }
    }, { threshold: 0, rootMargin: "0px 0px -32px 0px" });

    function register() {
      if (reducedMotion.matches) return;
      root!.querySelectorAll<HTMLElement>(revealSelector).forEach((element) => {
        if (registered.has(element) || element.closest("dialog, [hidden]")) return;
        registered.add(element);
        element.style.setProperty("--reveal-delay", `${(sequence++ % 3) * 65}ms`);
        element.dataset.reveal = "pending";
        observer.observe(element);
      });
    }

    function clearReveal(element: HTMLElement) {
      delete element.dataset.reveal;
      element.style.removeProperty("--reveal-delay");
      observer.unobserve(element);
    }

    function finish(event: Event) {
      if (event instanceof AnimationEvent && event.animationName === "content-reveal") {
        clearReveal(event.target as HTMLElement);
      }
    }

    function showFocused(event: Event) {
      let element = (event.target as HTMLElement).closest<HTMLElement>("[data-reveal]");
      while (element) {
        clearReveal(element);
        element = element.parentElement?.closest<HTMLElement>("[data-reveal]") ?? null;
      }
    }

    function motionChanged() {
      if (reducedMotion.matches) {
        root!.querySelectorAll<HTMLElement>("[data-reveal]").forEach(clearReveal);
      } else register();
    }

    // Expandable experience details are mounted after the initial page render.
    const mutations = new MutationObserver(register);
    mutations.observe(root, { childList: true, subtree: true });
    root.addEventListener("animationend", finish);
    root.addEventListener("focusin", showFocused);
    reducedMotion.addEventListener("change", motionChanged);
    register();

    return () => {
      mutations.disconnect();
      observer.disconnect();
      root.removeEventListener("animationend", finish);
      root.removeEventListener("focusin", showFocused);
      reducedMotion.removeEventListener("change", motionChanged);
      root.querySelectorAll<HTMLElement>("[data-reveal]").forEach(clearReveal);
    };
  }, []);

  return null;
}
