import { render, screen,  } from '@testing-library/react'
import '@testing-library/jest-dom'
import userEvent from '@testing-library/user-event'
import { MultipleProducts } from './multipleProducts'
import { fetchData } from '../../utils/fetchData/fetchData'

jest.mock('../../utils/fetchData/fetchData')

it.skip("shows recipe when clicking on title", async ()=>{
    const recipeMock = [
        {
        "id": "2",
        "dish": "Cheesecake",
        "recipe": "Preheat the oven to 175°C (350°F). Crush 200g of graham crackers and mix with 1/4 cup of melted butter. Press the mixture into a springform pan to form the crust. In a bowl, beat 3 packages of cream cheese with 3/4 cup of sugar until smooth. Add 3 large eggs, one at a time, and mix in 1 teaspoon of vanilla extract. Pour the batter over the crust and bake for 50-60 minutes, or until the center is slightly jiggly. Cool completely, then refrigerate for at least 4 hours. Serve with fruit topping if desired.",
        "minutesOfPreparation": 90,
        "stars": 4.8,
        "image": "https://img.freepik.com/premium-photo/homemade-cheesecake-with-raspberries-blueberries_1339-38051.jpg?w=360",
        "category": "Baked Desserts"
      }
    ];

    (fetchData as jest.Mock).mockReturnValueOnce(recipeMock)
    const user = userEvent.setup()

    render(<MultipleProducts/>)

    const recipeTitle =  await screen.findByRole("button")
    expect(recipeTitle).toHaveAttribute("aria-expanded", "false")

    await user.click(recipeTitle)

    expect(recipeTitle).toHaveAttribute("aria-expanded", "true")
    expect(fetchData).toHaveBeenCalledTimes(1)


})