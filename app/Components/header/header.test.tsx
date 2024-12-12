import { render, screen,  } from '@testing-library/react'
import '@testing-library/jest-dom'
import userEvent from '@testing-library/user-event'
import { Header } from './header'

it("shows navigation menu when icon is clicked", async () => {
    const user = userEvent.setup()

    render(<Header />);
    const menuIcon = screen.getByLabelText("Navigation menu")

    expect(menuIcon).toBeInTheDocument()
    expect(menuIcon).toHaveAttribute("aria-expanded", "false")

    await user.click(menuIcon)

    expect(menuIcon).toHaveAttribute("aria-expanded", "true")
})

