import { baseUrl } from '@/data/consts'
import type { GenerateJsonLdProps } from '@/data/types'
import type {
  ItemList,
  WithContext,
  Recipe,
  ListItem,
  FAQPage,
  Question,
  Answer,
  HowToStep,
} from 'schema-dts'

export function generateJsonLd({ type, from }: GenerateJsonLdProps) {
  if (type === 'recipeList' && 'data' in from) {
    const recipes: Recipe[] = []
    from.data.forEach(elmnt => {
      const steps = elmnt.recipe.match(/[^.]+[.]/g)

      const recipeInst: HowToStep[] = []

      steps?.forEach(elmnt => {
        const step: HowToStep = {
          '@type': 'HowToStep',
          text: elmnt,
        }

        recipeInst.push(step)
      })

      const recipeJson: Recipe = {
        '@type': 'Recipe',
        name: elmnt.dish,
        image: elmnt.image,
        description: elmnt.description,
        url: `${baseUrl}/#${elmnt.id}`,
        author: {
          '@type': 'Organization',
          name: 'Sweet Bliss Bakery',
        },
        cookTime: `PT${elmnt.cookingTimeMinutes}M`,
        prepTime: `PT${elmnt.minutesOfPreparation}M`,
        recipeYield: elmnt.recipeYield,
        recipeCategory: 'Desserts',
        nutrition: {
          '@type': 'NutritionInformation',
          calories: elmnt.calories,
        },
        recipeCuisine: elmnt.cuisine,
        recipeInstructions: recipeInst,
        recipeIngredient: elmnt.ingredients,
        keywords: elmnt.keywords,
        aggregateRating: {
          '@type': 'AggregateRating',
          ratingValue: elmnt.stars,
          reviewCount: elmnt.reviewCount,
        },
      }

      recipes.push(recipeJson)
    })

    const itemsList: ListItem[] = []
    recipes.forEach((elmnt, idx) => {
      const itemList: ListItem = {
        '@type': 'ListItem',
        position: idx + 1,
        item: elmnt,
      }

      itemsList.push(itemList)
    })

    const fullJson: WithContext<ItemList> = {
      '@context': 'https://schema.org',
      '@type': 'ItemList',
      itemListElement: itemsList,
    }

    return JSON.stringify(fullJson)
  }

  if (type === 'faq' && Array.isArray(from) && from.every(elmnt => 'question' in elmnt)) {
    const questionAnswer: Question[] = []

    from.forEach(elmnt => {
      const answer: Answer = {
        '@type': 'Answer',
        text: elmnt.answer,
      }

      const question: Question = {
        '@type': 'Question',
        name: elmnt.question,
        acceptedAnswer: answer,
      }

      questionAnswer.push(question)
    })

    const faqJsonLd: WithContext<FAQPage> = {
      '@context': 'https://schema.org',
      '@type': 'FAQPage',
      mainEntity: questionAnswer,
    }

    return JSON.stringify(faqJsonLd)
  }

  return ''
}
