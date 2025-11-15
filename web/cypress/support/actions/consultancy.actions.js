Cypress.Commands.add('fillConsultancyForm', (form) => {
    cy.get('#name').type(form.name)
    cy.get('input[placeholder="Digite seu email"]').type(form.email)
    cy.get('input[placeholder="(00) 00000-0000"]').
        type(form.phone)

    cy.contains('label', 'Tipo de Consultoria')
        .parent()
        .find('select')
        .select(form.consultancyType)

    if (form.personType === 'CPF') {
        //span[text()="Pessoa Física"]/..//input
        cy.contains('label', 'Pessoa Física')
            .find('input')
            .click() // ou check
            .should('be.checked')

        cy.contains('label', 'Pessoa Jurídica')
            .find('input')
            .should('be.not.checked')

        cy.contains('label', 'CPF')
            .parent()
            .find('input')
            .type(form.document)
        //.should('have.value', '535.458.070-61')
    }

    if (form.personType === 'CNPJ') {
        cy.contains('label', 'Pessoa Jurídica')
            .find('input')
            .click() // ou check
            .should('be.checked')

        cy.contains('label', 'Pessoa Física')
            .find('input')
            .should('be.not.checked')

        cy.contains('label', 'CNPJ')
            .parent()
            .find('input')
            .type(form.document)
        //.should('have.value', '535.458.070-61')
    }

    //Check box

    form.discoverChannels.forEach((chanel) => {
        cy.contains('label', chanel)
            .find('input')
            .check() // ou Click
            .should('be.checked')
    })

    //botão estilizado (ANEXAR ARQUIVO)


    cy.get('input[type="file"]')
        .selectFile(form.file, { force: true })

    //AREA DE TEXTO

    cy.get('textarea[placeholder="Descreva mais detalhes sobre sua necessidade"]')
        .type(form.description)

    //TAGS
    form.techs.forEach((tech) => {
        cy.get('input[placeholder="Digite uma tecnologia e pressione Enter"]')
            .type(tech)
            .type('{enter}')

        cy.contains('label', 'Tecnologias')
            .parent()
            .contains('span', tech)

        cy.should('be.visible')
    })

    //Checkbox
    if (form.terms === true) {
        cy.contains('label', 'termos de uso')
            .find('input')
            .check()
    }
})

Cypress.Commands.add('submitConsultancyForm', () => {
    cy.contains('button', 'Enviar formulário')
        .click()
})

Cypress.Commands.add('validateConsultancyModal', () => {
    cy.get('.modal', { timeout: 7000 })
        .should('be.visible')
        .find('.modal-content')
        .should('be.visible')
        .and('have.text', 'Sua solicitação de consultoria foi enviada com sucesso! Em breve, nossa equipe entrará em contato através do email fornecido.')
})