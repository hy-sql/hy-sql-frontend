import React from 'react'
import axios from 'axios'
import { render, waitForElement } from '@testing-library/react'
import App from './App'
import { ping } from './services/ping.js'
jest.mock('./services/ping')
jest.mock('axios')

test('dummy test to pass', () => {})

describe('<App />', () => {
  it('ping and its reply are rendered', async () => {
    const component = render(<App />)
    component.rerender(<App />)
    await waitForElement(() => component.getByText('Hello World!!'))

    expect(component.container).toHaveTextContent('ping')
    expect(component.container).toHaveTextContent('PONG')
  })
})
