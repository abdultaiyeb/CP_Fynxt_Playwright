const { expect } = require('@playwright/test');
const { test } = require('../setup/setup');
const { faker } = require('@faker-js/faker');
const SigninPage = require('../pages/SigninPage');
const SignUpPage = require('../pages/SignUpPage');

test("account_registration", async ({ page }) => {

    const signinPage = new SigninPage(page);
    await signinPage.clickSignUp();
    console.log('Clicked on Sign-Up button');

    const signUpPage = new SignUpPage(page);

    const randomUsername = faker.internet.userName();
    const randomFirstName = faker.person.firstName();
    const randomLastName = faker.person.lastName();
    const randomEmail = faker.internet.email();
    const randomPhoneNumber = `8866${faker.string.numeric(6)}`;

    await signUpPage.enterUsername(randomUsername);
    console.log(`Entered Username: ${randomUsername}`);

    await signUpPage.enterFirstName(randomFirstName);
    console.log(`Entered First Name: ${randomFirstName}`);

    await signUpPage.enterLastName(randomLastName);
    console.log(`Entered Last Name: ${randomLastName}`);

    await signUpPage.enterEmail(randomEmail);
    console.log(`Entered Email: ${randomEmail}`);

    await signUpPage.enterPassword("Abdultest@123");
    console.log('Entered Password');

    await signUpPage.enterPhoneNumber(randomPhoneNumber);
    console.log(`Entered Phone Number: ${randomPhoneNumber}`);

    await signUpPage.clickSignUp();
    console.log('Clicked on Sign-Up button');
});
