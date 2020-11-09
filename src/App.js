import React, { useState } from "react";
import "./App.css";
import Hero from "./components/Jumbotron";
import About from "./components/About";
import Contact from "./components/Contact";
import Nav from "./components/Nav";
import Projects from "./components/Projects";
import Resume from "./components/Resume";
import {
  FaGithubSquare,
  FaFacebookSquare,
  FaStackOverflow,
} from "react-icons/fa";
import { IconContext } from "react-icons";

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
      <Nav selected={selected} setSelected={setSelected} />
      <main className="pt-yellow">{component}</main>
      <footer>
        {/* <IconContext.Provider
          value={{ className: "icon-red", size: 100 }}
        >
          <div className="wrapper">
            <a href="https://github.com/jcorum11">
            <FaGithubSquare />
            </a>
            <a href="https://www.facebook.com/JacobCorumSteadyJingo">
            <FaFacebookSquare />
            </a>
            <a href="https://stackoverflow.com/users/10397316/jacob-corum">
            <FaStackOverflow />
            </a>
          </div>
        </IconContext.Provider> */}
        <h5>
          Developed by Jake <span role="img" aria-label="peace sign">✌</span>
        </h5>
      </footer>
    </>
  );
}

export default App;
