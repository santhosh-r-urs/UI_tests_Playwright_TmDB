
export class LoginPage {
    constructor(page) {
        this.page = page;
        this.userNameInput = this.page.getByRole('textbox', { name: 'Username' });
        this.passwordInput = this.page.getByRole('textbox', { name: 'Password' });
        this.loginButton = this.page.getByRole('button', { name: 'Login' });
    }
      
    async login(username, password) {
        await this.userNameInput.fill(username);
        await this.passwordInput.fill(password);
        await this.loginButton.click();
    }

    async goToTmdbLoginPage() {
        await this.page.goto('https://www.themoviedb.org/login');
    }
}
