import styles from './sponsorRecipes.module.css'

export function SponsorRecipesSkeleton() {
  return (
    <>
      <div aria-busy className={styles['section_h2--skeleton']} />

      <div className={styles.sponsorSect_grid}>
        <div className={styles['section_elmnt--skeleton']} />
        <div className={styles['section_elmnt--skeleton']} />
        <div className={styles['section_elmnt--skeleton']} />
        <div className={styles['section_elmnt--skeleton']} />
      </div>
    </>
  )
}
