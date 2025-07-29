const cypress = require("cypress");

describe('Meu primeiro teste Cypress', () => {
  it('Visita a página inicial do Google', () => {
    cy.visit('https://www.google.com')
  })
})