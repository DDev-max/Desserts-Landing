import '@testing-library/jest-dom';
import { generateJsonLd } from './generateJsonLd';
import type { Question, Recipe } from 'schema-dts';
import { baseUrl } from '@/data/consts';
import type { FaqAPI, PageCatgry } from '@/data/types';

it('should create a JsonLd recipe', () => {
  const recipeList: PageCatgry = {
    prev: null,
    next: 2,
    pages: 5,
    items: 5,
    data: [
      {
        id: 'choco-cookies',
        dish: 'Chocolate Chip Cookies',
        description: 'Classic chocolate chip cookies.',
        recipe: 'Preheat the oven to 175°C (350°F).',
        minutesOfPreparation: 25,
        cookingTimeMinutes: 10,
        stars: 3.4,
        recipeYield: '5 to 10 cookies',
        keywords: 'chocolate chip cookies',
        reviewCount: 12,
        image: 'https://img.com',
        category: 'Cookies',
        calories: '250 per serving',
        cuisine: 'American',
        ingredients: ['1 cup softened butter'],
      },
    ],
  };

  const jsonLd = generateJsonLd({ from: recipeList, type: 'recipeList' });
  const parsedJson = JSON.parse(jsonLd);
  const recipe = recipeList.data[0];

  expect(parsedJson['@context']).toBe('https://schema.org');
  expect(parsedJson['@type']).toBe('ItemList');
  expect(parsedJson.itemListElement[0].item).toMatchObject<Recipe>({
    '@type': 'Recipe',
    name: recipe.dish,
    image: recipe.image,
    description: recipe.description,
    url: `${baseUrl}/#${recipe.id}`,
    author: {
      '@type': 'Organization',
      name: 'Sweet Bliss Bakery',
    },
    cookTime: `PT${recipe.cookingTimeMinutes}M`,
    prepTime: `PT${recipe.minutesOfPreparation}M`,
    recipeYield: recipe.recipeYield,
    recipeCategory: 'Desserts',
    nutrition: {
      '@type': 'NutritionInformation',
      calories: recipe.calories,
    },
    recipeCuisine: recipe.cuisine,
    recipeInstructions: [
      {
        '@type': 'HowToStep',
        text: recipe.recipe,
      },
    ],
    recipeIngredient: recipe.ingredients,
    keywords: recipe.keywords,
    aggregateRating: {
      '@type': 'AggregateRating',
      ratingValue: recipe.stars,
      reviewCount: recipe.reviewCount,
    },
  });
});

it('should create a JsonLd question', () => {
  const faqPage: FaqAPI[] = [
    {
      id: '022024Q1',
      question: 'Do you accept custom orders?',
      answer:
        'Yes, we do! You can place custom orders for cakes, cupcakes, and other desserts for special occasions like birthdays, weddings, or corporate events.',
    },
  ];

  const jsonLd = generateJsonLd({ from: faqPage, type: 'faq' });

  const parsedJson = JSON.parse(jsonLd);

  expect(parsedJson['@context']).toBe('https://schema.org');
  expect(parsedJson['@type']).toBe('FAQPage');
  expect(parsedJson.mainEntity[0]).toMatchObject<Question>({
    '@type': 'Question',
    name: faqPage[0].question,
    acceptedAnswer: {
      '@type': 'Answer',
      text: faqPage[0].answer,
    },
  });
});

it('should return an empty string if props are wrong', () => {
  const badObj = {};
  // @ts-expect-error (for testing purposes)
  const jsonLd = generateJsonLd({ from: badObj, type: 'badType' });

  expect(jsonLd).toBe('');
});
