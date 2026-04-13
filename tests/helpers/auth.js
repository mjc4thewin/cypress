// tests/helpers/auth.js
//
// Round 8 hint: extract repeated setup steps into helper functions.
// The helpers below give candidates a starting point for refactoring.
//
// Usage example:
//   import { login, loginWithFixture } from './helpers/auth.js';
//
//   test('my test', async ({ page }) => {
//     await login(page, 'standard_user', 'secret_sauce');
//   });

const users = require('../fixtures/users.json');

/**
 * Logs in with explicit credentials.
 * @param {import('@playwright/test').Page} page
 * @param {string} username
 * @param {string} password
 */
async function login(page, username, password) {
  await page.goto('/');
  await page.getByTestId('username').fill(username);
  await page.getByTestId('password').fill(password);
  await page.getByTestId('login-button').click();
}

/**
 * Logs in using a key from the users fixture ('valid' | 'invalid' | 'locked').
 * @param {import('@playwright/test').Page} page
 * @param {'valid'|'invalid'|'locked'} userKey
 */
async function loginWithFixture(page, userKey = 'valid') {
  const { username, password } = users[userKey];
  await login(page, username, password);
}

/**
 * Clicks the "Add to cart" button for a product by its data-testid value.
 * @param {import('@playwright/test').Page} page
 * @param {string} dataTestId  e.g. 'add-to-cart-sauce-labs-backpack'
 */
async function addProductToCart(page, dataTestId) {
  await page.getByTestId(dataTestId).click();
}

module.exports = { login, loginWithFixture, addProductToCart };
