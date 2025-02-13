import styles from './multipleProducts.module.css'

export function MultipleProductsSkeleton() {
  return (
    <>
      <div aria-busy className={styles['section_h2--skeleton']} />

      <div className={styles.section_grid}>
        <div className={styles['section_grid_elmnt--skeleton']} />
        <div className={styles['section_grid_elmnt--skeleton']} />
        <div className={styles['section_grid_elmnt--skeleton']} />
        <div className={styles['section_grid_elmnt--skeleton']} />
      </div>
    </>
  )
}
