describe('Formulário de Consultoria', () => {
    it('Deve solicitar consultoria individual', () => {
        cy.start()
        cy.submitLoginForm('papito@webdojo.com', 'katana123')

        cy.goTo('Formulário', 'Consultoria')

        //ID
        cy.get('#name').type('Fabricio Lages')

        //Placeholder
        cy.get('input[placeholder="Digite seu email"]').type('fabriciolagess@webdojo.com')

        //Placeholder + Validando valor digitado
        cy.get('input[placeholder="(00) 00000-0000"]').
            type('31989898989')
            .should('have.value', '(31) 98989-8989')

        //Select (Pode usar label, value, texto)
        //cy.get('#consultancyType').select('In Company')

        // Não existindo id ou classes
        //exemplo: //label[text()="Tipo 1"]/..//select
        cy.contains('label', 'Tipo de Consultoria')
            .parent()
            .find('select')
            .select('Individual')

        //span[text()="Pessoa Física"]/..//input
        cy.contains('span', 'Pessoa Física')
            .parent()
            .find('input')
            .click() // ou check
            .should('be.checked')

        cy.contains('label', 'Pessoa Jurídica')
            .find('input')
            .should('be.not.checked')

        cy.contains('label', 'CPF')
            .parent()
            .find('input')
            .type('53545807061')
            .should('have.value', '535.458.070-61')

        //Check box
        const discoverChannels = [
            'Instagram',
            'LinkedIn',
            'Udemy',
            'YouTube',
            'Indicação de Amigo',
        ]

        discoverChannels.forEach((chanel) => {
            cy.contains('label', chanel)
                .find('input')
                .check() // ou Click
                .should('be.checked')
        })

        //botão estilizado (ANEXAR ARQUIVO)
        cy.get('input[type="file"]')
            .selectFile('./cypress/fixtures/document.pdf', { force: true })

        //AREA DE TEXTO

        cy.get('textarea[placeholder="Descreva mais detalhes sobre sua necessidade"]')
            .type('Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.')

    })
})

