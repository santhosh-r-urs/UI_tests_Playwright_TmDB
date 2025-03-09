
export class AddItemPage {
    constructor(page) {
        this.page = page;
        this.addItemDropDown = this.page.getByRole('combobox', { name: 'Add Item' });
       
        this.saveButton = this.page.getByRole('button', { name: 'Save' });
    }
     
    async addAnItemToList(option) {
        await this.addItemDropDown.click();
        await this.addItemDropDown.fill(option);
        await this.page.getByText(option).first().click();
    }   

    async clickSaveButton() {
        await this.saveButton.click();
    }
}
