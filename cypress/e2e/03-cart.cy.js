// cypress/e2e/03-cart.cy.js
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
//   • Consider whether the cart count starts from zero or a known seed state.
//   • Use data-test attributes rather than CSS classes for selectors.
// ─────────────────────────────────────────────────────────────────────────────

describe('Round 4 – Add to cart', () => {
  beforeEach(() => {
    cy.fixture('users').as('users');
    cy.fixture('products').as('products');
  });

  it('adds a product to the cart and the cart count reflects the change', function () {
    // TODO: log in with valid credentials
    // TODO: assert the cart badge is absent or shows 0 before adding
    // TODO: click the "Add to cart" button for this.products.addToCart.id
    // TODO: assert the cart badge shows 1
  });
});

// ─────────────────────────────────────────────────────────────────────────────
// ROUND 5 — Network Assertion / Intercept
// ─────────────────────────────────────────────────────────────────────────────
// Instructions:
//   "Update the test to verify the add-to-cart network request succeeds."
//
// What this tests: intercepting/waiting correctly, understanding of UI vs
//                  network validation, reliable synchronization.
//
// Hints:
//   • Alias the relevant request with cy.intercept() and cy.wait('@alias').
//   • Assert the response status code on the aliased call.
//   • Avoid fixed waits (cy.wait(3000) is a red flag).
//
// Note: SauceDemo is a client-side-only app, so the "network request" here
//       could be the page load XHR or a simulated intercept. In a real app
//       you would intercept the POST to your cart API endpoint.
// ─────────────────────────────────────────────────────────────────────────────

describe('Round 5 – Network intercept', () => {
  beforeEach(() => {
    cy.fixture('users').as('users');
    cy.fixture('products').as('products');
  });

  it('intercepts the add-to-cart request and asserts a successful response', function () {
    // TODO: set up cy.intercept() BEFORE the action that triggers the request
    //       e.g. cy.intercept('POST', '**/cart*').as('addToCart');
    // TODO: log in with valid credentials
    // TODO: click the "Add to cart" button
    // TODO: cy.wait('@addToCart') and assert its response.statusCode === 200
    // TODO: also assert the cart badge UI updated (belt-and-suspenders)
  });
});
