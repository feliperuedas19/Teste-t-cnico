describe('Adicionar Novo Usuário', () => {
  
    before(() => {
      cy.visit('localhost:5400');
      cy.get('button').contains('Novo Usuário').click();
    });
  
    it('Deve fazer o preenchimentos dos campos e salvar ', () => {
      
        cy.get('[placeholder="Nome"]').type('Usuário teste09')
        cy.get('[placeholder="Email"]').type('meuemaildeteste09@email.com')
        cy.get('[placeholder="Telefone"]').type('12111445577')
        cy.get('[placeholder="Cidade de nascimento"]').type('Belem')
        cy.get('[placeholder="Data de nascimento"]').type('2000-01-01')
        cy.get('#search_input').click()
        cy.get('.optionContainer').contains('li', 'Empresa 1').click();
        cy.get('[placeholder="Nome"]').click()

        cy.get('.sc-eCImPb > button').click()

        cy.reload();

        cy.get('table tbody tr')
        .last()
        .within(() => {
        cy.get('td').each(($td, index) => {
        
        const expectedValues = ['Usuário teste09', 'meuemaildeteste09@email.com','12111445577', '01/01/2000', 'Belem', 'Compliance St...'];
        if (index < 6) {
            cy.wrap($td).should('contain', expectedValues[index], { timeout: 10000 } );
        }
        });
    });
    });
  });
  