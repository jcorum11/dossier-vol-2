import React from "react"
import { render, cleanup, screen } from "@testing-library/react"
import userEvent from '@testing-library/user-event'
import Nav from ".."

afterEach(cleanup)

it("renders", async () => {
  render(<Nav />)
})

it("matches snapshot", async () => {
  const { asFragment } = render(<Nav />)
  expect(asFragment()).toMatchSnapshot()
})

it('renders times svg and buttons when hamburger svg is clicked and returns to previous state when times svg is clicked', async () => {
  render(<Nav />)
  userEvent.click(screen.queryByTestId('nav-button-hamburger'))
  expect(screen.queryByTestId('nav-button-times')).toBeInTheDocument()
  expect(screen.queryByRole('link', { name: 'About Me' })).toBeInTheDocument()
  expect(screen.queryByRole('link', { name: 'About Me' })).toHaveAttribute('href', '#about')
  expect(screen.queryByRole('link', { name: 'Projects' })).toBeInTheDocument()
  expect(screen.queryByRole('link', { name: 'Projects' })).toHaveAttribute('href', '#projects')
  expect(screen.queryByRole('link', { name: 'Resume' })).toBeInTheDocument()
  expect(screen.queryByRole('link', { name: 'Resume' })).toHaveAttribute('href', '#resume')
  expect(screen.queryByRole('link', { name: 'Contact Me' })).toBeInTheDocument()
  expect(screen.queryByRole('link', { name: 'Contact Me' })).toHaveAttribute('href', '#contact')
  expect(screen.queryByTestId('nav-button-hamburger')).not.toBeInTheDocument()
  userEvent.click(screen.queryByTestId('nav-button-times'))
  expect(screen.getByTestId('nav-button-hamburger')).toBeInTheDocument()
  expect(screen.queryByRole('link', { name: 'About Me' })).not.toBeInTheDocument()
  expect(screen.queryByRole('link', { name: 'Projects' })).not.toBeInTheDocument()
  expect(screen.queryByRole('link', { name: 'Resume' })).not.toBeInTheDocument()
  expect(screen.queryByRole('link', { name: 'Contact Me' })).not.toBeInTheDocument()
  expect(screen.queryByTestId('nav-button-times')).not.toBeInTheDocument()
})
