import { test, expect } from "@playwright/test";
import { LoginSteps } from "../steps/loginSteps";
import { SearchSteps } from "../steps/searchSteps";
import { EnvUtils } from "../../utils/envUtils";
import { MenuItems } from "../../constants/menuItems";

const adminUser = EnvUtils.getEnvOrThrow("ADMIN_USER");
const adminPassword = EnvUtils.getEnvOrThrow("ADMIN_PASSWORD");

test.describe("Search Tests", () => {
  test.beforeEach(async ({ page }) => {
    const loginSteps = new LoginSteps(page);
    await loginSteps.login(adminUser, adminPassword);
    await loginSteps.verifyLoginSucceed();
  });

  test("@debug Search for Admin menu", async ({ page }) => {
    const searchSteps = new SearchSteps(page);
    await searchSteps.searchForMenu(MenuItems.ADMIN);

    const menuItems = await searchSteps.getVisibleMenuItem();
    await expect(menuItems).toContain(MenuItems.ADMIN);
  });

  test("@debug Search with non-existent term", async ({ page }) => {
    const searchSteps = new SearchSteps(page);
    await searchSteps.searchForMenu("XYZ");

    const menuItems = await searchSteps.getVisibleMenuItem();
    await expect(menuItems).toHaveLength(0);
  });
});
