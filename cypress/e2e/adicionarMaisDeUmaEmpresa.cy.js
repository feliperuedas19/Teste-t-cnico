describe('Adicionar mais de uma empresa ao input', () => {
  before(() => {
    cy.visit('localhost:5400');
  });
    it('Clicar no input de empresa e selecionar uma das empresas listadas, depois adicionar as outras duas restantes', () => {
      cy.get('button').contains('Novo Usuário').click();
      
      cy.get('#search_input').click()
      cy.get('.optionContainer').contains('li', 'Empresa 1').click();
      cy.get('.optionContainer').contains('li', 'Empresa 2').click();
      cy.get('.optionContainer').contains('li', 'Empresa 3').click();

      cy.get('.search-wrapper > :nth-child(1)').should('have.text', 'Empresa 1');
      cy.get('.search-wrapper > :nth-child(2)').should('have.text', 'Empresa 2');
      cy.get('.search-wrapper > :nth-child(3)').should('have.text', 'Empresa 3');
      cy.get('.optionContainer').children('li').should('have.length', 0);
      cy.get('.optionContainer').contains('span', 'Nenhum resultado correspondente...')  
    });
  });