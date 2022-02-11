import { render, cleanup } from '@testing-library/react'
import SectionTitle from '..'

afterEach(cleanup)

it('renders', async () => {
  render(<SectionTitle />)
})
it('matches snapshot', async () => {
  const { asFragment } = render(<SectionTitle />)
  expect(asFragment()).toMatchSnapshot()
})