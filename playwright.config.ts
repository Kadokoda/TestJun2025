import { defineConfig } from "@playwright/test";

export default defineConfig({
  globalSetup: "./playwright.setup.ts",
  testMatch: ["**/*.spec.ts", "**/*Spec.ts"],

  projects: [
    { name: "chromium", use: { browserName: "chromium" } },
    { name: "firefox", use: { browserName: "firefox" } },
    { name: "webkit", use: { browserName: "webkit" } },
  ],

  reporter: [
    ["json", { outputFile: "allure-results/results.json" }],
    ["html", { outputFolder: "reports", open: "never" }],
    ["allure-playwright"],
  ],

  use: {
    baseURL: "https://opensource-demo.orangehrmlive.com",
    screenshot: "only-on-failure",
    video: "retain-on-failure",
  },

  testDir: "./acceptance",
  outputDir: "allure-results",
  workers: 2,
});
