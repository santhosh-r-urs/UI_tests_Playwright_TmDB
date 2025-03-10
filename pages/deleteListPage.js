// await page.getByRole('button', { name: 'Delete' }).click();
//   await page.getByRole('button', { name: 'Yes' }).click();


export class DeleteListPage {
    constructor(page) {
        this.page = page;
        this.deleteButton = page.getByRole('button', { name: 'Delete' });
        this.confirmDeletionButton = page.getByRole('button', { name: 'Yes' });
    }
     
    async clickDeleteButton() {
        await this.deleteButton.click();
    }

    async clickConfirmDeletionButton() {
        await this.confirmDeletionButton.click();
    }
}
