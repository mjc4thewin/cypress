// cypress/e2e/04-checkout.cy.js
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
//   • Fixture data for checkout info is in cypress/fixtures/products.json
//     under the "checkout" key.
//
// Checkout URL flow on SauceDemo:
//   /cart.html  →  /checkout-step-one.html  →
//   /checkout-step-two.html  →  /checkout-complete.html
// ─────────────────────────────────────────────────────────────────────────────

describe('Round 6 – Checkout happy path', () => {
  beforeEach(() => {
    cy.fixture('users').as('users');
    cy.fixture('products').as('products');
  });

  it('completes checkout and shows the order confirmation page', function () {
    // Step 1: Log in
    // TODO: visit '/' and log in with valid credentials

    // Step 2: Add a product and proceed to cart
    // TODO: add this.products.addToCart to the cart
    // TODO: navigate to /cart.html

    // Step 3: Begin checkout
    // TODO: click the checkout button
    // TODO: assert URL is /checkout-step-one.html

    // Step 4: Fill in customer info
    // TODO: fill in firstName, lastName, postalCode from this.products.checkout
    // TODO: click Continue

    // Step 5: Review order summary
    // TODO: assert URL is /checkout-step-two.html
    // TODO: assert the product name is visible in the summary

    // Step 6: Finish and confirm
    // TODO: click Finish
    // TODO: assert URL is /checkout-complete.html
    // TODO: assert the confirmation message is visible
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
//   • Stub the network response rather than trying to force a backend failure.
//   • cy.intercept() accepts a routeHandler that can return a forced statusCode.
//   • Assert the correct UI behaviour after the failed action
//     (e.g. an error banner, no navigation to the next step).
// ─────────────────────────────────────────────────────────────────────────────

describe('Round 7 – Checkout error handling', () => {
  beforeEach(() => {
    cy.fixture('users').as('users');
    cy.fixture('products').as('products');
  });

  it('shows an error state when the checkout API returns 500', function () {
    // TODO: stub the checkout request BEFORE it fires:
    //   cy.intercept('POST', '**/checkout*', { statusCode: 500, body: { error: 'Server Error' } }).as('checkoutFail');

    // TODO: log in, add product, navigate to cart, begin checkout,
    //       fill info, and click Continue/Finish

    // TODO: cy.wait('@checkoutFail')
    // TODO: assert the user does NOT reach /checkout-complete.html
    // TODO: assert an error message or banner is visible
  });
});
