import React from 'react'
import { mount } from 'cypress-react-unit-test'
import App from '../App'

describe('Page renders', () => {
  it('successfully loads', () => {
    cy.visit('127.0.0.2:3000')
    cy.get('h1').contains('HY-SQL').should('be.visible')
  })
})

describe('<App />', () => {
  it('ping and its reply are rendered', () => {
    cy.visit('127.0.0.2:3000')
    cy.wait(500)

    cy.get('div').contains('ping').should('be.visible')
    cy.get('div').contains('pong').should('be.visible')
  })
})

describe('<App />', () => {
  it('ping is received', () => {
    cy.visit('127.0.0.2:3000')
    cy.wait(500)
    cy.request('GET', 'https://hy-sql.herokuapp.com/api/ping').as('pong')
    cy.get('@pong').should((response) => {
      expect(response.body).contains({ value: 'pong' })
    })
  })
})
