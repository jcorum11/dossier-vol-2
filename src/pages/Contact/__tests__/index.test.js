import React from "react";
import Contact from "..";
import { render, cleanup } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";

afterEach(cleanup);

describe("Contact component", () => {
  it("renders", () => {
    render(<Contact />);
  });

  it("matches snapshot", () => {
    const { asFragment } = render(<Contact />);
    expect(asFragment()).toMatchSnapshot();
  });
});

describe("link is correct", () => {
  const { getByTestId } = render(<Contact />);
  expect(getByTestId("contact")).toHaveTextContent("Contact Me");
});
