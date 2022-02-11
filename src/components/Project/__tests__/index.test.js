import { render, cleanup } from '@testing-library/react'
import Project from '..'

afterEach(cleanup)

it('renders', async () => {
  render(<Project title='test' description='some testy description' href='https://test.com' first={true} />)
})
it('matches snapshot', async () => {
  const { asFragment } = render(<Project title='test' description='some testy description' href='https://test.com' first={true} />)
  expect(asFragment()).toMatchSnapshot()
})

  // check prop types
  // check links