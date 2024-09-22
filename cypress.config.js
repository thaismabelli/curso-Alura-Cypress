const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
    video: true,  // gera vídeos ao rodar npm cypress run no terminal
    reporter: 'mochawesome', //geração de relatorio dos testes
    reporterOptions: {
      reportDir: 'cypress/results', // diretorio onde vai ficar os relatorios
      overwrite: false, //está como false, então os relatorios nao vao sobrescrever
      html: true, //formato escolhido do relatorio
      json: false, // formato desativado 
      timestamp: "mmddyyyy_HHMMss" }
  },
});
// comando para os relatorios: npx cypress run -- reporter mochawesome