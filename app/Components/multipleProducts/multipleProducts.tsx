import Image from "next/image"
import { RecipesAPI } from "@/app/data/types"
import styles from "./multipleProducts.module.css"
import { RecipeSteps } from "@/app/Components/recipeSteps/recipeSteps"
import { fetchData } from "@/app/utils/fetchData/fetchData"
import { recipesUrl } from "@/app/data/consts"

export async function MultipleProducts() {

    const recipes = await fetchData<RecipesAPI>(recipesUrl)


    return (
        <section >
            <h2 className={`${styles.section_h2}`}>The favorites you can&apos;t miss!</h2>
            <div className={`${styles.section_grid}`} >
                {recipes?.popular.map(elmnt=>(
                    <article className={`${styles.section_grid_elmnt}`} key={elmnt.id}>
                        <Image  className={`${styles.section_grid_elmnt_img}`} src={elmnt.image} alt={elmnt.dish} width={250} height={170}/>

                        <div  className={`${styles.section_grid_elmnt_recipeCont}`}>
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


