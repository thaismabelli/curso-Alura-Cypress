describe('Cadastro no site AdoPet', () => {
  it('Realizar um cadastro no site com sucesso', () => {
    cy.visit('https://adopet-frontend-cypress.vercel.app/');
    cy.contains('.initial__link', 'Cadastrar').click(); /*PROCURA NA PÁGINA UM ELEMENTO EM NOME CADASTRAR E CLICA*/
    cy.get('input[name="nome"').type('Thais Mabelli');
    cy.get('input[name="email"').type('thaism@email.com');
    cy.get('input[name="password"').type('Senha123');
    cy.get('input[name="confirm_password"').type('Senha123');
    cy.contains('button', 'Cadastrar').click()
  })
})