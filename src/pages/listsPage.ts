import {Page, Locator } from '@playwright/test';

export class ListsPage {
    public page: Page;
    public createListButton: Locator;
    
    constructor(page: Page) {
        this.page = page;
        this.createListButton = page.getByRole('link', { name: 'Create List' });
        
    }

    async clickCreateListButton(): Promise<void> {
        await this.createListButton.click();
    }   
     
    
}
