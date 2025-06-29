import { test, expect } from "@playwright/test";
import { LoginSteps } from "../steps/loginSteps";
import { SearchSteps } from "../steps/searchSteps";

import { SearchPage } from "../../pages/searchPage";

const adminUser = process.env.ADMIN_USER;
const adminPassword = process.env.ADMIN_PASSWORD;

test.describe("Search Tests", () => {
  test("@debug Search for Admin menu", async ({ page }) => {
    const loginSteps = new LoginSteps(page);
    const searchSteps = new SearchSteps(page);
    if (!adminUser || !adminPassword) {
      throw new Error(
        "Missing ADMIN_USER or ADMIN_PASSWORD environment variable."
      );
    }

    await loginSteps.login(adminUser, adminPassword);
    await loginSteps.verifyLoginSucceed();

    await searchSteps.searchForMenu("Admin");

    const menuItems = await searchSteps.getVisibleMenuItem();
    await expect(menuItems).toContain("Admin");
  });

  test("@debug Search with non-existent term", async ({ page }) => {
    const loginSteps = new LoginSteps(page);
    const searchSteps = new SearchSteps(page);

    if (!adminUser || !adminPassword) {
      throw new Error(
        "Missing ADMIN_USER or ADMIN_PASSWORD environment variable."
      );
    }

    await loginSteps.login(adminUser, adminPassword);
    await loginSteps.verifyLoginSucceed();

    await searchSteps.searchForMenu("XYZ");
    const menuItems = await await searchSteps.getVisibleMenuItem();
    await expect(menuItems).toHaveLength(0);
  });
});
