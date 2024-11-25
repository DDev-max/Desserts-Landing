import Image from "next/image";
import styles from "./categories.module.css"
import { RecipesCategoriesAPI } from "../../data/types";


export async function Categories() {

    const categoriesAPI= await fetch("http://localhost:3001/categories")
    const categoriesJson: RecipesCategoriesAPI[]= await categoriesAPI.json()

    

    return (
        <section className={`${styles.categoriesSctn}`}>
            <h2>Choose your sweet destiny!</h2>

            <div  className={`${styles.categoriesSctn_categoriesCont}`}>

                {categoriesJson.map(elmnt=>(
                    <div className={`${styles.categoriesSctn_categoriesCont_category}`} key={elmnt.id}>

                        <Image className={`${styles.categoriesSctn_categoriesCont_img}`} 
                        width={200} height={200} src={elmnt.imgLink} alt={`${elmnt.name} category`}/>
                        
                        <h3 className={`${styles.categoriesSctn_categoriesCont_category_title}`}>{elmnt.name}</h3>


                    </div>
                ))}

            </div>
            

        </section>

    )
}