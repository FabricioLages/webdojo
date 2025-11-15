describe('Simulando Mouseober', () => {
    it('Deve mostrar um texto ao passar o mouse em cima do link do istagram', () => {
        cy.login()
        
        cy.contains('Isso é Mouseover!').should('not.exist')
        cy.get('[data-cy="instagram-link"]').realHover()
        cy.contains('Isso é Mouseover!').should('exist')
    })
})