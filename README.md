# Cypress Interview Template

A progressive E2E testing exercise for evaluating Cypress skills in interview settings.
The candidate starts with this starter template and builds on it round by round.

---

## Getting Started

```bash
npm install
npx cypress open   # interactive mode
npx cypress run    # headless
```

The tests run against [SauceDemo](https://www.saucedemo.com), a public demo e-commerce app.

---

## Exercise Overview

| Round | Spec file | Topic |
|-------|-----------|-------|
| 1 | `cypress/e2e/01-login.cy.js` | Basic login – success path |
| 2 | `cypress/e2e/01-login.cy.js` | Invalid login – error state |
| 3 | `cypress/e2e/02-products.cy.js` | Product filtering |
| 4 | `cypress/e2e/03-cart.cy.js` | Add to cart |
| 5 | `cypress/e2e/03-cart.cy.js` | Network intercept |
| 6 | `cypress/e2e/04-checkout.cy.js` | Checkout happy path |
| 7 | `cypress/e2e/04-checkout.cy.js` | Checkout error handling |
| 8 | All files | Refactor for maintainability |

Each spec file contains the round instructions, hints, and `// TODO` comments guiding
where the candidate should add assertions and actions.

---

## Project Structure

```
cypress/
├── e2e/
│   ├── 01-login.cy.js       # Rounds 1 & 2
│   ├── 02-products.cy.js    # Round 3
│   ├── 03-cart.cy.js        # Rounds 4 & 5
│   └── 04-checkout.cy.js    # Rounds 6 & 7
├── fixtures/
│   ├── users.json           # Login credentials (valid / invalid / locked)
│   └── products.json        # Product names, add-to-cart IDs, checkout info
└── support/
    ├── e2e.js               # Support entry point
    └── commands.js          # Custom command stubs (Round 8 starting point)
cypress.config.js
package.json
```

---

## Round 8 – Refactoring Hint

After completing rounds 1–7 the candidate should refactor their tests to remove
duplication. The `cypress/support/commands.js` file contains commented-out stubs
for custom commands (`cy.login()`, `cy.loginWithFixture()`, `cy.addProductToCart()`)
that serve as a starting point for the conversation.

Key questions to explore:
- Where is login duplicated across specs?
- What belongs in a `beforeEach` vs a custom command?
- How do you keep test intent readable after extracting helpers?