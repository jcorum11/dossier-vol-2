import React from "react";
import "./App.css";
import Hero from "./components/Jumbotron";
import About from "./components/About";
import Contact from "./components/Contact";
import Nav from "./components/Nav";
import Projects from "./components/Projects";
import Resume from "./components/Resume";
import "bootstrap/dist/css/bootstrap.css";

function App() {
  return (
    <div>
      <Nav />
      <main className="bg-blue pt-yellow">
        <Hero />
        <About />
        <Projects />
        <Resume />
        <Contact />
      </main>
    </div>
  );
}

export default App;
