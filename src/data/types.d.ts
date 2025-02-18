export type recipeNames = 'cookies' | 'iceCreams' | 'fried' | 'fruits'

interface RecipeElmnt {
  id: string
  dish: string
  description: string
  recipe: string
  minutesOfPreparation: number
  cookingTimeMinutes: number
  stars: number
  recipeYield: string
  keywords: string
  reviewCount: number
  image: string
  category: string
  calories?: string
  cuisine?: string
  ingredients?: string[]
}

export interface PageCatgry {
  prev: null | number
  next: null | number
  pages: number
  items: number
  data: RecipeElmnt[]
}

export interface RecipesCategoriesAPI {
  name: string
  id: string
  imgLink: string
}

export interface FaqAPI {
  id: string
  question: string
  answer: string
}

export interface SVGProps {
  className?: string
}
