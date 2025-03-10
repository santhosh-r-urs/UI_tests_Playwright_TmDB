export class HomePage {
    constructor(page) {
        this.page = page;
        this.profileIconLink = this.page.getByRole('link', { name: 'Profile and Settings' })
    }
      
    async clickProfileNavigationLink(option) {
        await this.page.getByRole('link', { name: option }).click();
    }

    async clickProfileIconLink() {
        await this.profileIconLink.click();
    }
}
