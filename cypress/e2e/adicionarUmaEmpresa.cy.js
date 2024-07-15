describe('Adicionar uma empresa ao input', () => {
    before(() => {
        cy.visit('localhost:5400');
      });
    it('Clicar no input de empresa e selecionar uma das empresas listadas', () => {
      cy.get('button').contains('Novo Usuário').click();
  
      cy.get('#search_input').click()

      cy.get('.optionContainer').children('li').should('have.length', 3);
      
      cy.get('.optionContainer').contains('li', 'Empresa 1').click();

      cy.get('.search-wrapper').find('span').should('have.text', 'Empresa 1');
      cy.get('.optionContainer').children('li').should('have.length', 2);
    });
  });