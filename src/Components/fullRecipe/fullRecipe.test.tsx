import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import { FullRecipe } from './fullRecipe';
import type { PageCatgry } from '@/data/types';

it('should render full recipe from fetch', async () => {
  const recipeMock: PageCatgry = {
    prev: null,
    next: 2,
    pages: 5,
    items: 5,
    data: [
      {
        id: 'choco-cookies',
        dish: 'Chocolate Chip Cookies',
        description: 'Classic chocolate chip cookies.',
        recipe: 'Preheat the oven to 175°C (350°F). Mix it.',
        minutesOfPreparation: 25,
        cookingTimeMinutes: 10,
        stars: 3.3,
        recipeYield: '5 to 10 cookies',
        keywords: 'chocolate chip cookies, easy cookie recipe, homemade cookies, baking recipes',
        reviewCount: 12,
        image: 'https://img.com',
        category: 'Cookies',
        calories: '250 per serving',
        cuisine: 'American',
        ingredients: ['1 cup softened butter', '1 cup brown sugar'],
      },
    ],
  };

  render(await FullRecipe({ category: 'cookies', page: '1', recipes: recipeMock }));

  const recipe = recipeMock.data[0];

  const recipeImg = await screen.findByAltText(recipe.dish);
  const starsContainer = await screen.findByLabelText(`Rating: ${recipe.stars} of 5.`);
  const prepMinutes = await screen.findByText(`${recipe.minutesOfPreparation} min`);
  const recipeName = await screen.findByText(recipe.dish);
  const recipeSteps = await screen.findByRole('list');

  expect(recipeImg).toBeInTheDocument();
  expect(starsContainer).toBeInTheDocument();
  expect(prepMinutes).toBeInTheDocument();
  expect(recipeName).toBeInTheDocument();
  expect(recipeSteps).toBeInTheDocument();
});
