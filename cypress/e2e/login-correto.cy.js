describe('Login no site AdoPet', () => {
    beforeEach(() => {
        cy.visit('https://adopet-frontend-cypress.vercel.app/');
        cy.contains('.initial__link', 'Fazer login').click();
    })
    it('Realizar login com sucesso', () => {
        cy.login('thaism@email.com','Senha123')
    })
  })