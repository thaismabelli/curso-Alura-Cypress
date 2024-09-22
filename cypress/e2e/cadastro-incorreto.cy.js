describe('Cadastro no site AdoPet', () => {
    it('Tentar realizar cadastro com campos sem estarem preenchidos', () => {
      cy.visit('https://adopet-frontend-cypress.vercel.app/');
      cy.contains('.initial__link', 'Cadastrar').click(); /*Usando classe*/
      cy.contains('button', 'Cadastrar').click();
      cy.contains('É necessário informar um endereço de email').should('be.visible'); /* Comando informando que a mensagem deve estar visível*/
      cy.contains('Crie uma senha').should('be.visible');
      cy.contains('Repita a senha criada acima').should('be.visible');
    })
  })