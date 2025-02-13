import styles from './categories.module.css'
export function CategoriesSkeleton() {
  return (
    <div
      aria-busy
      data-testid='categoriesSkeleton'
      className={styles.categoriesSctn_categoriesCont}
    >
      <div>
        <div className={styles['categoriesSctn_btn_img--skeleton']} />
        <div className={styles['categoriesSctn_btn_title--skeleton']} />
      </div>
      <div>
        <div className={styles['categoriesSctn_btn_img--skeleton']} />
        <div className={styles['categoriesSctn_btn_title--skeleton']} />
      </div>
      <div>
        <div className={styles['categoriesSctn_btn_img--skeleton']} />
        <div className={styles['categoriesSctn_btn_title--skeleton']} />
      </div>
      <div>
        <div className={styles['categoriesSctn_btn_img--skeleton']} />
        <div className={styles['categoriesSctn_btn_title--skeleton']} />
      </div>
    </div>
  )
}
