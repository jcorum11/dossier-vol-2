import React from "react";
import { render, cleanup } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import Projects from "..";

afterEach(cleanup);

describe("Projects component", () => {
  it("renders", () => {
    render(<Projects />);
  });

  it("matches snapshot", () => {
    const { asFragment } = render(<Projects />);
    expect(asFragment()).toMatchSnapshot();
  });
});

describe("inserts header correctly", () => {
  it("says 'Projects' at the top", () => {
    const { getByTestId } = render(<Projects />);
    expect(getByTestId("project-title")).toHaveTextContent("Projects");
  });
});
