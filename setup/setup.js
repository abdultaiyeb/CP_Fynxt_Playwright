const { test } = require('@playwright/test');


test.beforeEach(async ({ page }) => {
  await page.goto('https://qacp.fynxt.com/');
});

test.afterEach(async ({ page }) => {
  await page.close();
});

module.exports = { test };
