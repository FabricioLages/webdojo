import{getTodayDate} from "../support/utils.js"

describe('Login', () => {

  it('Deve logar com sucesso', () => {
    cy.start()  
    cy.submitLoginForm('papito@webdojo.com', 'katana123')

    cy.get('[data-cy="user-name"]')
      .should('be.visible')
      .and('have.text', 'Fernando Papito')

    cy.get('[data-cy="welcome-message"]')
      .should('be.visible')
      .and('have.text', 'Olá QA, esse é o seu Dojo para aprender Automação de Testes.')

    cy.getCookie('login_date').should('exist')

    cy.getCookie('login_date').should((cookie) => {
      expect(cookie.value).to.eq(getTodayDate())
    })

    cy.window().then((win) => {
      const token = win.localStorage.getItem('token')
      expect(token).to.match(/^[0-9a-f]{32}$/)
    })
  })

  describe('Não deve logar com senha inválida', () => {
    it('Deve logar com sucesso', () => {
      cy.start()
      cy.submitLoginForm('papito@webdojo.com', 'katana1223')

      cy.contains('Acesso negado! Tente novamente.')
        .should('be.visible')
    })
  })

  describe('Não deve logar com Email não cadastrado', () => {
    it('Deve logar com sucesso', () => {
      cy.start()
      cy.submitLoginForm('negado@webdojo.com', 'katana223')

      cy.contains('Acesso negado! Tente novamente.')
        .should('be.visible')
    })
  })
})
