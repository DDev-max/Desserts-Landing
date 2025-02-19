import Link from 'next/link'
import styles from './footer.module.css'
import { EmailSVG } from '../../SVG/email'
import { PhoneSVG } from '../../SVG/Phone'
import { LocationSVG } from '../../SVG/Location'
import { InstaSVG } from '../../SVG/instaSVG'
import { Twitter } from '../../SVG/Twitter'

export function Footer() {
  return (
    <footer id='aboutUs' className={`${styles.pageFooter}`}>
      <div className={`${styles.pageFooter_infoCont}`}>
        <section className={`${styles.pageFooter_sectn}`}>
          <h2>Address</h2>
          <address className={`${styles.pageFooter_division}`}>
            <LocationSVG />
            Av. Las Delicias #123, Colonia Primavera, Ciudad Dulce, CP 45678,
          </address>
        </section>

        <section className={`${styles.pageFooter_sectn}`}>
          <h2>Contact Us</h2>
          <address className={`${styles.pageFooter_division}`}>
            <div>
              <EmailSVG />

              <Link href='mailto:sweetBliss@example.com'>sweetBliss@example.com</Link>
            </div>

            <div>
              <PhoneSVG />

              <Link href='tel:+12345678'>+12345678</Link>
            </div>
          </address>
        </section>

        <section className={`${styles.pageFooter_sectn}`}>
          <h2>Socials</h2>

          <div className={`${styles.pageFooter_division}`}>
            <div>
              <InstaSVG />
              <Link href={'https://www.instagram.com/cristiano/'}>Instagram</Link>
            </div>

            <div>
              <Twitter />
              <Link href={'https://x.com/nextjs'}>Twitter</Link>
            </div>
          </div>
        </section>
      </div>
    </footer>
  )
}
