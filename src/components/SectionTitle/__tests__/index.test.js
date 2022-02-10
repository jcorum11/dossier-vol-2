import { render, cleanup } from '@testing-library/react'
import SectionTitle from '..'

afterEach(cleanup)

describe('SectionTitle', () => {
  it('renders', async () => {
    render(<SectionTitle />)
  })
  it('matches snapshot', () => {
    const {asFragment} = render(<SectionTitle />)
    expect(asFragment()).toMatchSnapshot()
  })
})