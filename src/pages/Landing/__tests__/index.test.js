import { render, cleanup } from '@testing-library/react';
import Landing from '..';

afterEach(cleanup)

describe('Landing', () => {
  it('renders', async () => {
    render(<Landing />)
  })
  it('Matches Snapshot', async () => {
    const {asFragment} = render(<Landing />)
    expect(asFragment()).toMatchSnapshot()
  })
})