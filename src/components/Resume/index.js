import React from "react";

function Resume() {
  return (
    <section id="resume" className="py-5 text-center">
      <div className="container">
        <h2 data-testid="resume-title" className="display-1 text-center">
          <span>Resume</span>
        </h2>
        <a
          href={require("../../assets/images/jacob-corum-resume-oct-2020.pdf")}
          alt="Jake's resume"
          className="wrapper"
        >
          <div id="resume-img" className="box-shadow-purple border-green"></div>
        </a>
      </div>
    </section>
  );
}

export default Resume;
