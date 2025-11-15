describe('Studio', () => {
  it('Exemplo do Cypress Studio', () => {
    cy.visit('https://example.cypress.io')
    /* ==== Generated with Cypress Studio ==== */
    cy.get('.banner > .container').click();
    cy.get('h1').should('be.visible');
    /* ==== End Cypress Studio ==== */
  })
})