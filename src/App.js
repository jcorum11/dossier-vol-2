import About from "./pages/About";
import Contact from "./pages/Contact";
import Nav from "./components/Nav";
import Projects from "./pages/Projects";
import Resume from "./pages/Resume";
import styled from 'styled-components';
import Landing from './pages/Landing'
import { pink, blue } from './variables'
import { useEffect, useRef, useState } from 'react'

function App() {
  const [currentSectionOption, setCurrentSectionOption] = useState('landing')
  const sectionOptions = ['landing', 'about', 'projects', 'resume', 'contact']
  let sectionOptionIndex = 0
  const currentSection = useRef(null)
  useEffect(() => {
    window.addEventListener('scroll', handleScroll)
  }, [])
  const handleScroll = () => {
    if (currentSectionOption === currentSectionOption[currentSectionOption.length - 1]) {
      sectionOptionIndex = 0
      setCurrentSectionOption('landing')
    } else {
      sectionOptionIndex++
      setCurrentSectionOption(sectionOptions[sectionOptionIndex])
    }
    currentSection.current.scrollIntoView({behavior: 'smooth'})
  }
  return (
    <Container>
      <Nav />
      <Body>
        <Landing />
        <About currentSection={currentSection} currentSectionOption={currentSectionOption} />
        <Projects />
        <Resume />
        <Contact />
      </Body>
      <footer>
        <FooterContent>
          <Paragraph>Designed by Kyanna Corum <span role='img' aria-label='heart'>❤️ </span></Paragraph>
          <Paragraph>Developed by Jake <span role="img" aria-label="peace sign">✌</span></Paragraph>
        </FooterContent>
      </footer>
    </Container>
  );
}

const Container = styled.div`
min-height: 100vh;
`

const FooterContent = styled.div`
color: ${pink};
text-align: center;
background-color: ${blue};
padding: 1rem;
`

const Paragraph = styled.p`
margin: 0;
`

const Body = styled.section`
scroll-snap-type: y mandatory;
`

export default App;
