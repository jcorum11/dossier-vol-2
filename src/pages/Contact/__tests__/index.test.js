import { Suspense } from "react"
import Contact from ".."
import { render, cleanup } from "@testing-library/react"
import "@testing-library/jest-dom/extend-expect"

afterEach(cleanup)

it("renders", async () => {
  render(
    <Suspense fallback={<div>Loading...</div>}>
      <Contact />
    </Suspense>
  )
})

it("matches snapshot", async () => {
  const { asFragment } = render(<Contact />)
  expect(asFragment()).toMatchSnapshot()
})
