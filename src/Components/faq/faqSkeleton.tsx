import styles from './faq.module.css'

export function FaqSkeleton() {
  return (
    <div aria-busy>
      <div className={styles['faqSctn_h2--skeleton']}></div>

      <div className={styles['faqSctn_details--skeleton']}></div>

      <div className={styles['faqSctn_details--skeleton']}></div>

      <div className={styles['faqSctn_details--skeleton']}></div>
    </div>
  )
}
