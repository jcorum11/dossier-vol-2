import { render, cleanup } from '@testing-library/react'
import Project from '..'
import dndImage from '../../../pages/Projects/assets/zoe-d3Rxton7VRY-unsplash.webp'

afterEach(cleanup)

const projectDetails = {
  dnd: {
    title: 'D&D Tracker',
    description: 'This was a really cool tracker that I did during bootcamp. Check it out!',
    href: 'https://johnnielsen1221.github.io/dd-initiative-tracker/',
    img: dndImage
  }
}

it('renders', async () => {
  render(<Project projectDetails={projectDetails.dnd} first={true} />)
})
it('matches snapshot', async () => {
  const { asFragment } = render(<Project projectDetails={projectDetails.dnd} first={true} />)
  expect(asFragment()).toMatchSnapshot()
})

  // check prop types
  // check links