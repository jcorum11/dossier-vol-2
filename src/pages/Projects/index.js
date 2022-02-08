import SectionTitle from '../../components/SectionTitle'
import styled from 'styled-components'
import Project from '../../components/Project'

function Projects() {
  const projectDetails = {
    dnd: {
      description: 'This was a really cool tracker that I did during bootcamp. Check it out!',
      href: 'https://johnnielsen1221.github.io/dd-initiative-tracker/'
    },
    rolodeck: {
      description: 'I am really proud of this one. I got a group of friends together and we worked really hard on it. I really loved working with them. You should definitely check this one out.',
      href: 'https://obscure-reef-91673.herokuapp.com/'
    },
    harpoon: {
      description: 'I really love baseball cards. Like... I really love them. I made an app in React Native for my friend as a kind of social media for baseball cards. This one doesnt have a link yet but I hope it will soon!',
      href: ''
    },
    sploots: {
      description: 'This is another one that I did with a friend of mine. It too doesnt have a link because we are still working on it, but it is a website for people to sell dogs and pet services that has a really good UI.',
      href: ''
    }
  }
  return (
    <section id="projects" className="py-5">
      <SectionTitle name='projects' />
      <section>
        <Project title='Harpoon Mobile' description={projectDetails.harpoon.description} href={projectDetails.harpoon.href} first={true}/>
        <Project title='Sploots!' description={projectDetails.sploots.description} href={projectDetails.sploots.href} />
        <Project title='Rolodeck' description={projectDetails.rolodeck.description} href={projectDetails.rolodeck.href} />
        <Project title='D&D Tracker' description={projectDetails.dnd.description} href={projectDetails.dnd.href} />
      </section>
    </section>
  )
}

export default Projects
