import React from 'react'
import { render, waitForElement } from '@testing-library/react'
import App from './App'
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
