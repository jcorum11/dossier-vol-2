import About from "./pages/About";
import Contact from "./pages/Contact";
import Nav from "./components/Nav";
import Projects from "./pages/Projects";
import Resume from "./pages/Resume";
import styled from 'styled-components';
import Landing from './pages/Landing'
import { pink, blue } from './variables'

function App() {
  return (
    <Container>
      <Nav />
      <main className="pt-yellow">
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
