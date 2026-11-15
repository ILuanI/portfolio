import {test, expect} from '@playwright/test';

test('theme script is safe on initial load and client navigation', async ({page, isMobile}) => {
  const errors: string[] = [];
  page.on('pageerror', error => errors.push(error.message));
  page.on('console', message => {
    if (message.type() === 'error') errors.push(message.text());
  });
  await page.emulateMedia({colorScheme: 'light'});
  await page.addInitScript(() => localStorage.setItem('theme', 'dark'));
  // Inspect the parsed page before React hydrates: the saved theme must already apply.
  await page.route('**/_next/**/*.js*', route => route.abort());
  await page.goto('/');
  await expect(page.locator('html')).toHaveClass(/dark/);
  await page.unroute('**/_next/**/*.js*');
  errors.length = 0;
  await page.reload();
  await page.getByRole('button', {name: 'Cambiar a modo claro'}).click();
  await expect(page.locator('html')).toHaveClass(/light/);
  await page.getByRole('button', {name: 'Cambiar idioma a inglés'}).click();
  await expect(page).toHaveURL('/en');
  await expect(page.locator('html')).toHaveClass(/light/);
  if (isMobile) await page.getByRole('button', {name: 'Open menu'}).click();
  await page.locator(isMobile ? '#mobile-navigation' : 'nav').getByRole('link', {name: 'About me', exact: true}).click();
  await expect(page).toHaveURL('/en/about');
  await page.getByRole('link', {name: 'Back to home'}).click();
  await expect(page).toHaveURL('/en#presentacion');
  await page.getByRole('button', {name: 'Switch to dark mode'}).click();
  await expect(page.locator('html')).toHaveClass(/dark/);
  const instagram = page.locator('footer').getByRole('link', {name: /Luiggi Rosas on Instagram/});
  await expect(instagram).toHaveAttribute('href', 'https://www.instagram.com/luan_rpz23/');
  await expect(instagram).toHaveAttribute('rel', 'noopener noreferrer');
  await expect(instagram.locator('svg')).toHaveCount(1);
  expect(errors).toEqual([]);
});
