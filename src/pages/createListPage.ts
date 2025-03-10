import { Page, Locator } from '@playwright/test';

export class CreateListPage {
    public page: Page;
    public nameInputfield: Locator;
    public descriptionInputfield: Locator;
    public publicListDropdown: Locator;
    public showCommentsDropdown: Locator;
    public sortByDropdown: Locator;
    public continueButton: Locator;


    constructor(page: Page) {
        this.page = page;
        this.nameInputfield = this.page.getByRole('textbox', { name: 'Name' });
        this.descriptionInputfield = this.page.getByRole('textbox', { name: 'Description' });
        this.publicListDropdown = this.page.getByRole('combobox', { name: 'Public List?' });
        this.showCommentsDropdown = this.page.getByRole('combobox', { name: 'Show Comments' });
        this.sortByDropdown = this.page.getByRole('combobox', { name: 'Sort By' });
        this.continueButton = this.page.getByRole('button', { name: 'Continue' });
    }
    
     
    async selectPublicListOption(option: string): Promise<void> {
        await this.page.getByRole('option', { name: option }).click();
    }

    async selectShowCommentsOption(option: string): Promise<void> {
        await this.page.getByRole('option', { name: option }).click();
    }   

    async selectSortByOption(option: string): Promise<void> {
        await this.page.getByRole('option', { name: option }).click();
    }   

    async clickContinueButton(): Promise<void> {
        await this.continueButton.click();
    }
}
