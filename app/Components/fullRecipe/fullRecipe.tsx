import Image from "next/image"
import { StarsSVG } from "../../SVG/StarsSVG"
import styles from "./fullRecipe.module.css"
import { RecipesAPI } from "../../data/types"
import { ClockSVG } from "../../SVG/ClockSVG"
import { RecipeSteps } from "../recipeSteps/recipeSteps"

export async function FullRecipe() {

    const reciepesAPI= await fetch("http://localhost:3001/recipes")
    const recipesJson: RecipesAPI = await reciepesAPI.json()

    return (
        <div className={`${styles.recipesCont}`}>
        {recipesJson.AllCategories.cookies.map(elmnt=>{

            return(
                <article className={`${styles.recipesCont_recipe}`} key={elmnt.id}>

                    <Image className={`${styles.recipesCont_recipe_img}`} alt={elmnt.dish} src={elmnt.image} width={200} height={200} />


                    <div className={`${styles.recipesCont_recipe_aditionalInfo}`}>
                        <div  
                        className={`${styles.recipesCont_recipe_aditionalInfo_starsCont}`}>
                            <StarsSVG className={`${styles.recipesCont_recipe_aditionalInfo_starsCont_star}`} qtty={elmnt.stars}/>
                        </div>

                            <ClockSVG className={`${styles.recipesCont_recipe_aditionalInfo_clock}`}/>
                            <p>{`${elmnt.minutesOfPreparation} min`}</p>

                    </div>

                    <div className={`${styles.recipesCont_recipe_info}`}>

                        <h4>{elmnt.dish}</h4>
                        <RecipeSteps recipeParagraph={elmnt.recipe}/>
                        
                    </div>


                </article>
            )
        })}
    </div>
    )
}