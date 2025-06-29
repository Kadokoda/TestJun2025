import { Page } from "@playwright/test";

export class BasePage {
  protected page: Page;

  constructor(page: Page) {
    this.page = page;
  }

  async waitForPageLoad(timeout = 5000): Promise<void> {
    await this.page.waitForLoadState("load", { timeout });
  }
}
