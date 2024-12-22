import { render, screen, } from '@testing-library/react'
import '@testing-library/jest-dom'
import userEvent from '@testing-library/user-event'
import { Header } from './header'
import { ContextCategoriesProps, RecipesCategoriesAPI } from '@/app/data/types'
import { useCategoriesCntxt } from '@/app/Context/useCategoriesCntxt'

const user = userEvent.setup()

const categoriesMock: RecipesCategoriesAPI[] = [
    {
        name: "Ice Creams",
        id: "iceCreams",
        imgLink: "https://images.unsplash.com/photo-1597249536924-b226b1a1259d?q=80&w=1372&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    },
];
const mockContext: ContextCategoriesProps = {
    categories: categoriesMock,
    isLoading: false
};
jest.mock('@/app/Context/useCategoriesCntxt');
(useCategoriesCntxt as jest.Mock).mockReturnValue(mockContext);




it("shows navigation menu when icon is clicked", async () => {

    render(<Header />);
    const menuIcon = screen.getByLabelText("Navigation menu")

    expect(menuIcon).toBeInTheDocument()
    expect(menuIcon).toHaveAttribute("aria-expanded", "false")

    await user.click(menuIcon)

    expect(useCategoriesCntxt).toHaveBeenCalled()
    expect(menuIcon).toHaveAttribute("aria-expanded", "true")
})


it("shows submenu when clicking on submenu", async () => {
    render(<Header />);

    const subMenu = screen.getByRole("link", { expanded: false })

    expect(subMenu).toHaveAttribute("aria-expanded", "false")

    await user.click(subMenu)

    expect(subMenu).toHaveAttribute("aria-expanded", "true")

})
