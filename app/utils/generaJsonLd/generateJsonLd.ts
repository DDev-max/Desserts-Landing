import { ItemList, WithContext, Recipe, ListItem, FAQPage, Question, Answer, HowToStep } from "schema-dts"
import { fetchData } from "../fetchData/fetchData";
import { baseUrl } from "@/app/data/consts";
import { FaqAPI, PageCatgry } from "@/app/data/types";


interface GenerateJsonLdProps {
    from: string
    type: "faq" | "recipeList"
}

export async function generateJsonLd({ type, from }: GenerateJsonLdProps) {

    if (type === "recipeList") {

        const recipesCatgry = await fetchData<PageCatgry>({URL: from});

        const recipes: Recipe[] = []
        recipesCatgry.data.forEach((elmnt) => {

            const steps = elmnt.recipe.match(/[^.]+[.]/g)

            const recipeInst : HowToStep[] = []

            steps?.forEach((elmnt)=>{
                const step:HowToStep ={
                    "@type" : "HowToStep",
                    text : elmnt
                }

                recipeInst.push(step)
            })

            const recipeJson: Recipe = {
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
                nutrition: {
                    "@type" : "NutritionInformation",
                    calories: elmnt.calories
                },
                recipeCuisine: elmnt.cuisine,
                recipeInstructions: recipeInst,
                recipeIngredient: elmnt.ingredients,
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
        recipes.forEach((elmnt, idx) => {
            const itemList: ListItem = {
                "@type": "ListItem",
                "position": idx + 1,
                item: elmnt
            }

            itemsList.push(itemList)

        })


        const fullJson: WithContext<ItemList> = {
            "@context": "https://schema.org",
            "@type": "ItemList",
            itemListElement: itemsList
        }


        

        return JSON.stringify(fullJson)
    }



    if (type === "faq") {
        const faqData = await fetchData<FaqAPI[]>({URL:from});

        const questionAnswer: Question[] = []

        faqData.forEach((elmnt)=>{

            const answer: Answer = {
                "@type": "Answer",
                text: elmnt.answer
            }

            const question: Question = {
                "@type": "Question",
                name: elmnt.question,
                acceptedAnswer: answer
            }
        
            questionAnswer.push(question)

        })

        const faqJsonLd: WithContext<FAQPage> = {
            "@context": "https://schema.org",
            "@type": "FAQPage",
            mainEntity: questionAnswer
        }
        



        return JSON.stringify(faqJsonLd)

    }

    return ""

}