import { test, expect } from "@playwright/test";
import { LoginSteps } from "../steps/loginSteps";
import { EnvUtils } from "../../utils/envUtils";
import { ErrorMessages } from "../../constants/errorMessages";

test.describe("Login Scenarios", () => {
  const adminUser = EnvUtils.getEnvOrThrow("ADMIN_USER");
  const adminPassword = EnvUtils.getEnvOrThrow("ADMIN_PASSWORD");
  const invalidUser = EnvUtils.getEnvOrThrow("INVALID_USER");
  const invalidPassword = EnvUtils.getEnvOrThrow("INVALID_PASSWORD");

  test("Valid login", async ({ page }) => {
    const loginSteps = new LoginSteps(page);
    await loginSteps.login(adminUser, adminPassword);
    await loginSteps.verifyLoginSucceed();
  });

  test("Invalid login", async ({ page }) => {
    const loginSteps = new LoginSteps(page);
    await loginSteps.login(invalidUser, invalidPassword);
    const error = await loginSteps.getLoginError();
    await expect(error).toContain(ErrorMessages.INVALID_CREDENTIALS);
  });
});
