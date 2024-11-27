"use client" // PASARLO A LMENUSVG

import Image from "next/image";
import Link from "next/link";
import { MenuSVG } from "../../SVG/MenuSVG";
import styles from "./header.module.css"
import { useRef } from "react";

export function Header() {

  const menuRef = useRef<HTMLElement>(null)

  function showMenu() {

    
    menuRef.current?.classList.add(`${styles.menuVisible}`)

  }


    return (
        <header className={`${styles.header}`}>

          <Link className={`${styles.header_logo_link}`} href={"/"}>
            <Image width={90} height={65} src="/pageLogo.png" alt=""/>
          </Link>

          <MenuSVG onClick={showMenu} className={`${styles.header_menuSVG}`}/>

          <nav ref={menuRef} className={`${styles.header_nav}`}>
            
            <ul className={`${styles.header_nav_menu}`} >

              <li className={`${styles.header_nav_menu_item}`}>
                <Link href="">Popular</Link>
              </li>

              <li className={`${styles.header_nav_menu_item}`} >
                <Link href="">New</Link>
              </li>

              <li className={`${styles.header_nav_menu_item}`} >
                <Link href="">About Us</Link>
              </li>

              <li className={`${styles.header_nav_menu_item}`} >
                <Link href="">Types ▼</Link>

                <ul className={`${styles.header_nav_menu_item_subMenu}`}>

                  <li>
                    <Link href="">Cookies</Link>
                  </li>

                  <li>
                    <Link href="">Ice Creams</Link>
                  </li>

                  <li>
                    <Link href="">Fried</Link>
                  </li>

                  <li>
                    <Link href="">Fruits</Link>
                  </li>

                </ul>

              </li>

            </ul>
            
          </nav>


        </header>
    )
}