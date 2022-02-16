import { Suspense } from "react"
import { render, cleanup } from "@testing-library/react"
import "@testing-library/jest-dom/extend-expect"
import About from ".."

afterEach(cleanup)

it("renders", async () => {
  render(
    <Suspense fallback={<div>Loading...</div>}>
      <About />
    </Suspense>
  )
})

it("matches snapshot", async () => {
  const { asFragment } = render(<About />)
  expect(asFragment()).toMatchSnapshot()
})
