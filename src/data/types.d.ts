import type { AppRouterInstance } from 'next/dist/shared/lib/app-router-context.shared-runtime'

export interface AllCategories {
  cookies: RecipeElmnt[]
  iceCreams: RecipeElmnt[]
  fried: RecipeElmnt[]
  fruits: RecipeElmnt[]
}

export interface FullRecipeProps {
  category: string
  page: string
  recipes: PageCatgry
}

export interface RecipeElmnt {
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
  category: Categories
  calories: string
  cuisine: string
  ingredients: string[]
}

export interface SponsorApi {
  id: number
  dish: string
  image: string
  url: string
}

export interface PageCatgry {
  first: number
  prev: null | number
  next: number
  last: number
  pages: number
  items: number
  data: RecipeElmnt[]
}

export interface Popular {
  id: number
  dish: string
  recipe: string
  minutesOfPreparation: number
  stars: number
  image: string
  category: string
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

export interface PaginationBtnsProps {
  buttonsQtty: number
  currentPage: number
  classNameBtn?: string
  classNameCont?: string
  selectedBtnClassName: string
}

export interface CreateUrlProps {
  paramsAndValueObj: Record<string, string | number>
  searchParams: ReadonlyURLSearchParams
  pathName: string
  router?: AppRouterInstance
  hash?: string
}

export interface StarsSVGProps {
  qtty: number
  className?: string
}

export interface DefaultColorProps {
  idx: number
  qtty: number
}

export interface ResetColorsProps {
  setColor: Dispatch<SetStateAction<string[]>>
  isRated: MutableRefObject<boolean>
}

export interface OverwriteColorProps {
  idx: number
  color: string[]
}

export interface ColorStarProps {
  idx: number
  setColor: Dispatch<SetStateAction<string[]>>
  isRated: MutableRefObject<boolean>
  color: string[]
}

export interface CategoriesProps {
  currentCategory: string
}

export interface FocustabProps {
  e: React.KeyboardEvent<HTMLDivElement>
  setSelectedBtn: Dispatch<SetStateAction<number>>
  tabsBtnsRef: MutableRefObject<HTMLAnchorElement[]>
}

export interface GenerateJsonLdProps {
  from: FaqAPI[] | PageCatgry
  type: 'faq' | 'recipeList'
}

export interface ToggleMenuProps {
  setMenuVisible: Dispatch<SetStateAction<boolean[]>>
  menuIdx: number
}

export interface HandleEnterLeaveProps {
  enter: boolean
  isMouse: MutableRefObject<boolean>
  setMenuVisible: Dispatch<SetStateAction<boolean[]>>
  menuVisible: boolean[]
}

export interface RecipeStepsProps {
  recipeParagraph: string
  olClassName?: string
  liClassName?: string
}

export interface FetchDataProps {
  URL: string
  setIsLoading?: Dispatch<SetStateAction<boolean>>
}

export interface ContextCategoriesProps {
  categories: RecipesCategoriesAPI[]
  isLoading: boolean
}

export interface FaqProps {
  data: FaqAPI[]
}
