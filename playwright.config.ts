import {defineConfig, devices} from '@playwright/test';

const externalBaseURL = process.env.PLAYWRIGHT_BASE_URL;
// Keep the static server's connection queue large enough for parallel browsers.
const staticServerCommand = 'python -c "' + [
  'from http.server import ThreadingHTTPServer, SimpleHTTPRequestHandler',
  'from functools import partial',
  'ThreadingHTTPServer.request_queue_size = 128',
  "ThreadingHTTPServer(('127.0.0.1', 3100), partial(SimpleHTTPRequestHandler, directory='out')).serve_forever()"
].join('; ') + '"';

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
  webServer: externalBaseURL ? undefined : {command: staticServerCommand, url: 'http://127.0.0.1:3100', reuseExistingServer: false}
});
