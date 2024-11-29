// export interface RecipesAPI {
//     AllCategories: AllCategories;
//     popular:       Popular[];
// }

export interface AllCategories {
    cookies:   RecipeElmnt[];
    iceCreams: RecipeElmnt[];
    fried:     RecipeElmnt[];
    fruits:    RecipeElmnt[];
}

export interface FullRecipeProps{
    recipes: PageCatgry | undefined
    setRecipes:  Dispatch<SetStateAction<PageCatgry | undefined>>
}

export interface CategoriesProps{
    setSelectedCatgry: Dispatch<SetStateAction<keyof AllCategories>>
    selectedCatgry: string
}


export interface RecipeElmnt {
    id:                   string;
    dish:                 string;
    recipe:               string;
    minutesOfPreparation: number;
    stars:                number;
    image:                string;
    category:             Categories;
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

export enum Categories {
    Cookies = "Cookies",
    Fried = "fried",
    Fruits = "fruits",
    IceCreams = "Ice Creams",
}

export interface Popular {
    id:                   number;
    dish:                 string;
    recipe:               string;
    minutesOfPreparation: number;
    stars:                number;
    image:                string;
    category:             string;
}


export interface RecipesCategoriesAPI {
    name:    string;
    id: string
    imgLink: string;
}

export interface SVGProps{
    className?: string
    onClick?: ()=> void
    ref?: RefObject<HTMLElement>
}
