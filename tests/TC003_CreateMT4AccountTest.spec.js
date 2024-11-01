const { expect } = require('@playwright/test');
const { test } = require('../setup/setup');
const SigninPage = require('../pages/SigninPage');
const loginData = require('../tests/data/loginData.json');

test("createMT4Account", async ({ page }) => {
    const signinPage = new SigninPage(page);
    await signinPage.login();
    

    
});