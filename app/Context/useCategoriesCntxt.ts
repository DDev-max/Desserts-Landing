import { useContext } from "react";
import {CategoriesCntxt} from "./contextCategories"
import { NoProviderError } from "./NoProviderError";

export function useCategoriesCntxt() {

    try {
        const context = useContext(CategoriesCntxt);

        if (context === undefined) {
            throw new NoProviderError("'CategoriesCntxt' should be used inside of 'CntxtProvider'");
        }

        return context;

    } catch (error) {
        if (error instanceof NoProviderError) {
            console.error(error)
        }

        return
    }

}