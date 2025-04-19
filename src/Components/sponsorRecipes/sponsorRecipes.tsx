import Image from 'next/image'
import styles from './sponsorRecipes.module.css'
import Link from 'next/link'
import { fetchData } from '@/utils/fetchData/fetchData'
import { SERVER_URL, sponsorsUrl } from '@/data/consts'
import { LinkSVG } from '@/SVG/LinkSVG'

interface SponsorApi {
  id: number
  dish: string
  image: string
  url: string
}

export async function SponsorRecipes() {
  const multipleRecipes = await fetchData<SponsorApi[]>({ URL: SERVER_URL + sponsorsUrl })

  return (
    <section id='popular'>
      <h2 className={`${styles.sponsorSect_h2}`}>The favorites you can&apos;t miss!</h2>
      <div className={`${styles.sponsorSect_grid}`}>
        {multipleRecipes?.map(elmnt => (
          <Link rel='sponsored' href={elmnt.url} className={`${styles.sponsorSect_elmnt}`} key={elmnt.id}>
            <Image className={`${styles.sponsorSect_img}`} src={elmnt.image} alt={elmnt.dish} width={250} height={170} />

            <div className={`${styles.sponsorSect_recipeCont}`}>
              <h3 className={`${styles.sponsorSect_title}`}>
                {`${elmnt.dish}`}

                <LinkSVG className={styles.sponsorSect_linkSVG} />
              </h3>
            </div>
          </Link>
        ))}
      </div>
    </section>
  )
}
