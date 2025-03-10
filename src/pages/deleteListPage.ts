import { Page, Locator } from '@playwright/test';


export class DeleteListPage {
    public page: Page;
    public deleteButton: Locator;
    public confirmDeletionButton: Locator;

    constructor(page: Page) {
        this.page = page;
        this.deleteButton = page.getByRole('button', { name: 'Delete' });
        this.confirmDeletionButton = page.getByRole('button', { name: 'Yes' });
    }
     
    async clickDeleteButton(): Promise<void> {
        await this.deleteButton.click();
    }

    async clickConfirmDeletionButton(): Promise<void> {
        await this.confirmDeletionButton.click();
    }
}
