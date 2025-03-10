import { Page, Locator } from '@playwright/test';

export class EditListPage {
    public page: Page;
    public nameInputfield: Locator;
    public descriptionInputfield: Locator;
    public publicListDropdown: Locator;
    public showCommentsDropdown: Locator;
    public sortByDropdown: Locator;
    public saveButton: Locator;
    public addOrEditItemLink: Locator;
    public deleteListLink: Locator;

    constructor(page: Page) {
        this.page = page;
        this.nameInputfield = this.page.getByRole('textbox', { name: 'Name' });
        this.descriptionInputfield = this.page.getByRole('textbox', { name: 'Description' });
        this.publicListDropdown = this.page.getByRole('combobox', { name: 'Public List?' });
        this.showCommentsDropdown = this.page.getByRole('combobox', { name: 'Show Comments' });
        this.sortByDropdown = this.page.getByRole('combobox', { name: 'Sort By' });
        this.saveButton = this.page.getByRole('button', { name: 'Save' });
        this.addOrEditItemLink = this.page.getByRole('link', { name: 'Add/Edit Items' });
        this.deleteListLink = this.page.getByRole('link', { name: 'Delete List' });
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

    async clickSaveButton(): Promise<void> {
        await this.saveButton.click();
    }

    async clickAddOrEditItemLink(): Promise<void> {
        await this.addOrEditItemLink.click();
    }

    async clickDeleteListLink(): Promise<void> {
        await this.deleteListLink.click();
    }
}
