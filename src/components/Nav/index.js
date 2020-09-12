import React from "react";

function Nav() {
  return (
    <header>
      <h2>
        <a data-testid="link" href="/">
          Jake Corum
        </a>
      </h2>
      <nav>
        <ul>
          <li>
            <a href="#about" data-testid="about">
              About Me
            </a>
          </li>
          <li>
            <a href="#projects" data-testid="projects">
              Projects
            </a>
          </li>
          <li>
            <a href="#resume" data-testid="resume">
              Resume
            </a>
          </li>
          <li>
            <a href="#contact" data-testid="contact">
              Contact Me
            </a>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Nav;
