describe('Gerenciamento de Perfis no GItHub', () => {

    beforeEach(() => {
        cy.login()
        cy.goTo('Tabela', 'Perfis do GitHub')
    })

    it('Deve Poder cadastrar um novo perfil do GitHub', () => {

        cy.get('#name').type('Fabricio lages')
        cy.get('#username').type('fabricioQA')
        cy.get('#profile').type('QA')

        cy.contains('button', 'Adicionar Perfil').click()

        cy.get('#name').type('Fabricio lages')
        cy.get('#username').type('lagesQA')
        cy.get('#profile').type('QA')

        cy.contains('button', 'Adicionar Perfil').click()

        cy.contains('table tbody tr', 'lagesQA')
        .should('be.visible')
        .as('trProfile')

        cy.get('@trProfile')
        .contains('Fabricio lages') 
        .should('be.visible') 

        cy.get('@trProfile')
        .contains('QA') 
        .should('be.visible') 
    })

    it('Deve poder remover um perfil do GitHub', () => {
        cy.log('todo')

        const profile = {
            name: 'Fabricio lages',
            username: 'fabricioQA',
            profile: 'QA'
        }

        cy.get('#name').type(profile.name)
        cy.get('#username').type(profile.username)
        cy.get('#profile').type(profile.profile)

        cy.contains('button', 'Adicionar Perfil').click()

        cy.contains('table tbody tr', profile.name)
        .should('be.visible')
        .as('trProfile')

        cy.get('@trProfile')
        .find('button[title="Remover perfil"]')
        .click()

        cy.contains('table tbody', profile.username)
        .should('not.exist')    
    })

    it('Deve validadr o link do GitHub', () => {
        cy.log('todo')

        const profile = {
            name: 'Fabricio lages',
            username: 'FabricioLages',
            profile: 'QA'
        }

        cy.get('#name').type(profile.name)
        cy.get('#username').type(profile.username)
        cy.get('#profile').type(profile.profile)

        cy.contains('button', 'Adicionar Perfil').click()

        cy.contains('table tbody tr', profile.name)
        .should('be.visible')
        .as('trProfile')

        cy.get('@trProfile').find('a')
        .should('have.attr', 'href', 'https://github.com/FabricioLages')
        .and('have.attr', 'target', '_blank')   
    })
})
