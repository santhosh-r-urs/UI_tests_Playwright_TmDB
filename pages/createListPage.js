
export class CreateListPage {
    constructor(page) {
        this.page = page;
        this.nameInputfield = this.page.getByRole('textbox', { name: 'Name' });
        this.descriptionInputfield = this.page.getByRole('textbox', { name: 'Description' });
        this.publicListDropdown = this.page.getByRole('combobox', { name: 'Public List?' });
        this.showCommentsDropdown = this.page.getByRole('combobox', { name: 'Show Comments' });
        this.sortByDropdown = this.page.getByRole('combobox', { name: 'Sort By' });
        this.continueButton = this.page.getByRole('button', { name: 'Continue' });
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

    async clickContinueButton() {
        await this.continueButton.click();
    }
}
