import React from 'react'
import { mount } from 'cypress-react-unit-test'
import { render, waitForElement } from '@testing-library/react'
import App from './App'

describe('<App />', () => {
  it('ping and its reply are rendered', async () => {
    mount(<App />)
    await waitForElement(() => component.getByText('Hello World!!'))

    expect(component.container).toHaveTextContent('ping')
    expect(component.container).toHaveTextContent('PONG')
  })
})
