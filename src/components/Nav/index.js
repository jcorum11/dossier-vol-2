import React from "react";

function Nav() {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-blue">
      <a className="pt-yellow navbar-brand shadow-green" href="/">
        Jacob Corum
      </a>
      <button
        className="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarNav"
        aria-controls="navbarNav"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarNav">
        <ul className="navbar-nav">
          <li className="nav-item active">
            <a className="nav-link pt-yellow shadow-green" href="#about" data-testid="about">
              About Me
              <span className="sr-only">
                (current)
              </span>
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link pt-yellow shadow-green" href="#projects" data-testid="projects">
              Projects
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link pt-yellow shadow-green" href="#resume" data-testid="resume">
              Resume
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link pt-yellow shadow-green" href="#contact" data-testid="contact">
              Contact Me
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Nav;
