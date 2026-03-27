// cypress/e2e/01-login.cy.js
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
//   • Look for stable selectors first (data-test attributes are your friend).
//   • Assert the page changed in a way the user would notice.
//   • Prefer condition-based waits over arbitrary pauses.
//
// A good solution:
//   ✓ Fills email and password fields
//   ✓ Clicks the submit button
//   ✓ Asserts the URL or page heading changed
//   ✓ Confirms a user-visible success state (e.g. product list visible)
// ─────────────────────────────────────────────────────────────────────────────

describe('Round 1 – Successful login', () => {
  beforeEach(() => {
    cy.fixture('users').as('users');
  });

  it('logs in with valid credentials and lands on the products page', function () {
    // TODO: visit the login page
    // TODO: fill in the username field using this.users.valid.username
    // TODO: fill in the password field using this.users.valid.password
    // TODO: click the login button
    // TODO: assert the URL contains '/inventory'
    // TODO: assert a user-visible element on the products page is visible
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
//   • Locate the error message container and assert its text.
// ─────────────────────────────────────────────────────────────────────────────

describe('Round 2 – Invalid login', () => {
  beforeEach(() => {
    cy.fixture('users').as('users');
  });

  it('shows an error message with invalid credentials', function () {
    // TODO: visit the login page
    // TODO: fill in the username field using this.users.invalid.username
    // TODO: fill in the password field using this.users.invalid.password
    // TODO: click the login button
    // TODO: assert an error message is visible
    // TODO: assert the URL does NOT contain '/inventory'
  });
});
