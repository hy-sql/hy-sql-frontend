describe('Page renders', () => {
  it('successfully loads', () => {
    cy.visit('127.0.0.2:3000')
    cy.get('h1').contains('HY-SQL').should('be.visible')
  })
})

describe('Textarea exists', () => {
  it('textarea and button can be found', () => {
    cy.visit('127.0.0.2:3000')
    cy.get('form').within(() => {
      cy.get('textarea').should('be.visible')
    })
    cy.get('[id="button"]').should('be.visible')
  })
})
