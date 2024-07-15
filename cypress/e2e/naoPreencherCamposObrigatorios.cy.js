describe('Adicionar Novo Usuário sem preencher campos obrigatórios', () => {
  
    before(() => {
      cy.visit('localhost:5400');
      cy.get('button').contains('Novo Usuário').click();
    });
  
    it('Deve verificar a obrigatoriedade dos campos (Nome, Email, Telefone, Data e Empresa)', () => {
        
        cy.get('[placeholder="Nome"]').as('inputName')
        cy.get('[placeholder="Email"]').as('inputEmail')
        cy.get('[placeholder="Telefone"]').as('inputPhone')
        cy.get('[placeholder="Data de nascimento"]').as('inputBirthdate')
        cy.get('#search_input').as('inputCompany')
    
        cy.get('@inputEmail').type('meuemaildeteste10@email.com')
        cy.get('@inputPhone').type('12111445577')
        cy.get('@inputBirthdate').type('2000-01-10')
        cy.get('@inputCompany').click()
        cy.get('.optionContainer').contains('li', 'Empresa 1').click()
        cy.get('@inputName').click()
    
        cy.get('.sc-eCImPb > button').click()
    
        const inputs = ['@inputName', '@inputEmail', '@inputPhone', '@inputBirthdate', '@inputCompany']
 
        inputs.forEach((alias) => {
            cy.get(alias).clear()
            cy.isRequired(alias, 'Preencha este campo.')
        })
    })
  }); 