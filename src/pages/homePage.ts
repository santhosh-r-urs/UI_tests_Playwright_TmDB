import { Page, Locator } from '@playwright/test';

export class HomePage {
    public page: Page;
    public profileIconLink: Locator;

    constructor(page: Page) {
        this.page = page;
        this.profileIconLink = this.page.getByRole('link', { name: 'Profile and Settings' })
    }
      
    async clickProfileNavigationLink(option: string): Promise<void> {
        await this.page.getByRole('link', { name: option }).click();
    }

    async clickProfileIconLink(): Promise<void> {
        await this.profileIconLink.click();
    }
}
