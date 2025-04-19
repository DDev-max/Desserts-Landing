'use client'

import { useEffect, useState } from 'react'
import { PAGE_URL, categoriesUrl } from '../data/consts'
import type { RecipesCategoriesAPI } from '../data/types'
import { fetchData } from '../utils/fetchData/fetchData'
import { CategoriesCntxt } from './contextCategories'

export function CntxtProvider({ children }: { children: React.ReactNode }) {
  const [categories, setCategories] = useState<RecipesCategoriesAPI[]>([])
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    async function getFetchData() {
      const data = await fetchData<RecipesCategoriesAPI[]>({ URL: PAGE_URL + categoriesUrl, setIsLoading })

      if (data) setCategories(data)
    }

    getFetchData()
  }, [])

  return <CategoriesCntxt.Provider value={{ categories, isLoading }}>{children}</CategoriesCntxt.Provider>
}
