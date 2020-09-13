import React from "react";
import { render, cleanup } from "@testing-library/react";
import "@testing-library/jest-dom";
import Nav from "..";

afterEach(cleanup);

describe("Nav component", () => {
  it("renders", () => {
    render(<Nav />);
  });

  it("matches snapshot", () => {
    const { asFragment } = render(<Nav />);
    expect(asFragment()).toMatchSnapshot();
  });
});

describe("links have correct text", () => {
  it("has correct text in about link", () => {
    const { getByTestId } = render(<Nav />);
    expect(getByTestId("about")).toHaveTextContent("About Me");
  });

  it("has correct text in projects link", () => {
    const { getByTestId } = render(<Nav />);
    expect(getByTestId("projects")).toHaveTextContent("Projects");
  });

  it("has correct text in resume link", () => {
    const { getByTestId } = render(<Nav />);
    expect(getByTestId("resume")).toHaveTextContent("Resume");
  });

  it("has correct text in contact link", () => {
    const { getByTestId } = render(<Nav />);
    expect(getByTestId("contact")).toHaveTextContent("Contact Me");
  });
});
