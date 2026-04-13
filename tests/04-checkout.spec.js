// tests/04-checkout.spec.js
//
// ─────────────────────────────────────────────────────────────────────────────
// ROUND 6 — Checkout Happy Path
// ─────────────────────────────────────────────────────────────────────────────
// Instructions:
//   "Write a test for the checkout happy path through order confirmation."
//
// What this tests: multi-step flow coverage, organization/readability,
//                  understanding of business flow.
//
// Hints:
//   • Break it into logical steps with clear comments.
//   • Verify meaningful milestones (e.g. summary page, confirmation page),
//     not every single click.
//   • Fixture data for checkout info lives in tests/fixtures/products.json
//     under the "checkout" key.
//
// Checkout URL flow on SauceDemo:
//   /cart.html  →  /checkout-step-one.html  →
//   /checkout-step-two.html  →  /checkout-complete.html
// ─────────────────────────────────────────────────────────────────────────────

const { test, expect } = require('@playwright/test');
const users = require('./fixtures/users.json');
const products = require('./fixtures/products.json');

test.describe('Round 6 – Checkout happy path', () => {
  test('completes checkout and shows the order confirmation page', async ({ page }) => {
    // Step 1: Log in
    // TODO: navigate to '/' and log in with valid credentials

    // Step 2: Add a product and proceed to cart
    // TODO: add products.addToCart to the cart
    //       hint: await page.getByTestId(products.addToCart.id).click();
    // TODO: navigate to /cart.html
    //       hint: await page.goto('/cart.html');

    // Step 3: Begin checkout
    // TODO: click the checkout button
    //       hint: await page.getByTestId('checkout').click();
    // TODO: assert URL is /checkout-step-one.html
    //       hint: await expect(page).toHaveURL(/checkout-step-one/);

    // Step 4: Fill in customer info
    // TODO: fill in firstName, lastName, postalCode from products.checkout
    //       hint: await page.getByTestId('firstName').fill(products.checkout.firstName);
    // TODO: click Continue
    //       hint: await page.getByTestId('continue').click();

    // Step 5: Review order summary
    // TODO: assert URL is /checkout-step-two.html
    //       hint: await expect(page).toHaveURL(/checkout-step-two/);
    // TODO: assert the product name is visible in the summary
    //       hint: await expect(page.getByText(products.addToCart.name)).toBeVisible();

    // Step 6: Finish and confirm
    // TODO: click Finish
    //       hint: await page.getByTestId('finish').click();
    // TODO: assert URL is /checkout-complete.html
    //       hint: await expect(page).toHaveURL(/checkout-complete/);
    // TODO: assert the confirmation message is visible
    //       hint: await expect(page.locator('.complete-header')).toBeVisible();
  });
});

// ─────────────────────────────────────────────────────────────────────────────
// ROUND 7 — Error Handling Path
// ─────────────────────────────────────────────────────────────────────────────
// Instructions:
//   "Mock the checkout API to return a 500 error and verify the user sees
//    the correct error state."
//
// What this tests: mocking/intercepts, negative-path testing,
//                  resilience thinking.
//
// Hints:
//   • Use page.route() to stub the response rather than forcing a backend failure.
//   • Intercept before the action that triggers the request:
//       await page.route('**/checkout*', (route) =>
//         route.fulfill({ status: 500, body: JSON.stringify({ error: 'Server Error' }) })
//       );
//   • Assert the correct UI behaviour after the failed action
//     (e.g. an error banner, no navigation to the next step).
// ─────────────────────────────────────────────────────────────────────────────

test.describe('Round 7 – Checkout error handling', () => {
  test('shows an error state when the checkout API returns 500', async ({ page }) => {
    // TODO: stub the checkout request BEFORE it fires
    //       hint: await page.route('**/checkout*', (route) =>
    //               route.fulfill({ status: 500, body: JSON.stringify({ error: 'Server Error' }) })
    //             );

    // TODO: log in, add product, navigate to cart, begin checkout,
    //       fill info, and click Continue/Finish

    // TODO: assert the user does NOT reach /checkout-complete.html
    //       hint: await expect(page).not.toHaveURL(/checkout-complete/);

    // TODO: assert an error message or banner is visible
    //       hint: await expect(page.locator('[data-test="error"]')).toBeVisible();
  });
});
