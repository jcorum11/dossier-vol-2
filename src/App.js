import React from "react";
import "./App.css";
import About from "./components/About";
import Contact from "./components/Contact";
import Nav from "./components/Nav";
import Projects from "./components/Projects";
import Resume from "./components/Resume";

function App() {
  return (
    <div>
      <Nav />
      <main>
        <About />
        <Projects />
        <Resume />
      </main>
    </div>
  );
}

export default App;
