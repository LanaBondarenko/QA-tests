/// <reference types="cypress"/>
describe ('My first test',() => {
    beforeEach(()=> {
        cy.visit("https://example.cypress.io")
    })
    //test case
    it("check link", () => {
        cy.visit("https://example.cypress.io")
        cy.contains("clear").click()
        // assertion
        cy.url().should("include", "/commands/actions")
    })
    it("check link", () => {
        
        cy.contains("select").click()
        // assertion
        cy.url().should("include", "/commands/actions")
        cy.get('div.container h1').should('have.text', 'Actions')
        // branch2
    })
})
