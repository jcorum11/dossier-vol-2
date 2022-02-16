import { lazy } from 'react'
import dndImage from './assets/zoe-d3Rxton7VRY-unsplash.webp'
import rolodeckImage from './assets/hans-isaacson-ZUdwwp6r0zs-unsplash.webp'
import harpoonImage from './assets/nitish-goswami-P12cbv1z8tI-unsplash.webp'
import splootsImage from './assets/mick-haupt-OQrZQ80eNM4-unsplash.webp'

const Project = lazy(() => import('../../components/Project'))
const SectionTitle = lazy(() => import('../../components/SectionTitle'))

function Projects() {
  const projectDetails = {
    dnd: {
      title: 'D&D Tracker',
      description: 'This was a really cool tracker that I did during bootcamp. Check it out!',
      href: 'https://johnnielsen1221.github.io/dd-initiative-tracker/',
      img: dndImage
    },
    rolodeck: {
      title: 'Rolodeck',
      description: 'I am really proud of this one. I got a group of friends together and we worked really hard on it. I really loved working with them. You should definitely check this one out.',
      href: 'https://obscure-reef-91673.herokuapp.com/',
      img: rolodeckImage
    },
    harpoon: {
      title: 'Harpoon Mobile',
      description: 'I really love baseball cards. Like... I really love them. I made an app in React Native for my friend as a kind of social media for baseball cards. This one doesnt have a link yet but I hope it will soon!',
      href: '',
      img: harpoonImage
    },
    sploots: {
      title: 'Sploots!',
      description: 'This is another one that I did with a friend of mine. It too doesnt have a link because we are still working on it, but it is a website for people to sell dogs and pet services that has a really good UI.',
      href: '',
      img: splootsImage
    }
  }
  return (
    <section id="projects" className="py-5">
      <SectionTitle name='projects' />
      <section>
        <Project projectDetails={projectDetails.harpoon} first={true}/>
        <Project projectDetails={projectDetails.sploots} />
        <Project projectDetails={projectDetails.rolodeck} />
        <Project projectDetails={projectDetails.dnd} />
      </section>
    </section>
  )
}

export default Projects
