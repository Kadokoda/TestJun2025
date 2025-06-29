import { Page } from "@playwright/test";
import { BasePage } from "./BasePage";

export class SearchPage extends BasePage {
  async searchMenuItem(searchText: string) {
    await this.waitForPageLoad();
    await this.page.fill('input[placeholder="Search"]', searchText);
  }

  async selectMenuItem(menuItem: string) {
    await this.page.click(`//span[text()="${menuItem}"]`, { timeout: 2000 });
  }

  async getVisibleMenuItems() {
    return this.page
      .locator("aside.oxd-sidepanel .oxd-main-menu-item--name")
      .allTextContents();
  }
}
