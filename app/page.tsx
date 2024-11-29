import Image from "next/image";
import "./globals.css";
import styles from "./page.module.css"
import { SingleProduct } from "./Components/singleProduct/singleProduct";
import { MultipleProducts } from "./Components/multipleProducts/multipleProducts";
import { CatgrsAndRecipes } from "./Components/CatgrsAndRecipes/catgrsAndRecipes";
import { Categories } from "./Components/categories/categories";
import { FullRecipe } from "./Components/fullRecipe/fullRecipe";

export default function Page() {


    return (
        <main>
            <div className={`${styles.welcomeCont}`}>
                <h1 className={`${styles.welcomeCont_txt}`}>Welcome to your happy place!</h1>

                <Image className={`${styles.welcomeCont_img}`} width={450} height={350} 
                src={"/welcomeImg.png"}
                    alt="Decorative image of desserts."
                />

            </div>

            <CatgrsAndRecipes/>

            {/* <Categories /> */}
            {/* <FullRecipe/> */}

            <SingleProduct/>

            <MultipleProducts/>

            
        </main>
    )
}