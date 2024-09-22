describe('Api Adopet', () => {
    const authorization = `Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiJjZGQ3OTRiZi01NTUwLTRjMzEtYmQwOC02YTQ4MGQ5ODk3MjgiLCJhZG9wdGVyTmFtZSI6IlRoYWlzIE1hYmVsbGkiLCJpYXQiOjE3MjcwMjA5NjQsImV4cCI6MTcyNzI4MDE2NH0.q8lytmo7xebNnPpnKsSreJpB-HIBr3a-RnZOgYvXmW4`

 it('Mensagens da API', () => {
        cy.request({
         method: 'GET' ,
         url: 'https://adopet-api-i8qu.onrender.com/mensagem/cdd794bf-5550-4c31-bd08-6a480d989728',
         headers: { authorization } 
        }).then((res) => {
            expect(res.status).to.be.equal(200)
            expect(res.body).is.not.empty
            expect(res.body).to.have.property('msg')
        }) 
    })
})

// TESTE DE API USANDO CYPRESS 
// MENSAGENS OK NO BACK, CASO A MENSAGEM N APAREÇA NO FRONT, É PROBLEMA DE FRONT