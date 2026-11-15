# Luiggi Rosas — portfolio

Next.js App Router with Tailwind CSS 4, `next-intl` and `next-themes`.

## Development

```sh
yarn install
yarn dev
```

Spanish routes are `/` and `/sobre-mi`; English routes are `/en` and `/en/about`.
The URL determines the language. Browser language and cookies never redirect a Spanish URL to English.

## Translations

Edit `messages/es.json` and `messages/en.json` together. They contain interface copy, metadata and editorial content keyed by stable record IDs. Shared assets, links, technologies and dates live in `src/data`. Original institution, certificate and publication titles remain in their original language; the CV download is in Spanish.

Routing is configured in `src/i18n/routing.ts`. Use the localized `Link` from `src/i18n/navigation.ts` for internal navigation. The locale layout uses `next/root-params` and prerenders both languages. Only UI messages are sent to the client; localized content records are prepared on the server.

## Themes

The first visit follows the operating system. The navbar toggles light/dark and saves the explicit choice under `theme` in localStorage; other tabs synchronize automatically. Clear that key to follow the system again.

Semantic colors live in `src/app/globals.css`, with Tailwind utilities and the `dark:` variant connected to the `.dark` class. Use `foreground`, `muted`, `surface`, `accent` and `on-accent` tokens instead of hardcoded text/background colors. Logo and certificate artwork keeps its original colors.

## Verification

```sh
yarn build
npx playwright install chromium
yarn test:e2e
```

The tests start the production server on port 3100 and cover both languages and themes on desktop/mobile, navigation, persistence, certificate dialogs and public assets. Build requires access to Google Fonts. Test artifacts are stored in the ignored `test-results/` directory.

To check React's development-only script warnings against an already running `yarn dev` server in PowerShell:

```powershell
$env:PLAYWRIGHT_BASE_URL = 'http://localhost:3000'
yarn test:e2e tests/theme-script.spec.ts
Remove-Item Env:PLAYWRIGHT_BASE_URL
```

The theme regression test also blocks client JavaScript on the initial visit to verify that the server-rendered theme script applies the saved preference before hydration.
