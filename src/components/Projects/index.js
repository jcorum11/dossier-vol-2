import React from "react";

function Projects() {
  return (
    <section>
      <h1 data-testid="project-title">Projects</h1>
      <div className="container">
        <div className="row">
          <div className="col-sm" id="proj-pic-1"></div>
          <div className="col-sm" id="proj-pic-2"></div>
          <div className="col-sm" id="proj-pic-3"></div>
        </div>

        <div className="row">
          <div className="col-sm" id="proj-pic-4"></div>
          <div className="col-sm" id="proj-pic-5"></div>
          <div className="col-sm" id="proj-pic-6"></div>
        </div>
      </div>
    </section>
  );
}

export default Projects;
