import {defineConfig, devices} from '@playwright/test';

const externalBaseURL = process.env.PLAYWRIGHT_BASE_URL;

export default defineConfig({
  testDir: './tests',
  fullyParallel: true,
  workers: 2,
  reporter: 'list',
  use: {baseURL: externalBaseURL ?? 'http://127.0.0.1:3100', trace: 'retain-on-failure', reducedMotion: 'reduce'},
  projects: [
    {name: 'desktop', use: {...devices['Desktop Chrome']}},
    {name: 'mobile', use: {...devices['iPhone 13'], defaultBrowserType: 'chromium'}}
  ],
  webServer: externalBaseURL ? undefined : {command: 'yarn start -p 3100', url: 'http://127.0.0.1:3100', reuseExistingServer: false}
});
