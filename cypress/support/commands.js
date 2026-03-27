// cypress/support/commands.js
//
// Round 8 hint: extract repeated setup steps into custom commands.
// The stubs below give candidates a starting point for refactoring.
//
// Cypress.Commands.add('login', (username, password) => {
//   cy.visit('/');
//   cy.get('[data-test="username"]').type(username);
//   cy.get('[data-test="password"]').type(password);
//   cy.get('[data-test="login-button"]').click();
// });
//
// Cypress.Commands.add('loginWithFixture', (userKey = 'valid') => {
//   cy.fixture('users').then((users) => {
//     cy.login(users[userKey].username, users[userKey].password);
//   });
// });
//
// Cypress.Commands.add('addProductToCart', (dataTestId) => {
//   cy.get(`[data-test="${dataTestId}"]`).click();
// });
