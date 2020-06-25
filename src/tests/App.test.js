describe('Page renders', () => {
  it('successfully loads', () => {
    cy.visit('http://localhost:3000')
    cy.get('h1').contains('HY-SQL').should('be.visible')
  })
})
