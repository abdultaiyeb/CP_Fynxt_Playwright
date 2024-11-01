class SigninPage {
    constructor(page) {
        this.page = page;
        this.usernameInput = "#username";
        this.passwordInput = "#password";
        this.signInBtn = "#btnCustomerLogin";
        this.errorMessage = ".toast-message";
        this.signUpBtn = "#btnLoginSignupFlip";
    }


    async enterEmail(username) {
        await this.page.locator(this.usernameInput).fill(username);
    }

    async enterPassword(password) {
        await this.page.locator(this.passwordInput).fill(password);
    }

    async clickSignIn() {
        await this.page.locator(this.signInBtn).click();
    }

    async isErrorVisible() {
        return await this.page.locator(this.errorMessage).isVisible();
        
    }

    async clickSignUp() {
        await this.page.locator(this.signUpBtn).click();
    }
    async login() {
        await this.page.locator(this.usernameInput).fill("Abdul12345");  // Enter the username
        await this.page.locator(this.passwordInput).fill("Abdul@123");  // Enter the password
        await this.clickSignIn();  // Click the sign-in button
    }
   
}

module.exports = SigninPage;
