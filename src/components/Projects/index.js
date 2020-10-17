import React from "react";

function Projects() {
  return (
    <section>
      <h1 data-testid="project-title" className="display-1 text-center">
        Projects
      </h1>
      <div className="container">
        <div className="row">
          <a
            className="col-sm rounded parent"
            href="https://johnnielsen1221.github.io/dd-initiative-tracker/"
          >
            <div id="proj-pic-1" className="rounded child">
              <span>D&D Initiative Tracker</span>
            </div>
          </a>
          <a
            className="col-sm rounded parent"
            href="https://obscure-reef-91673.herokuapp.com/"
          >
            <div id="proj-pic-2" className="rounded child">
              <span>Swap-Squad</span>
            </div>
          </a>
          <a
            className="col-sm rounded parent"
            href="https://rolodeck.herokuapp.com/"
          >
            <div id="proj-pic-rolodeck" className="rounded child">
              <span>RoloDeck</span>
            </div>
          </a>
        </div>
        <div className="row">
          <a
            className="col-sm rounded parent"
            href="https://jcorum11.github.io/run-buddy/"
          >
            <div id="proj-pic-3" className="rounded child">
              <span>Run Buddy</span>
            </div>
          </a>
          <a
            className="col-sm rounded parent"
            href="https://github.com/jcorum11/README.zing"
          >
            <div id="proj-pic-4" className="rounded child">
              <span>README.zing</span>
            </div>
          </a>
          <a
            className="col-sm rounded parent"
            href="https://jcorum11.github.io/test-rabbit/"
          >
            <div id="proj-pic-5" className="rounded child">
              <span>Test Rabbit</span>
            </div>
          </a>
        </div>
      </div>
    </section>
  );
}

export default Projects;
