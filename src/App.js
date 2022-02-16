import { lazy } from 'react'
import styled from 'styled-components';
import { pink, blue } from './variables'

const About = lazy(() => import('./pages/About'))
const Contact = lazy(() => import('./pages/Contact'))
const Projects = lazy(() => import('./pages/Projects'))
const Resume = lazy(() => import('./pages/Resume'))
const Nav = lazy(() => import('./components/Nav'))
const Landing = lazy(() => import('./pages/Landing'))

function App() {
  return (
    <Container>
      <Nav />
      <main>
        <Landing />
        <About />
        <Projects />
        <Resume />
        <Contact />
      </main>
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
width: 100vw
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

export default App;
