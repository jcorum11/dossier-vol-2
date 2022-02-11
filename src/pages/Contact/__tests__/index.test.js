import React from "react"
import Contact from ".."
import { render, cleanup } from "@testing-library/react"
import "@testing-library/jest-dom/extend-expect"

afterEach(cleanup)

it("renders", async () => {
  render(<Contact />)
})

it("matches snapshot", async () => {
  const { asFragment } = render(<Contact />)
  expect(asFragment()).toMatchSnapshot()
})
