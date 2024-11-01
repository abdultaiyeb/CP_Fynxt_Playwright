class SignUpPage {
    constructor(page) {
        this.page = page;
        this.usernameInput = "//input[@id='FirstName']"; 
        this.firstNameInput = "#FirstName"; 
        this.lastNameInput = "#LastName"; 
        this.emailInput = "#Email"; 
        this.passwordInput = "//input[@id='Password']"; 
        this.phoneInput = "#MobileNumber"; 
        this.signUpButton ="#btnCustomerSignup"; 
    }

    async enterUsername(username) {
        await this.page.locator(this.usernameInput).fill(username);
    }

    async enterFirstName(firstName) {
        await this.page.locator(this.firstNameInput).fill(firstName);
    }

    async enterLastName(lastName) {
        await this.page.locator(this.lastNameInput).fill(lastName);
    }

    async enterEmail(email) {
        await this.page.locator(this.emailInput).fill(email);
    }


    async enterPassword(password) {
        await this.page.locator(this.passwordInput).fill(password);
    }

    async enterPhoneNumber(phoneNumber) {
        await this.page.locator(this.phoneInput).fill(phoneNumber);
    }

    async clickSignUp() {
        await this.page.locator(this.signUpButton).click();
    }
}

module.exports = SignUpPage;
