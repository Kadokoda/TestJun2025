import { expect, Page } from "@playwright/test";
import { LoginPage } from "../../pages/loginPage";

export class LoginSteps {
  private page: Page;
  private loginPage: LoginPage;

  constructor(page: Page) {
    this.page = page;
    this.loginPage = new LoginPage(page);
  }

  async login(user: string, password: string) {
    await this.loginPage.navigate();
    await this.loginPage.login(user, password);
  }

  async verifyLoginSucceed() {
    expect(this.loginPage.isLoggedIn(), `Login is not succeed!`);
  }

  async getLoginError() {
    return this.loginPage.getErrorMessage();
  }
}
