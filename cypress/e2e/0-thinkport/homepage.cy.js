/// <reference types="cypress" />


describe('thinkport about us', () => {
    beforeEach(() => {
        cy.visit('https://regenfass.ttn-leipzig.de/')
    })

    it('displays two todo items by default', () => {
        cy.get('#regenfass-01').should('have.length', 1)

        cy.get('#regenfass-01').first().should('have.text', 'regenfass 0.1')
    })
})
