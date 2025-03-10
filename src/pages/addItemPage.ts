import { Page, Locator } from 'playwright';

export class AddItemPage {
    public page: Page;
    public addItemDropDown: Locator;
    public saveButton: Locator;

    constructor(page: Page) {
        this.page = page;
        this.addItemDropDown = this.page.getByRole('combobox', { name: 'Add Item' });
        this.saveButton = this.page.getByRole('button', { name: 'Save' });
    }
     
    async addAnItemToList(option: string): Promise<void> {
        await this.addItemDropDown.click();
        await this.addItemDropDown.fill(option);
        await this.page.getByText(option).first().click();
    }   

    async clickSaveButton(): Promise<void> {
        await this.saveButton.click();
    }

    async removeItemFromList(option: string): Promise<void> {
        await this.page.getByRole('heading', { name: option }).locator('span').click();
    }
}
