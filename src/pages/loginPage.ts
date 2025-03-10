import {Page, Locator } from '@playwright/test';

export class LoginPage {
    public page: Page;
    public userNameInput: Locator;
    public passwordInput: Locator;
    public loginButton: Locator;

    constructor(page: Page) {
        this.page = page;
        this.userNameInput = this.page.getByRole('textbox', { name: 'Username' });
        this.passwordInput = this.page.getByRole('textbox', { name: 'Password' });
        this.loginButton = this.page.getByRole('button', { name: 'Login' });
    }
      
    async login(username: string, password: string): Promise<void> {
        await this.userNameInput.fill(username);
        await this.passwordInput.fill(password);
        await this.loginButton.click();
    }

    async goToTmdbLoginPage(): Promise<void> {
        await this.page.goto('https://www.themoviedb.org/login');
    }
}
