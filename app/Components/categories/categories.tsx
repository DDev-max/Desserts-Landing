import Image from "next/image";
import styles from "./categories.module.css"
import { RecipesCategoriesAPI } from "../../data/types";
import { fetchData } from "@/app/utils/fetchData/fetchData";
import { categoriesUrl } from "@/app/data/consts";


export async function Categories() {

    const categories = await fetchData<RecipesCategoriesAPI[]>(categoriesUrl)
    

    return (
        <section className={`${styles.categoriesSctn}`}>
            <h2>Choose your sweet destiny!</h2>

            <div  className={`${styles.categoriesSctn_categoriesCont}`}>

                {categories?.map(elmnt=>(
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