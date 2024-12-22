import { render, screen } from "@testing-library/react";
import '@testing-library/jest-dom'
import { PageCatgry } from "@/app/data/types";
import { FullRecipe } from "./fullRecipe";


it("should render full recipe from fetch", async ()=>{
    const recipeMock:PageCatgry={
        first: 1,
        prev: null,
        next: 2,
        last: 5,
        pages: 5,
        items: 5,
        data: [
          {
            id: "choco-cookies",
            dish: "Chocolate Chip Cookies",
            description: "Classic chocolate chip cookies with a soft and chewy texture, packed with semi-sweet chocolate chips for a perfect treat.",
            recipe: "Preheat the oven to 175°C (350°F). Mix it.",
            minutesOfPreparation: 25,
            cookingTimeMinutes: 10,
            stars: 3.3,
            recipeYield: "5 to 10 cookies",
            keywords: "chocolate chip cookies, easy cookie recipe, homemade cookies, baking recipes",
            reviewCount: 12,
            image: "https://plus.unsplash.com/premium_photo-1670895802114-dc3bc13b5963?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
            category: "Cookies",
            calories: "250 per serving",
            cuisine: "American",
            ingredients: [
              "1 cup softened butter",
              "1 cup brown sugar"
            ]
          }
        ]
    };


    render( await FullRecipe({category:"cookies", page:"1",recipes: recipeMock}))

    const recipe = recipeMock.data[0]

    const recipeImg = await screen.findByAltText(recipe.dish);
    const starsContainer = await screen.findByLabelText(`Rating: ${recipe.stars} of 5.`);
    const prepMinutes = await screen.findByText(`${recipe.minutesOfPreparation} min`);
    const recipeName = await screen.findByText(recipe.dish)
    const recipeSteps = await screen.findByRole("list")

    expect(recipeImg).toBeInTheDocument()
    expect(starsContainer).toBeInTheDocument()
    expect(prepMinutes).toBeInTheDocument()
    expect(recipeName).toBeInTheDocument()
    expect(recipeSteps).toBeInTheDocument()

})