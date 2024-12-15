import { ItemList, WithContext, Recipe, ListItem } from "schema-dts"
import { fetchData } from "../fetchData/fetchData";
import { baseUrl } from "@/app/data/consts";
import { PageCatgry } from "@/app/data/types";
 

export interface GenerateJsonLdProps{
    category: string
    page: string
}

export async function generateJsonLd({category,page}:GenerateJsonLdProps){

    const recipesCatgry = await fetchData<PageCatgry>(`http://localhost:3001/${category}?_page=${page}&_per_page=2`);
    
    const recipes: Recipe[] = []
    recipesCatgry.data.forEach((elmnt)=>{

        const recipeJson:Recipe = {
            "@type": "Recipe",
            name: elmnt.dish,
            image: elmnt.image,
            description: elmnt.description,
            url: `${baseUrl}/#${elmnt.id}`,
            author: {
                "@type": "Organization",
                name: "Sweet Bliss Bakery"
            },
            cookTime: `PT${elmnt.cookingTimeMinutes}M`,
            prepTime: `PT${elmnt.minutesOfPreparation}M`,
            recipeYield: elmnt.recipeYield,
            recipeCategory: "Desserts",
            keywords: elmnt.keywords,
            aggregateRating: {
                "@type": "AggregateRating",
                ratingValue: elmnt.stars,
                reviewCount: elmnt.reviewCount
            }
        }

        recipes.push(recipeJson)
    })


    const itemsList: ListItem[] = []
    recipes.forEach((elmnt, idx)=>{
        const itemList:ListItem = {
            "@type": "ListItem",
            "position": idx,
            item: elmnt
        }

        itemsList.push(itemList)
    
    })


    const fullJson: WithContext<ItemList> = {
        "@context" : "https://schema.org",
        "@type" : "ItemList",
        itemListElement: itemsList
    }


    return JSON.stringify(fullJson)
}