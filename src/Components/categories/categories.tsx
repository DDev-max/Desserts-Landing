'use client'

import Image from 'next/image'
import styles from './categories.module.css'
import type { CategoriesProps } from '../../data/types'
import { useRef, useState } from 'react'
import { usePathname, useSearchParams } from 'next/navigation'
import Link from 'next/link'
import { useCategoriesCntxt } from '@/Context/useCategoriesCntxt'
import { CategoriesSkeleton } from './categoriesSkeleton'
import { createUrl } from '@/utils/createUrl/createUrl'
import { focusTab } from './focustab'

export function Categories({ currentCategory }: CategoriesProps) {
  const searchParams = useSearchParams()
  const pathName = usePathname()

  const tabsBtnsRef = useRef<HTMLAnchorElement[]>([])

  const [, setSelectedBtn] = useState(0)

  const context = useCategoriesCntxt()
  if (!context) return

  const { categories, isLoading } = context

  return (
    <section className={`${styles.categoriesSctn}`}>
      <h2>Choose your sweet destiny!</h2>

      {isLoading && <CategoriesSkeleton />}

      {!isLoading && (
        <div
          onKeyDown={e => {
            focusTab({ e, setSelectedBtn, tabsBtnsRef })
          }}
          role='tablist'
          id='categories'
          className={`${styles.categoriesSctn_categoriesCont}`}
        >
          {categories?.map((elmnt, idx) => (
            <Link
              scroll={false}
              ref={el => {
                if (el) tabsBtnsRef.current[idx] = el
              }}
              tabIndex={currentCategory === elmnt.id ? 0 : -1}
              role='tab'
              aria-selected={currentCategory === elmnt.id}
              aria-controls={`${elmnt.id}Tab`}
              id={`${elmnt.id}ID`}
              className={`${styles.categoriesSctn_btn} ${currentCategory == elmnt.id ? styles['categoriesSctn_btn--selected'] : ''}`}
              key={elmnt.id}
              href={createUrl({
                paramsAndValueObj: { category: elmnt.id, page: 1 },
                pathName,
                searchParams,
              })}
            >
              <Image
                className={styles.categoriesSctn_btn_img}
                width={200}
                height={200}
                src={elmnt.imgLink}
                alt={`${elmnt.name} category`}
              />

              <p className={styles.categoriesSctn_btn_title}>{elmnt.name}</p>
            </Link>
          ))}
        </div>
      )}
    </section>
  )
}
