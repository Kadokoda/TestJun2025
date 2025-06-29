import { BasePage } from "./BasePage";

export class LoginPage extends BasePage {
  async navigate() {
    await this.page.goto("/");
  }

  async login(username: string, password: string) {
    await this.page.fill('input[name="username"]', username);
    await this.page.fill('input[name="password"]', password);
    await this.page.click('button[type="submit"]');
  }

  async getErrorMessage() {
    return this.page.locator(".oxd-alert-content-text").textContent();
  }

  async isLoggedIn() {
    await this.waitForPageLoad();
    return await this.page.url().includes("/dashboard");
  }
}
