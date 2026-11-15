"use client";

import { ThemeProvider as Provider } from "next-themes";

export default function ThemeProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <Provider
      attribute="class"
      defaultTheme="system"
      enableSystem
      disableTransitionOnChange
      // Execute before first paint on the server-rendered page. On client navigation,
      // next-themes applies the theme via its effects; React must not create executable scripts.
      scriptProps={{
        type: typeof window === "undefined" ? "text/javascript" : "text/plain",
      }}
    >
      {children}
    </Provider>
  );
}
