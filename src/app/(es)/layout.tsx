import LocaleLayout from "@/components/locale-layout";

export default function SpanishLayout({ children }: { children: React.ReactNode }) {
  return <LocaleLayout locale="es">{children}</LocaleLayout>;
}
