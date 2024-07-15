describe('Abrir Modal de Cadastro', () => {
  before(() => {
    cy.visit('localhost:5400');
    cy.get('button').contains('Novo Usuário').click();
  });
    it('Digitar a data de nascimento', () => {
      cy.get('[placeholder="Data de nascimento"]').type('2000-01-01')

      cy.get('input[type="date"]').should('have.value', '2000-01-01');
    });
  }); 