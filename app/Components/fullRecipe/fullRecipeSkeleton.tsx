import styles from "./fullRecipe.module.css"

export function FullRecipeSkeleton() {


    return (
        <div className={styles["recipesCont--skeleton"]}>

            <div className={styles["recipesCont_recipe--skeleton"]}/>
            <div className={styles["recipesCont_recipe--skeleton"]}/>

        </div>
    )
}