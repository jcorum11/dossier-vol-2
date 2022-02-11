import React from "react"
import { render, cleanup } from "@testing-library/react"
import "@testing-library/jest-dom/extend-expect"
import Resume from ".."

afterEach(cleanup)

it("renders", async () => {
  render(<Resume />)
})

it("matches snapshot", async () => {
  const { asFragment } = render(<Resume />)
  expect(asFragment()).toMatchSnapshot()
})
