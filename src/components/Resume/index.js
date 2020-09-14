import React from "react";

function Resume() {
  return (
    <section className="container">
      <h2 data-testid="resume-title" className="display-1 text-center">Resume</h2>
      <a href={require("../../assets/images/resumeApr2020.pdf")} alt="Jake's resume" className="wrapper">
        <div id="resume-img" className="rounded"></div>
      </a>
    </section>
  );
}

export default Resume;
