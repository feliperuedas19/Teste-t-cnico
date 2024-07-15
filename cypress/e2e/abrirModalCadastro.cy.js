describe('Abrir Modal de Cadastro', () => {

  before(() => {
    cy.visit('localhost:5400');
  });
    it('Clicar no botão "Novo Usuário" e verificar se a modal está aberta', () => {
      cy.get('button').contains('Novo Usuário').click();
  
      cy.get('h2').contains('Cadastrar novo usuário');
      cy.get('[placeholder="Nome"]').should('be.visible');
      cy.get('[placeholder="Email"]').should('be.visible');
      cy.get('[placeholder="Telefone"]').should('be.visible');
      cy.get('[placeholder="Cidade de nascimento"]').should('be.visible');
      cy.get('[placeholder="Data de nascimento"]').should('be.visible');
      cy.get('[placeholder="Empresas"]').should('be.visible');
      cy.get('button').contains('Salvar')
    });
  });
  