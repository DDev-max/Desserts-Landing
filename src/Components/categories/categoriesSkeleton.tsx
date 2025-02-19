import styles from './categories.module.css'
export function CategoriesSkeleton() {
  return (
    <div aria-busy data-testid='categoriesSkeleton' className={styles.categoriesSctn_categoriesCont}>
      <div>
        <div className={styles['categoriesSctn_img--skeleton']} />
        <div className={styles['categoriesSctn_title--skeleton']} />
      </div>
      <div>
        <div className={styles['categoriesSctn_img--skeleton']} />
        <div className={styles['categoriesSctn_title--skeleton']} />
      </div>
      <div>
        <div className={styles['categoriesSctn_img--skeleton']} />
        <div className={styles['categoriesSctn_title--skeleton']} />
      </div>
      <div>
        <div className={styles['categoriesSctn_img--skeleton']} />
        <div className={styles['categoriesSctn_title--skeleton']} />
      </div>
    </div>
  )
}
