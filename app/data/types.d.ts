export interface AllCategories {
    cookies:   RecipeElmnt[];
    iceCreams: RecipeElmnt[];
    fried:     RecipeElmnt[];
    fruits:    RecipeElmnt[];
}



export interface FullRecipeProps{
    category: string
    page: string
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


export interface PaginationBtnsProps{
    buttonsQtty: number
    currentPage: number
    classNameBtn?: string
    classNameCont?: string
    selectedBtnClassName: string

}

export interface ToggleMenuProps{
    e: MouseEvent
    menuIcon: RefObject<HTMLElement>
}


export interface CreateUrlProps{
    paramsAndValueObj: Record<string, string | number>
    searchParams: ReadonlyURLSearchParams
    pathName: string
    replace?: (href: string, options?: NavigateOptions) => void
    hash?: string
}

export interface StarsSVGProps {
    qtty: number
    className?: string
}


export interface DefaultColorProps{
    idx: number
    qtty: number
}

export interface ResetColorsProps{
    setColor:  Dispatch<SetStateAction<any[]>>
    isRated: MutableRefObject<boolean>
}

export interface OverwriteColorProps{
    idx: number
    color: string[]
}

export interface ColorStarProps{
    idx: number
    setColor:  Dispatch<SetStateAction<any[]>>
    isRated: MutableRefObject<boolean>
    color: string[]
}