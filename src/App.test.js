import { render, cleanup } from '@testing-library/react'
import {lazy, Suspense} from 'react'
import App from './App'

afterEach(cleanup)

it('renders', async () => {
  render(
  <Suspense fallback={<div>loading...</div>}>
    <App />
  </Suspense>
  )
})

it('matches snapshot', async () => {
  const { asFragment } = render(
  <Suspense fallback={<div>loading...</div>}>
    <App />
  </Suspense>)
  expect(asFragment()).toMatchSnapshot()
})
