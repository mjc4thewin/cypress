// tests/03-cart.spec.js
//
// ─────────────────────────────────────────────────────────────────────────────
// ROUND 4 — Add to Cart
// ─────────────────────────────────────────────────────────────────────────────
// Instructions:
//   "Write a test that adds a product to the cart and verifies the cart
//    count updates."
//
// What this tests: click action, simple state change, robust selector usage.
//
// Hints:
//   • Make the assertion user-visible (e.g. the cart badge in the header).
//   • The cart badge locator: page.locator('.shopping_cart_badge')
//   • Before adding to cart, assert the badge is hidden/absent:
//       await expect(page.locator('.shopping_cart_badge')).toBeHidden();
//   • Use page.getByTestId(products.addToCart.id).click() to add the product.
//   • After adding, assert the badge shows '1':
//       await expect(page.locator('.shopping_cart_badge')).toHaveText('1');
// ─────────────────────────────────────────────────────────────────────────────

const { test, expect } = require('@playwright/test');
const users = require('./fixtures/users.json');
const products = require('./fixtures/products.json');

test.describe('Round 4 – Add to cart', () => {
  test('adds a product to the cart and the cart count reflects the change', async ({ page }) => {
    // TODO: log in with valid credentials

    // TODO: assert the cart badge is absent or hidden before adding
    //       hint: await expect(page.locator('.shopping_cart_badge')).toBeHidden();

    // TODO: click the "Add to cart" button for products.addToCart.id
    //       hint: await page.getByTestId(products.addToCart.id).click();

    // TODO: assert the cart badge shows '1'
    //       hint: await expect(page.locator('.shopping_cart_badge')).toHaveText('1');
  });
});

// ─────────────────────────────────────────────────────────────────────────────
// ROUND 5 — Network Assertion / Route Interception
// ─────────────────────────────────────────────────────────────────────────────
// Instructions:
//   "Update the test to verify the add-to-cart network request succeeds."
//
// What this tests: intercepting/waiting correctly, understanding of UI vs
//                  network validation, reliable synchronization.
//
// Hints:
//   • Use page.waitForRequest() or page.route() to intercept network calls.
//   • Await the request BEFORE triggering the action so nothing is missed:
//       const requestPromise = page.waitForRequest(url => url.includes('cart'));
//       await page.getByTestId(products.addToCart.id).click();
//       const request = await requestPromise;
//   • Assert request.method() or the response via request.response().
//   • Avoid fixed waits (await page.waitForTimeout(3000) is a red flag).
//
// Note: SauceDemo is a client-side-only app, so the "network request" is the
//       initial page XHR or a simulated route intercept. In a real app you
//       would intercept the POST to your cart API endpoint.
// ─────────────────────────────────────────────────────────────────────────────

test.describe('Round 5 – Network intercept', () => {
  test('intercepts the add-to-cart request and asserts a successful response', async ({ page }) => {
    // TODO: set up the route intercept BEFORE the action that triggers the request
    //       hint: await page.route('**/cart*', async (route) => {
    //               await route.continue();
    //             });
    //       — or use page.waitForResponse() to capture and assert status codes

    // TODO: log in with valid credentials

    // TODO: click the "Add to cart" button

    // TODO: assert the intercepted response had statusCode 200
    //       hint: const response = await page.waitForResponse('**/cart*');
    //             expect(response.status()).toBe(200);

    // TODO: also assert the cart badge UI updated (belt-and-suspenders)
    //       hint: await expect(page.locator('.shopping_cart_badge')).toHaveText('1');
  });
});
