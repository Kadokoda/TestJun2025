import { test, expect } from "@playwright/test";
import { LoginSteps } from "../steps/loginSteps";

const adminUser = process.env.ADMIN_USER;
const adminPassword = process.env.ADMIN_PASSWORD;

const invalidUser = process.env.INVALID_USER;
const invalidPassword = process.env.INVALID_PASSWORD;

test.describe("Login Scenarios", () => {
  test("Valid login", async ({ page }) => {
    const loginSteps = new LoginSteps(page);
    console.log(`User ${adminUser} - Password ${adminPassword}`);

    if (!adminUser || !adminPassword) {
      throw new Error(
        "Missing ADMIN_USER or ADMIN_PASSWORD environment variable."
      );
    }

    await loginSteps.login(adminUser, adminPassword);
    await loginSteps.verifyLoginSucceed();
  });

  test("Invalid login", async ({ page }) => {
    const loginSteps = new LoginSteps(page);
    if (!invalidUser || !invalidPassword) {
      throw new Error(
        "Missing INVALID_USER or INVALID_PASSWORD environment variable."
      );
    }

    await loginSteps.login(invalidUser, invalidPassword);
    const error = await loginSteps.getLoginError();
    await expect(error).toContain("Invalid credentials");
  });
});
