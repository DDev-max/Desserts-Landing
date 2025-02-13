import { createContext } from 'react'
import type { ContextCategoriesProps } from '../data/types'

export const CategoriesCntxt = createContext<ContextCategoriesProps | undefined>(undefined)
