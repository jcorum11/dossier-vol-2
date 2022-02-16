import { Suspense } from "react"
import { render, cleanup, screen, waitFor } from "@testing-library/react"
import userEvent from '@testing-library/user-event'
import Nav from '..'
afterEach(cleanup)

it("renders", async () => {
  render(
    <Suspense fallback={<div>loading...</div>}>
      <Nav />
    </Suspense>
  )
})

it("matches snapshot", async () => {
  const { asFragment } = render(<Nav />)
  expect(asFragment()).toMatchSnapshot()
})

it('renders times svg and buttons when hamburger svg is clicked and returns to previous state when times svg is clicked', async () => {
  const user = userEvent.setup()
  render(
    <Suspense fallback={<div>loading...</div>}>
      <Nav />
    </Suspense>
  )
  await user.click(screen.queryByTestId('nav-button-hamburger'))
  await waitFor(() => expect(screen.queryByTestId('nav-button-times')).toBeInTheDocument())
  await waitFor(() => expect(screen.queryByRole('link', { name: 'About Me' })).toBeInTheDocument())
  await waitFor(() => expect(screen.queryByRole('link', { name: 'About Me' })).toHaveAttribute('href', '#about'))
  await waitFor(() => expect(screen.queryByRole('link', { name: 'Projects' })).toBeInTheDocument())
  await waitFor(() => expect(screen.queryByRole('link', { name: 'Projects' })).toHaveAttribute('href', '#projects'))
  await waitFor(() => expect(screen.queryByRole('link', { name: 'Resume' })).toBeInTheDocument())
  await waitFor(() => expect(screen.queryByRole('link', { name: 'Resume' })).toHaveAttribute('href', '#resume'))
  await waitFor(() => expect(screen.queryByRole('link', { name: 'Contact Me' })).toBeInTheDocument())
  await waitFor(() => expect(screen.queryByRole('link', { name: 'Contact Me' })).toHaveAttribute('href', '#contact'))
  await waitFor(() => expect(screen.queryByTestId('nav-button-hamburger')).not.toBeInTheDocument())
  await user.click(screen.queryByTestId('nav-button-times'))
  await waitFor(() => expect(screen.getByTestId('nav-button-hamburger')).toBeInTheDocument())
  await waitFor(() => expect(screen.queryByRole('link', { name: 'About Me' })).not.toBeInTheDocument())
  await waitFor(() => expect(screen.queryByRole('link', { name: 'Projects' })).not.toBeInTheDocument())
  await waitFor(() => expect(screen.queryByRole('link', { name: 'Resume' })).not.toBeInTheDocument())
  await waitFor(() => expect(screen.queryByRole('link', { name: 'Contact Me' })).not.toBeInTheDocument())
  await waitFor(() => expect(screen.queryByTestId('nav-button-times')).not.toBeInTheDocument())
})
