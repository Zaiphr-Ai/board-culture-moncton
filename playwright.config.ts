import { defineConfig } from "@playwright/test";

export default defineConfig({
  testDir: "./e2e",
  timeout: 30000,
  use: {
    baseURL: "http://localhost:4321",
    screenshot: "only-on-failure",
  },
  webServer: {
    command: "pnpm dev",
    port: 4321,
    reuseExistingServer: true,
    timeout: 30000,
  },
  projects: [
    {
      name: "Desktop Screenshots",
      use: {
        viewport: { width: 1440, height: 900 },
      },
    },
    {
      name: "Mobile Screenshots",
      use: {
        viewport: { width: 390, height: 844 },
      },
    },
  ],
});
