"use client";

import { useSyncExternalStore } from "react";
import { useTheme } from "next-themes";
import { useTranslations } from "next-intl";
import { FiSun, FiMoon } from "react-icons/fi";

const subscribe = () => () => {};
export default function ThemeToggle({ className }: { className: string }) {
  const mounted = useSyncExternalStore(
    subscribe,
    () => true,
    () => false,
  );
  const { resolvedTheme, setTheme } = useTheme();
  const t = useTranslations("Controls");
  const isDark = resolvedTheme === "dark";
  const Icon = isDark ? FiSun : FiMoon;
  return (
    <button
      type="button"
      className={className}
      disabled={!mounted}
      aria-label={mounted ? t(isDark ? "light" : "dark") : t("theme")}
      onClick={() => setTheme(isDark ? "light" : "dark")}
    >
      {mounted && <Icon size={20} aria-hidden="true" />}
    </button>
  );
}
