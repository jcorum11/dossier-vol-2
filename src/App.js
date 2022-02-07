import React from "react";
import "./App.css";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Nav from "./components/Nav";
import Projects from "./pages/Projects";
import Resume from "./pages/Resume";
import { useSelector } from 'react-redux'
import { selectSelectedTab } from './store/navigationSlice'
import styled from 'styled-components';

function App() {
  const selectedTab = useSelector(selectSelectedTab)
  return (
    <Container>
      <Nav />
      <main className="pt-yellow">
        {selectedTab === 'about' && <About />}
        {selectedTab === 'projects' && <Projects />}
        {selectedTab === 'resume' && <Resume />}
        {selectedTab === 'contact' && <Contact />}
      </main>
      <footer>
        <FooterContent>Developed by Jake <span role="img" aria-label="peace sign">✌</span></FooterContent>
      </footer>
    </Container>
  );
}

const Container = styled.div`
min-height: 100vh;
`

const FooterContent = styled.h5`
color: darkcyan;
margin: 0;
`

export default App;
