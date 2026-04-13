// tests/01-login.spec.js
//
// ─────────────────────────────────────────────────────────────────────────────
// ROUND 1 — Basic Login Test
// ─────────────────────────────────────────────────────────────────────────────
// Instructions:
//   "Write a test that verifies a user can log in successfully using valid
//    credentials and lands on the products page."
//
// What this tests: locating elements, typing/clicking, URL assertion,
//                  basic success path.
//
// Hints:
//   • Playwright's page.getByTestId() matches [data-test] attributes.
//   • Use page.fill() or locator.fill() to enter text, locator.click() to click.
//   • page.waitForURL() or expect(page).toHaveURL() can assert navigation.
//   • expect(locator).toBeVisible() checks a user-visible success state.
//
// A good solution:
//   ✓ Fills username and password fields
//   ✓ Clicks the submit button
//   ✓ Asserts the URL or page heading changed
//   ✓ Confirms a user-visible element on the products page is visible
// ─────────────────────────────────────────────────────────────────────────────

const { test, expect } = require('@playwright/test');
const users = require('./fixtures/users.json');

test.describe('Round 1 – Successful login', () => {
  test('logs in with valid credentials and lands on the products page', async ({ page }) => {
    // TODO: navigate to the login page (baseURL is already set in playwright.config.js)
    // TODO: fill in the username field using users.valid.username
    //       hint: await page.getByTestId('username').fill(users.valid.username);
    // TODO: fill in the password field using users.valid.password
    // TODO: click the login button
    //       hint: await page.getByTestId('login-button').click();
    // TODO: assert the URL contains '/inventory'
    //       hint: await expect(page).toHaveURL(/inventory/);
    // TODO: assert a user-visible element on the products page is visible
    //       hint: await expect(page.locator('.inventory_list')).toBeVisible();
  });
});

// ─────────────────────────────────────────────────────────────────────────────
// ROUND 2 — Invalid Login
// ─────────────────────────────────────────────────────────────────────────────
// Instructions:
//   "Now add a test for invalid credentials and verify the error message
//    appears."
//
// What this tests: negative path thinking, assertions on error states,
//                  separation of tests.
//
// Hints:
//   • Keep this test independent from the successful login test.
//   • Assert that the user remains on the login page (no '/inventory' in URL).
//   • page.getByTestId('error') locates the error message container.
//   • expect(locator).toContainText() asserts visible error text.
// ─────────────────────────────────────────────────────────────────────────────

test.describe('Round 2 – Invalid login', () => {
  test('shows an error message with invalid credentials', async ({ page }) => {
    // TODO: navigate to the login page
    // TODO: fill in the username field using users.invalid.username
    // TODO: fill in the password field using users.invalid.password
    // TODO: click the login button
    // TODO: assert an error message is visible
    //       hint: await expect(page.getByTestId('error')).toBeVisible();
    // TODO: assert the URL does NOT contain '/inventory'
    //       hint: await expect(page).not.toHaveURL(/inventory/);
  });
});
