import Image from 'next/image'
import styles from './multipleProducts.module.css'
import Link from 'next/link'
import { fetchData } from '@/utils/fetchData/fetchData'
import type { SponsorApi } from '@/data/types'
import { sponsorsUrl } from '@/data/consts'
import { LinkSVG } from '@/SVG/LinkSVG'

export async function MultipleProducts() {
  const multipleRecipes = await fetchData<SponsorApi[]>({ URL: sponsorsUrl })

  return (
    <section id='popular'>
      <h2 className={`${styles.section_h2}`}>The favorites you can&apos;t miss!</h2>
      <div className={`${styles.section_grid}`}>
        {multipleRecipes?.map(elmnt => (
          <Link
            rel='sponsored'
            href={elmnt.url}
            className={`${styles.section_grid_elmnt}`}
            key={elmnt.id}
          >
            <Image
              className={`${styles.section_grid_elmnt_img}`}
              src={elmnt.image}
              alt={elmnt.dish}
              width={250}
              height={170}
            />

            <div className={`${styles.section_grid_elmnt_recipeCont}`}>
              <h3 className={`${styles.section_grid_elmnt_recipeCont_title}`}>
                {`${elmnt.dish}`}

                <LinkSVG className={styles.section_grid_elmnt_recipeCont_title_linkSVG} />
              </h3>
            </div>
          </Link>
        ))}
      </div>
    </section>
  )
}
