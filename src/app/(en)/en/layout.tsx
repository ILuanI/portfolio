import LocaleLayout from "@/components/locale-layout";

export default function EnglishLayout({ children }: { children: React.ReactNode }) {
  return <LocaleLayout locale="en">{children}</LocaleLayout>;
}
