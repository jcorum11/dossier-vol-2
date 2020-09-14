import React, { useState } from "react";
import "./App.css";
import Hero from "./components/Jumbotron";
import About from "./components/About";
import Contact from "./components/Contact";
import Nav from "./components/Nav";
import Projects from "./components/Projects";
import Resume from "./components/Resume";

function App() {
  const [selected, setSelected] = useState("about");
  let component;
  if (selected === "about") {
    component = (
      <>
        <Hero />
        <About />
      </>
    );
  } else if (selected === "projects") {
    component = <Projects />;
  } else if (selected === "resume") {
    component = <Resume />;
  } else {
    component = <Contact />;
  }

  return (
    <>
      <Nav selected={selected} setSelected={setSelected}/>
      <main className="bg-blue pt-yellow">
        {component}
      </main>
    </>
  );
}

export default App;
