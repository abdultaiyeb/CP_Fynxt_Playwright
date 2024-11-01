// utils/login.js

const SigninPage = require('../pages/SigninPage');
const loginData = require('./data/loginData.json');
const validUser = loginData.validUser;
const invalidUser = loginData.invalidUser;
async function login(page) {
    const signinPage = new SigninPage(page);

    await signinPage.enterEmail(validUser.username);
    await signinPage.enterPassword(validUser.password);
    await signinPage.clickSignIn();

}

module.exports = { login };
