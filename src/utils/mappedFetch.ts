import { faqUrl } from '../data/consts'
import type { FaqAPI, PageCatgry } from '../data/types'
import { fetchData } from './fetchData/fetchData'

export async function getFaqData() {
  const faqData = await fetchData<FaqAPI[]>({ URL: faqUrl })

  const mappedFaq = faqData.map(elmt => ({
    id: elmt.id,
    answer: elmt.answer,
    question: elmt.question,
  }))

  return mappedFaq
}

export async function getRecipeData(URL: string) {
  const recipesData = await fetchData<PageCatgry>({ URL })

  const mappedRecipes = {
    first: recipesData.first,
    prev: recipesData.prev,
    next: recipesData.next,
    last: recipesData.last,
    pages: recipesData.pages,
    items: recipesData.items,
    data: recipesData.data.map(elmt => ({
      id: elmt.id,
      dish: elmt.dish,
      description: elmt.description,
      recipe: elmt.recipe,
      minutesOfPreparation: elmt.minutesOfPreparation,
      cookingTimeMinutes: elmt.cookingTimeMinutes,
      stars: elmt.stars,
      recipeYield: elmt.recipeYield,
      keywords: elmt.keywords,
      reviewCount: elmt.reviewCount,
      image: elmt.image,
      category: elmt.category,
      calories: elmt.calories,
      cuisine: elmt.cuisine,
      ingredients: elmt.ingredients,
    })),
  }

  return mappedRecipes
}
