import Image from "next/image"
import { StarsSVG } from "../../SVG/StarsSVG"
import styles from "./fullRecipe.module.css"
import { FullRecipeProps, PageCatgry } from "../../data/types"
import { ClockSVG } from "../../SVG/ClockSVG"
import { RecipeSteps } from "../recipeSteps/recipeSteps"
import { fetchData } from "@/app/utils/fetchData/fetchData"
import { useEffect } from "react"
import { usePathname, useSearchParams } from "next/navigation"
import Link from "next/link"
import { createUrl } from "@/app/utils/createUrl/createUrl"

export function FullRecipe({ recipes, setRecipes }: FullRecipeProps) {

    const searchParams = useSearchParams()
    const finalCategory = searchParams.get("category") || "cookies"
    const page = Number(searchParams.get("page")) || 1
    const pathName = usePathname()




    useEffect(() => {
        async function recipesFetch() {
            const fetchedRecipes = await fetchData<PageCatgry>(`http://localhost:3001/${finalCategory}?_page=${page}&_per_page=2`);

            console.log(fetchedRecipes);



            setRecipes(fetchedRecipes)

        }

        recipesFetch()

    }, [finalCategory, page, setRecipes]);



    return (
        <div className={`${styles.recipesCont}`}>
            {recipes?.data.map(elmnt => {

                return (
                    <article className={`${styles.recipesCont_recipe}`} key={elmnt.id}>

                        <Image className={`${styles.recipesCont_recipe_img}`} alt={elmnt.dish} src={elmnt.image} width={200} height={200} />


                        <div className={`${styles.recipesCont_recipe_aditionalInfo}`}>
                            <div
                                className={`${styles.recipesCont_recipe_aditionalInfo_starsCont}`}>
                                <StarsSVG className={`${styles.recipesCont_recipe_aditionalInfo_starsCont_star}`} qtty={elmnt.stars} />
                            </div>

                            <ClockSVG className={`${styles.recipesCont_recipe_aditionalInfo_clock}`} />
                            <p>{`${elmnt.minutesOfPreparation} min`}</p>

                        </div>

                        <div className={`${styles.recipesCont_recipe_info}`}>

                            <h4>{elmnt.dish}</h4>
                            <RecipeSteps recipeParagraph={elmnt.recipe} />

                        </div>


                    </article>
                )
            })}



            {
                Array(recipes?.pages).fill("_").map((_, idx) => (
                    <Link key={idx} href={createUrl({paramsAndValueObj: {page: idx + 1}, pathName,searchParams, })}>
                        {idx + 1}
                    </Link>
                ))

            }


        </div>

    )
}