describe('Adicionar e remover uma empresa do campo empresas', () => {
    before(() => {
        cy.visit('localhost:5400');
      });
    it('Clicar no input de empresa e selecionar uma das empresas listadas, logo depois fazer a remoção', () => {
      cy.get('button').contains('Novo Usuário').click();
  
      cy.get('#search_input').click()

      cy.get('.optionContainer').children('li').should('have.length', 3);
      
      cy.get('.optionContainer').contains('li', 'Empresa 1').click();

      cy.get('.search-wrapper').find('span').should('have.text', 'Empresa 1');
      cy.get('.optionContainer').children('li').should('have.length', 2);

      cy.get('.icon_cancel').click()
      cy.get('.optionContainer').children('li').should('have.length', 3);
    });
  });