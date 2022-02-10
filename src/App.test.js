import { render, cleanup } from './test-utils';
import App from './App';

afterEach(cleanup)

describe('App', () =>  {
  it('renders', async () => {
    render(<App />);
  })

  it('matches snapshot', async() => {
    const { asFragment } = render(<App />)
    expect(asFragment()).toMatchSnapshot()
  })
})