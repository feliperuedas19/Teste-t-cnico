describe('Excluir cadastro do usuário', () => {

    before(() => {
      cy.visit('localhost:5400');
    });

    it('Clicar no botão de exclusão e verificar se o usuário foi deletado', () => {
        cy.request('http://localhost:8400/api/user')
        .then((response) => {
            const users = response.body;
            const lastUser = users[users.length - 1];
            const userId = lastUser.id_user; 

            cy.get('table tbody tr')
                .last()
                .find('button')
                .last()
                .click()

            cy.wait(2000)    
            cy.get('.swal2-popup').should('be.visible')
            cy.get('i').should('contain', 'Usuário deletado com sucesso!')

            cy.request({
                method: 'GET',
                url: `http://localhost:8400/api/user/${userId}`,
            }).then((response) => {
                expect(response.status).to.eq(200) 
            })

            let email;
            cy.get('table tbody tr').last()
              .find('td:nth-child(2)')
              .invoke('text')
              .then((text) => {
              email = text;

              cy.get('table tbody tr')
              .last()
              .find('td:nth-child(2)')
              .should('not.have.text', email);
            });
        });
    });
  });
   