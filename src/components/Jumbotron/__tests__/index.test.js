import React from "react";
import { render, cleanup } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import Hero from "..";

afterEach(cleanup);

describe("Hero component", () => {
  it("renders", () => {
    render(<Hero />);
  });

  it("matches snapshot", () => {
    const { asFragment } = render(<Hero />);
    expect(asFragment()).toMatchSnapshot();
  });
});
