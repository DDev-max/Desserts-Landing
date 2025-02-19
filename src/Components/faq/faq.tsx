import type { FaqAPI } from '@/data/types'
import styles from './faq.module.css'

export async function Faq({ data }: { data: FaqAPI[] }) {
  return (
    <section className={styles.faqSctn}>
      <h2 className={styles.faqSctn_h2}>Everything You Need to Know About Our Desserts</h2>

      <div className={styles.faqSctn_questionCont}>
        {data.map(elmt => (
          <details className={styles.faqSctn_details} name='question' key={elmt.id}>
            <summary className={styles.faqSctn_summ}>{elmt.question}</summary>
            <p className={styles.faqSctn_p}> {elmt.answer}</p>
          </details>
        ))}
      </div>
    </section>
  )
}
