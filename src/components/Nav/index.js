import React from "react";

function Nav() {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <a className="navbar-brand" href="/">
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
            <a className="nav-link" href="#about" data-testid="about">
              About Me
              <span className="sr-only">
                (current)
              </span>
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#projects" data-testid="projects">
              Projects
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#resume" data-testid="resume">
              Resume
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#contact" data-testid="contact">
              Contact Me
            </a>
          </li>
        </ul>
      </div>
    </nav>
    // <header>
    //   <h2>
    //     <a data-testid="link" href="/">
    //       Jake Corum
    //     </a>
    //   </h2>
    //   <nav>
    //     <ul>
    //       <li>
    //         <a href="#about" data-testid="about">
    //           About Me
    //         </a>
    //       </li>
    //       <li>
    //         <a href="#projects" data-testid="projects">
    //           Projects
    //         </a>
    //       </li>
    //       <li>
    //         <a href="#resume" data-testid="resume">
    //           Resume
    //         </a>
    //       </li>
    //       <li>
    //         <a href="#contact" data-testid="contact">
    //           Contact Me
    //         </a>
    //       </li>
    //     </ul>
    //   </nav>
    // </header>
  );
}

export default Nav;
