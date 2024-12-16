import { faqUrl } from "@/app/data/consts"
import { FaqAPI } from "@/app/data/types"
import { fetchData } from "@/app/utils/fetchData/fetchData"
import styles from "./faq.module.css"

export async function Faq() {


    //NO AÑADIR ESTADOS PARA VER COMO CHUCHA LE HAGO UN TESTEO SIMPLE
    const data = await fetchData<FaqAPI[]>(faqUrl)

    return (
        <section className={styles.faqSctn}>
            <h2 className={styles.faqSctn_h2}>Everything You Need to Know About Our Desserts</h2>

            <div className={styles.faqSctn_questionCont}>
                {data.map((elmt) => (
                    <details className={styles.faqSctn_questionCont_details} name="question" key={elmt.id}>
                        <summary className={styles.faqSctn_questionCont_summ}  >{elmt.question}</summary>
                        <p className={styles.faqSctn_questionCont_p} >  {elmt.answer}</p>
                    </details>
                ))}
            </div>
        </section>
    )
}