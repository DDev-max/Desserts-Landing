import Image from "next/image"
import { RecipesAPI } from "../data/types"
import styles from "./multipleProducts.module.css"
import { RecipeSteps } from "../recipeSteps"

export async function MultipleProducts() {

    const reciepesAPI= await fetch("http://localhost:3001/recipes")
    const recipesJson: RecipesAPI = await reciepesAPI.json()  /* EL FETCH YA SE HIZO EN 'CATEGORIES' */


/* VER CONSOLAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA */

    return (
        <section >
            <h2 className={`${styles.section_h2}`}>The favorites you can&apos;t miss!</h2>
            <div className={`${styles.section_grid}`} >
                {recipesJson.popular.map(elmnt=>(
                    <article className={`${styles.section_grid_elmnt}`} key={elmnt.id}>
                        <Image  className={`${styles.section_grid_elmnt_img}`} src={elmnt.image} alt={elmnt.dish} width={250} height={170}/>

                        <div  className={`${styles.section_grid_elmnt_recipeCont}`}>
{/* PONERLE POSITION RELATIVA */}
                            <div>
                                <h3  className={`${styles.section_grid_elmnt_recipeCont_title}`}>{`${elmnt.dish}▼`}</h3>

                                <div className={`${styles.section_grid_elmnt_recipeCont_bg}`}>

                                    <RecipeSteps 
                                    olClassName={`${styles.section_grid_elmnt_recipeCont_bg_ol}`}
                                    recipeParagraph={elmnt.recipe}/>

                                </div>

                            </div>

                        </div>
                    </article>
                ))}
            </div>
        </section>
    )
}


