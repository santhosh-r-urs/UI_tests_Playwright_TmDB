
export class EditListPage {
    constructor(page) {
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
     
    async selectPublicListOption(option) {
        await this.page.getByRole('option', { name: option }).click();
    }

    async selectShowCommentsOption(option) {
        await this.page.getByRole('option', { name: option }).click();
    }   

    async selectSortByOption(option) {
        await this.page.getByRole('option', { name: option }).click();
    }   

    async clickSaveButton() {
        await this.saveButton.click();
    }

    async clickAddOrEditItemLink() {
        await this.addOrEditItemLink.click();
    }

    async clickDeleteListLink() {
        await this.deleteListLink.click();
    }
}
