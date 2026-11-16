import { test, expect } from "@playwright/test";

for (const theme of ["light", "dark"] as const) {
  test(`exported 404 renders in ${theme} with a working home link`, async ({ page }, testInfo) => {
    const errors: string[] = [];
    page.on("pageerror", (error) => errors.push(error.message));
    await page.emulateMedia({ colorScheme: theme });
    await page.goto("/404.html");
    await expect(page.getByRole("heading", { level: 1 })).toHaveText("Esta página no existe");
    await expect(page.locator('meta[name="robots"]')).toHaveAttribute("content", /noindex/);
    await expect(page.locator("html")).toHaveClass(new RegExp(`\\b${theme}\\b`));
    expect(await page.evaluate(() => document.documentElement.scrollWidth <= innerWidth)).toBe(true);
    if (theme === "dark") await page.screenshot({ path: testInfo.outputPath("404-preview.png"), fullPage: true });
    await page.getByRole("link", { name: "Volver al inicio", exact: true }).click();
    await expect(page).toHaveURL("/");
    expect(errors).toEqual([]);
  });
}

for (const route of [
  { path: "/mantenimiento/", title: "Estamos en mantenimiento", retry: "Reintentar", home: "Volver al inicio", destination: "/" },
  { path: "/en/maintenance/", title: "We're under maintenance", retry: "Try again", home: "Back to home", destination: "/en/" },
]) {
  test(`${route.path} supports retry and returning home`, async ({ page }, testInfo) => {
    const errors: string[] = [];
    page.on("pageerror", (error) => errors.push(error.message));
    await page.goto(route.path);
    await expect(page.getByRole("heading", { level: 1 })).toHaveText(route.title);
    const retry = page.getByRole("button", { name: route.retry });
    await expect(retry).toBeEnabled();
    await Promise.all([page.waitForEvent("load"), retry.click()]);
    await expect(page.getByRole("heading", { level: 1 })).toHaveText(route.title);
    expect(await page.evaluate(() => document.documentElement.scrollWidth <= innerWidth)).toBe(true);
    if (route.path === "/mantenimiento/") await page.screenshot({ path: testInfo.outputPath("maintenance-preview.png"), fullPage: true });
    await page.getByRole("link", { name: route.home, exact: true }).click();
    await expect(page).toHaveURL(route.destination);
    expect(errors).toEqual([]);
  });
}
