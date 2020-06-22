describe('Page renders', () => {
  it('successfully loads', () => {
    cy.visit('http://localhost:3000')
    cy.get('h1').contains('HY-SQL').should('be.visible')
  })
})
describe('Proper input gets an answer with no error', () => {
  it('no errors are shown', () => {
    cy.visit('http://localhost:3000')
    cy.get('textarea').type(
      "CREATE TABLE Tuotteet (id INTEGER PRIMARY KEY, nimi TEXT FOREIGN KEY, hinta INTEGER); INSERT INTO Tuotteet (nimi, hinta) VALUES ('retiisi', 7); SELECT * FROM Tuotteet;"
    )
    cy.get('[id="button"]').click()
    cy.wait(3000)
    cy.get('[id="tulos"]')
      .contains('SELECT * FROM Tuotteet -query executed successfully')
      .should('be.visible')
    cy.get('table').contains('nimi').should('be.visible')
    cy.get('table').contains('retiisi').should('be.visible')
  })
})
describe('Improper input gets an answer with an error', () => {
  it('error is shown', () => {
    cy.visit('http://localhost:3000')
    cy.get('textarea').type(
      "CREATE TABLE Tuotteet (id INTEGER PRIMARY KEY, nimi TEXT FOREIGN KEY, hinta INTEGER); INSERT INTO Tuotteet (nimi, hinta) VALUES ('retiisi', 7) SELECT * FROM Tuotteet;"
    )
    cy.get('[id="button"]').click()
    cy.wait(1000)
    cy.get('[id="tulos"]')
      .contains('Query must end with ;')
      .should('be.visible')
    cy.get('table').contains('nimi').should('not.exist')
    cy.get('table').contains('retiisi').should('not.exist')
  })
})
describe('Input with several functions', () => {
  it('no errors are shown', () => {
    cy.visit('http://localhost:3000')
    cy.get('textarea').type(
      "CREATE TABLE Tuotteet (id INTEGER PRIMARY KEY, nimi TEXT, hinta INTEGER); INSERT INTO Tuotteet (nimi, hinta) VALUES ('retiisi', 4); INSERT INTO Tuotteet(nimi, hinta) VALUES('porkkana', 5); INSERT INTO Tuotteet(nimi, hinta) VALUES('sorkkana', 1); INSERT INTO Tuotteet(nimi, hinta) VALUES('workkana', 2); INSERT INTO Tuotteet(nimi, hinta) VALUES('aorkkana', 3); INSERT INTO Tuotteet(nimi, hinta) VALUES('horkkana', 4); INSERT INTO Tuotteet(nimi, hinta) VALUES('rorkkana', 8); SELECT nimi, 5*hinta+3, LENGTH(nimi) FROM Tuotteet WHERE hinta=LENGTH(nimi) OR (hinta+1=5 AND nimi<>'banaani') OR (hinta=2*hinta) ORDER BY LENGTH(nimi) DESC, hinta;"
    )
    cy.get('[id="button"]').click()
    cy.wait(1500)
    cy.get('[id="tulos"]')
      .contains('FROM Tuotteet -query executed successfully')
      .should('be.visible')
    cy.get('table').contains('nimi').should('be.visible')
    cy.get('table').contains('retiisi').should('be.visible')
    cy.get('table').contains('rorkkana').should('be.visible')
  })
})
describe('Input with UPDATE and DELETE', () => {
  it('no errors are shown', () => {
    cy.visit('http://localhost:3000')
    cy.get('textarea').type(
      "CREATE TABLE Tuotteet(id INTEGER PRIMARY KEY, nimi TEXT, hinta INTEGER); INSERT INTO Tuotteet(nimi, hinta) VALUES('retiisi', 7); INSERT INTO Tuotteet(nimi, hinta) VALUES('omena', 5); INSERT INTO Tuotteet(nimi, hinta) VALUES('reti', 7); UPDATE Tuotteet SET nimi = 'ananas' WHERE nimi = 'retiisi' OR hinta = 5; DELETE FROM Tuotteet WHERE nimi='reti'; SELECT * FROM Tuotteet;"
    )
    cy.get('[id="button"]').click()
    cy.wait(1500)
    cy.get('[id="tulos"]')
      .contains('SELECT * FROM Tuotteet -query executed successfully')
      .should('be.visible')
    cy.get('table').contains('nimi').should('be.visible')
    cy.get('table').contains('ananas').should('be.visible')
    cy.get('table').contains('reti').should('not.exist')
  })
})
