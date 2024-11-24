import Image from "next/image";
import styles from "./categories.module.css"
import { RecipesAPI, RecipesCategoriesAPI } from "../data/types";
import { StarsSVG } from "../SVG/StarsSVG";
import { ClockSVG } from "../SVG/ClockSVG";

export async function Categories() {

    const categoriesAPI= await fetch("http://localhost:4000/categories")
    const categoriesJson: RecipesCategoriesAPI[]= await categoriesAPI.json()

    const reciepesAPI= await fetch("http://localhost:4000/recipes")
    const recipesJson: RecipesAPI = await reciepesAPI.json()



    

    return (
        <section className={`${styles.categoriesSctn}`}>
            <h2>Choose your sweet destiny</h2>

            <div  className={`${styles.categoriesSctn_categoriesCont}`}>

                {categoriesJson.map(elmnt=>(
                    <div className={`${styles.categoriesSctn_categoriesCont_category}`} key={elmnt.id}>

                        <Image className={`${styles.categoriesSctn_categoriesCont_img}`} width={200} height={200} src={elmnt.imgLink} alt={`${elmnt.name} category`}/>
                        
                        <h3 className={`${styles.categoriesSctn_categoriesCont_category_title}`}>{elmnt.name}</h3>


                    </div>
                ))}

            </div>
            
            <div className={`${styles.categoriesSctn_recipesCont}`}>
                {recipesJson.AllCategories.cookies.map(elmnt=>{
                    const steps = elmnt.recipe.match(/[^.]+[.]/g)
                    

                    return(
                        <article className={`${styles.categoriesSctn_recipesCont_recipe}`} key={elmnt.id}>

                            <Image className={`${styles.categoriesSctn_recipesCont_recipe_img}`} alt={elmnt.dish} src={elmnt.image} width={200} height={200} />


                            <div className={`${styles.categoriesSctn_recipesCont_recipe_aditionalInfo}`}>
                                <div  
                                className={`${styles.categoriesSctn_recipesCont_recipe_aditionalInfo_starsCont}`}>
                                    <StarsSVG className={`${styles.categoriesSctn_recipesCont_recipe_aditionalInfo_starsCont_star}`} qtty={elmnt.stars}/>
                                </div>

                                    <ClockSVG className={`${styles.categoriesSctn_recipesCont_recipe_aditionalInfo_clock}`}/>
                                    <p>{`${elmnt.minutesOfPreparation} min`}</p>

                            </div>

                            <div className={`${styles.categoriesSctn_recipesCont_recipe_info}`}>
                                <h4>{elmnt.dish}</h4>
                                <ol>
                                    {steps?.map((step, idx)=>(
                                        <li key={idx}>
                                            {step}
                                        </li>
                                    ))}
                                </ol>
                            </div>


                        </article>
                    )
                })}
            </div>

        </section>
    )
}