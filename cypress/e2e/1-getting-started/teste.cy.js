/// <reference types="cypress" />


describe('My First Test', () => {
    it('Visits the app root url', () => {
        cy.visit('https://www.odoo.com/pt_BR?utm_source=google&utm_medium=cpc&utm_campaign=BR-PT-ERP_App-Specific-Values-Broad&gad_source=1&gad_campaignid=14479081424&gbraid=0AAAAAD_peRtNzlchmf7X1j9nKPyruqrc8&gclid=Cj0KCQjwhafEBhCcARIsAEGZEKJRljEkCclx3NJtgraHrYSTGNPPcqz7xxItafzOHtioqIcUZnZn7AcaArynEALw_wcB')
        //cy.get('.show > .dropdown-toggle').click()
        cy.get('.o_primary_nav > :nth-child(1) > .dropdown-toggle').click()
     
    })
})