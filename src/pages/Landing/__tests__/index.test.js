import { render, cleanup } from '@testing-library/react'
import { Suspense } from 'react/cjs/react.production.min'
import Landing from '..'

afterEach(cleanup)

it('renders', async () => {
  render(
    <Suspense fallback={<div>Loading...</div>}>
      <Landing />
    </Suspense>
  )
})

it('Matches Snapshot', async () => {
  const { asFragment } = render(<Landing />)
  expect(asFragment()).toMatchSnapshot()
})