"use client";

import { useLocale, useTranslations } from "next-intl";
import { getPathname, usePathname } from "@/i18n/navigation";
import { useRouter } from "next/navigation";
import { useTransition } from "react";
import { FiGlobe } from "react-icons/fi";

export default function LocaleToggle({
  className,
  onSwitch,
}: {
  className: string;
  onSwitch: () => void;
}) {
  const locale = useLocale();
  const t = useTranslations("Controls");
  const pathname = usePathname();
  const router = useRouter();
  const [pending, startTransition] = useTransition();
  const target = locale === "es" ? "en" : "es";
  return (
    <button
      type="button"
      className={`${className} gap-1 px-2`}
      disabled={pending}
      aria-label={t(target === "en" ? "english" : "spanish")}
      onClick={() => {
        onSwitch();
        const destination = getPathname({ locale: target, href: pathname });
        startTransition(() =>
          router.replace(
            destination + window.location.search + window.location.hash,
            { scroll: false },
          ),
        );
      }}
    >
      <FiGlobe size={18} aria-hidden="true" />
      <span className="text-xs font-medium" aria-hidden="true">
        {target.toUpperCase()}
      </span>
    </button>
  );
}
