// cypress/e2e/02-products.cy.js
//
// ─────────────────────────────────────────────────────────────────────────────
// ROUND 3 — Product Filtering / Sorting
// ─────────────────────────────────────────────────────────────────────────────
// Instructions:
//   "After login, write a test that sorts products by Name (Z to A) and
//    verifies the first product shown is correct."
//
// Note: SauceDemo uses a sort dropdown rather than a keyword search input.
//       The fixture value products.sortBy = 'za' selects "Name (Z to A)" order.
//       Adapt the approach for any app that exposes a search/filter control.
//
// What this tests: test data understanding, query/filter assertions,
//                  list validation.
//
// Hints:
//   • Think about asserting both the presence of expected results AND the
//     absence of non-matching ones.
//   • cy.get('[data-test="product-sort-container"]').select('za') changes order.
//   • cy.get('.inventory_item_name').first() grabs the first product title.
//   • cy.contains() and cy.get().should('have.length', n) are useful here.
// ─────────────────────────────────────────────────────────────────────────────

describe('Round 3 – Product filtering / sorting', () => {
  beforeEach(() => {
    cy.fixture('users').as('users');
    cy.fixture('products').as('products');
  });

  it('sorts products and verifies the expected first result is displayed', function () {
    // TODO: log in with valid credentials
    // TODO: select the sort option using this.products.sortBy
    //       (hint: cy.get('[data-test="product-sort-container"]').select(this.products.sortBy))
    // TODO: assert the first visible product name equals this.products.sortedFirstProduct
    // TODO: assert the last visible product name equals this.products.sortedLastProduct
  });
});
