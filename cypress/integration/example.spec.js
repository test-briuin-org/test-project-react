describe('My First Test', () => {
  it('Visits the app and checks the title', () => {
    cy.visit('/');
    cy.title().should('include', 'Vite + React + TS');
  });
}); 