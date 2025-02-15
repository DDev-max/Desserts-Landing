'use client'

import Image from 'next/image'
import Link from 'next/link'
import { MenuSVG } from '../../SVG/MenuSVG'
import styles from './header.module.css'
import { useEffect, useRef, useState } from 'react'
import { usePathname, useSearchParams } from 'next/navigation'

import { handleEnterLeave } from './handleEnterLeave'
import { toggleMenu } from './toggleMenu'
import { useCategoriesCntxt } from '@/Context/useCategoriesCntxt'
import { createUrl } from '@/utils/createUrl/createUrl'

export function Header() {
  const pathName = usePathname()
  const searchParams = useSearchParams()

  const headerRef = useRef<HTMLElement>(null)
  const btnMenuRef = useRef<HTMLButtonElement>(null)

  const [menuVisible, setMenuVisible] = useState([false, false])
  const isMouse = useRef(false)

  useEffect(() => {
    function hideAllMenus(e: KeyboardEvent) {
      if (e.key === 'Escape' && menuVisible.some(elmnt => elmnt === true)) {
        setMenuVisible([])
      }
    }

    document.addEventListener('keyup', hideAllMenus)

    return () => {
      document.removeEventListener('keyup', hideAllMenus)
    }
  }, [menuVisible])

  const context = useCategoriesCntxt()
  if (!context) return
  const { categories } = context

  return (
    <header ref={headerRef} className={`${styles.header} ${menuVisible.some(el => el === true) ? styles['header--fixed'] : ''}`}>
      <Link title='Go to main page' className={`${styles.header_logo_link}`} href={'/'}>
        <Image width={90} height={65} src='/pageLogo.png' alt='' />
      </Link>

      <button
        className={styles.header_menuBtn}
        ref={btnMenuRef}
        aria-label='Navigation menu'
        aria-expanded={menuVisible[0]}
        aria-controls='navMenu'
        onClick={() => toggleMenu({ menuIdx: 0, setMenuVisible })}
      >
        {menuVisible[0] ? <span className={`${styles.header_closedMenu}`}></span> : <MenuSVG className={`${styles.header_menuSVG}`} />}
      </button>

      <span
        onClick={() => toggleMenu({ menuIdx: 0, setMenuVisible })}
        className={`${styles.header_navBg} ${menuVisible[0] ? styles['header_navBg--visible'] : ''}`}
      ></span>

      <nav id='navMenu' className={`${styles.header_nav} ${menuVisible[0] ? styles['header_nav--visible'] : ''}`}>
        <ul className={styles.header_nav_menu}>
          <li className={styles.header_nav_menu_item}>
            <Link href='#popular'>Popular</Link>
          </li>

          <li className={styles.header_nav_menu_item}>
            <Link href='#new'>New</Link>
          </li>

          <li className={styles.header_nav_menu_item}>
            <Link href='#aboutUs'>About Us</Link>
          </li>

          <li
            onMouseEnter={() => {
              handleEnterLeave({ enter: true, isMouse, menuVisible, setMenuVisible })
            }}
            onMouseLeave={() => {
              handleEnterLeave({ enter: false, isMouse, menuVisible, setMenuVisible })
            }}
            className={`${styles.header_nav_menu_item} ${menuVisible[1] ? styles['header_nav_menu_item--extended'] : ''}`}
          >
            <Link
              onClick={() => {
                if (isMouse.current == false) toggleMenu({ menuIdx: 1, setMenuVisible })
              }}
              aria-controls='subMenu1'
              aria-expanded={menuVisible[1]}
              href={'#categories'}
            >
              Types ▼
            </Link>

            <ul
              id='subMenu1'
              className={`${styles.header_nav_menu_item_subMenu} ${menuVisible[1] ? styles['header_nav_menu_item_subMenu--visible'] : ''}`}
            >
              {categories?.map(elmnt => (
                <li key={elmnt.id}>
                  <Link
                    onKeyDown={e => {
                      if (e.key == 'Enter') setMenuVisible([])
                    }}
                    href={createUrl({
                      paramsAndValueObj: { category: elmnt.id },
                      pathName,
                      searchParams,
                      hash: 'categories',
                    })}
                  >
                    {elmnt.name}
                  </Link>
                </li>
              ))}
            </ul>
          </li>
        </ul>
      </nav>
    </header>
  )
}
