// tests/02-products.spec.js
//
// ─────────────────────────────────────────────────────────────────────────────
// ROUND 3 — Product Filtering / Sorting
// ─────────────────────────────────────────────────────────────────────────────
// Instructions:
//   "After login, write a test that sorts products by Name (Z to A) and
//    verifies the first product shown is correct."
//
// Note: SauceDemo uses a sort dropdown rather than a keyword search input.
//       products.sortBy = 'za' selects the "Name (Z to A)" option.
//       Adapt the approach for any app that exposes a search/filter control.
//
// What this tests: test data understanding, query/filter assertions,
//                  list validation.
//
// Hints:
//   • page.getByTestId('product-sort-container').selectOption('za') changes order.
//   • page.locator('.inventory_item_name').first() grabs the first product title.
//   • expect(locator).toHaveText() asserts exact text; toContainText() for partial.
//   • Think about asserting both the first AND the last item in the sorted list.
// ─────────────────────────────────────────────────────────────────────────────

const { test, expect } = require('@playwright/test');
const users = require('./fixtures/users.json');
const products = require('./fixtures/products.json');

test.describe('Round 3 – Product filtering / sorting', () => {
  test('sorts products and verifies the expected first result is displayed', async ({ page }) => {
    // TODO: log in with valid credentials
    //       hint: see tests/helpers/auth.js for loginWithFixture helper

    // TODO: select the sort option
    //       hint: await page.getByTestId('product-sort-container').selectOption(products.sortBy);

    // TODO: assert the first visible product name equals products.sortedFirstProduct
    //       hint: await expect(page.locator('.inventory_item_name').first())
    //               .toHaveText(products.sortedFirstProduct);

    // TODO: assert the last visible product name equals products.sortedLastProduct
    //       hint: await expect(page.locator('.inventory_item_name').last())
    //               .toHaveText(products.sortedLastProduct);
  });
});
