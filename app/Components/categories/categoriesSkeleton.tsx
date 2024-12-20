import styles from "./categories.module.css"


export function CategoriesSkeleton() {


    return (
        <div className={styles.categoriesSctn_categoriesCont}>
            <div className={styles["categoriesSctn_btn--selected--skeleton"]}/>
            <div className={styles["categoriesSctn_btn_img--skeleton"]}/>
            <div  className={styles["categoriesSctn_btn_img--skeleton"]}/>
            <div className={styles["categoriesSctn_btn_img--skeleton"]}/>
        </div>
    )
}