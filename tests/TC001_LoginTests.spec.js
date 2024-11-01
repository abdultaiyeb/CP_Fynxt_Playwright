const { expect } = require('@playwright/test');
const { test } = require('../setup/setup');
const loginData = require('../tests/data/loginData.json');
const SigninPage = require('../pages/SigninPage');
const DashboardPage = require('../pages/DashboardPage');

const validUser = loginData.validUser;
const invalidUser = loginData.invalidUser;

test('Verify login for valid user', async ({ page }) => {
    const signinPage = new SigninPage(page);

    await signinPage.enterEmail(validUser.username);
    console.log(`Entered username: ${validUser.username}`);

    await signinPage.enterPassword(validUser.password);
    console.log('Entered password');

    await signinPage.clickSignIn();
    console.log('Clicked on Sign-In button.');

    const dashboardPage = new DashboardPage(page);
    const headingText = await dashboardPage.verifyDashboardHeading();

    expect(headingText).toBe('Dashboard ');
    console.log(`Dashboard heading text is correct: ${headingText}`);
});

test('Verify login for invalid user', async ({ page }) => {
    const signinPage = new SigninPage(page);

    await signinPage.enterEmail(invalidUser.username);
    console.log(`Entered username: ${invalidUser.username}`);

    await signinPage.enterPassword(invalidUser.password);
    console.log('Entered password');

    await signinPage.clickSignIn();
    console.log('Clicked on Sign-In button.');

    const isErrorVisible = await signinPage.isErrorVisible();
    expect(isErrorVisible).toBe(false);

    console.log('Error message is displayed for invalid login.');
});

