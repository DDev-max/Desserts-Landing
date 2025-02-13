import type { RecipesCategoriesAPI } from '@/data/types'
import { createContext } from 'react'

interface ContextCategoriesProps {
  categories: RecipesCategoriesAPI[]
  isLoading: boolean
}

export const CategoriesCntxt = createContext<ContextCategoriesProps | undefined>(undefined)
