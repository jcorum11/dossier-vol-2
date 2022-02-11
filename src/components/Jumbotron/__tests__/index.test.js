import React from "react"
import { render, cleanup } from "@testing-library/react"
import "@testing-library/jest-dom/extend-expect"
import Hero from ".."

afterEach(cleanup)

it("renders", async () => {
  render(<Hero />)
})

it("matches snapshot", async () => {
  const { asFragment } = render(<Hero />)
  expect(asFragment()).toMatchSnapshot()
})
