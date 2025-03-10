
export class ListsPage {
    constructor(page) {
        this.page = page;
        this.createListButton = page.getByRole('link', { name: 'Create List' });
        
    }

    async clickCreateListButton() {
        await this.createListButton.click();
    }   
     
    
}
