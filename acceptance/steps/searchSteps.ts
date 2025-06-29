import { expect, Page } from "@playwright/test";
import { SearchPage } from "../../pages/searchPage";

export class SearchSteps {
  private page: Page;
  private searchPage: SearchPage;

  constructor(page: Page) {
    this.page = page;
    this.searchPage = new SearchPage(page);
  }

  async searchForMenu(menu: string) {
    await this.searchPage.searchMenuItem(menu);
  }

  async getVisibleMenuItem() {
    return await this.searchPage.getVisibleMenuItems();
  }
}
