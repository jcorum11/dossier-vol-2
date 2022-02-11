import React from "react";
import { render, cleanup } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import Projects from "..";

afterEach(cleanup);

it("renders", async () => {
  render(<Projects />);
});

it("matches snapshot", async () => {
  const { asFragment } = render(<Projects />);
  expect(asFragment()).toMatchSnapshot();
});

  // data validation
