describe('Editar cadastro do usuário', () => {

    before(() => {
      cy.visit('localhost:5400');
    });

    it('Clicar no botão de edição', () => {
      cy.get('table tbody tr')
        .last()
        .find('button')               
        .first()                      
        .click()

      cy.get('body').should('have.class', 'ReactModal__Body--open');
    });
  });
  
 



