import { recipes } from '@/data/consts'
import type { PageCatgry, recipeNames } from '@/data/types'
import type { NextRequest } from 'next/server'
import { NextResponse } from 'next/server'

interface GetRecipeProps {
  params: Promise<{
    recipeName: recipeNames
  }>
}

export async function GET(request: NextRequest, { params }: GetRecipeProps) {
  const name = (await params).recipeName
  const searchParams = request.nextUrl.searchParams
  const currentPage = Number(searchParams.get('page')) || 1
  const perPage = Number(searchParams.get('per_page')) || recipes[name].length

  const pages = Math.ceil(recipes[name].length / perPage)
  const paginatedRecipe: PageCatgry = {
    prev: currentPage - 1 > 0 ? currentPage : null,
    next: currentPage >= pages ? null : currentPage + 1,
    pages,
    items: recipes[name].length,
    data: recipes[name].slice(perPage * (currentPage - 1), perPage * (currentPage - 1) + perPage),
  }

  if (name in recipes) {
    return NextResponse.json(paginatedRecipe)
  } else {
    return NextResponse.json('Invalid recipe name')
  }
}
