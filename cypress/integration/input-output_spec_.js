describe('Page renders', () => {
  it('successfully loads', () => {
    cy.visit('/')
    cy.get('h1').contains('HY-SQL').should('be.visible')
  })
})
describe('Proper input gets an answer with no error', () => {
  it('successfully loads', () => {
    cy.visit('/')
    cy.get('textarea').type(
      "CREATE TABLE Tuotteet (id INTEGER PRIMARY KEY, nimi TEXT FOREIGN KEY, hinta INTEGER); INSERT INTO Tuotteet (nimi, hinta) VALUES ('retiisi', 7); SELECT * FROM Tuotteet;"
    )
    cy.get('[id="button"]').click()
    cy.wait(5000)
    cy.get('[id="tulos"]')
      .contains('SELECT * FROM Tuotteet -query was executed succesfully')
      .should('be.visible')
    cy.get('table').contains('nimi').should('be.visible')
    cy.get('table').contains('retiisi').should('be.visible')
  })
})
describe('Improper input gets an answer with an error', () => {
  it('successfully loads', () => {
    cy.visit('/')
    cy.get('textarea').type(
      "CREATE TABLE Tuotteet (id INTEGER PRIMARY KEY, nimi TEXT FOREIGN KEY, hinta INTEGER); INSERT INTO Tuotteet (nimi, hinta) VALUES ('retiisi', 7) SELECT * FROM Tuotteet;"
    )
    cy.get('[id="button"]').click()
    cy.wait(1000)
    cy.get('[id="tulos"]')
      .contains('INSERT INTO -query execution failed: Query must end with ;')
      .should('be.visible')
    cy.get('table').contains('nimi').should('not.exist')
    cy.get('table').contains('retiisi').should('not.exist')
  })
})
