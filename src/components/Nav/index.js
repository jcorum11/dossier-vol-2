import React from "react";

function Nav(props) {
  const { selected, setSelected } = props;
  return (
    <nav className="navbar navbar-expand-sm navbar-light">
      <a className="pt-yellow navbar-brand shadow-green" href="https://jcorum11.github.io/dossier-vol-2/#about">
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
        <span className="navbar-toggler-icon rounded"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarNav">
        <ul className="navbar-nav">
          <li className={`nav-item active rounded ${selected === "about" && "navActive"}`}>
            <a
              className="nav-link pt-yellow shadow-green pl-2"
              href="#about"
              data-testid="about"
              onClick={() => setSelected("about")}
            >
              About Me
              <span className="sr-only">(current)</span>
            </a>
          </li>
          <li className={`nav-item rounded ${selected === "projects" && "navActive"}`}>
            <a
              className="nav-link pt-yellow shadow-green pl-2"
              href="#projects"
              data-testid="projects"
              onClick={() => setSelected("projects")}
            >
              Projects
            </a>
          </li>
          <li className={`nav-item rounded ${selected === "resume" && "navActive"}`}>
            <a
              className="nav-link pt-yellow shadow-green pl-2"
              href="#resume"
              data-testid="resume"
              onClick={() => setSelected("resume")}
            >
              Resume
            </a>
          </li>
          <li className={`nav-item rounded ${selected === "contact" && "navActive"}`}>
            <a
              className="nav-link pt-yellow shadow-green pl-2"
              href="#contact"
              data-testid="contact"
              onClick={() => setSelected("contact")}
            >
              Contact Me
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Nav;
