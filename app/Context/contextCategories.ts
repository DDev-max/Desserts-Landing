import { createContext } from "react";
import { ContextCategoriesProps } from "../data/types";


export const CategoriesCntxt = createContext<ContextCategoriesProps | undefined>(undefined)
