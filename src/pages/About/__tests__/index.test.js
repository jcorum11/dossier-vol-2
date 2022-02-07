import React from "react";
import { render, cleanup } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import About from "..";

afterEach(cleanup);

describe("About", () => {
  it("renders", () => {
    render(<About />);
  });

  it("matches snapshot", () => {
    const { asFragment } = render(<About />);
    expect(asFragment()).toMatchSnapshot();
  });
  
  it("inserts text into link", () => {
    const { getByTestId } = render(<About />);
    expect(getByTestId("about")).toHaveTextContent("About Me");
  });
});
