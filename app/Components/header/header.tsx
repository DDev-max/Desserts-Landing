"use client"

import Image from "next/image";
import Link from "next/link";
import { MenuSVG } from "../../SVG/MenuSVG";
import styles from "./header.module.css"
import { useRef, useState } from "react";
import { usePathname, useSearchParams } from "next/navigation";
import { createUrl } from "@/app/utils/createUrl/createUrl";


export function Header() {

  //CAMBIAR LINK DE 'Types' (es un link vacio y no deberia, ver ul li)
  //HACER QUE NO SE PUEDA HACER SCCROLL CON MENU ACTIVO 
  //OCULTAR DESPUES DE HACER CLICK EN LOS LINK DEL HAMBURGUER MENU
  const menuIconRef = useRef<HTMLElement>(null)
  const pathName = usePathname()
  const searchParams = useSearchParams()

  const [menuVisible, setMenuVisible] = useState(false)



  return (
    <header className={`${styles.header}`}>

      <Link className={`${styles.header_logo_link}`} href={"/"}>
        <Image width={90} height={65} src="/pageLogo.png" alt="" />
      </Link>



      <button aria-label="Navigation menu" aria-expanded={menuVisible} aria-controls="navMenu" onClick={()=> setMenuVisible(!menuVisible)}>

        {menuVisible
          ? <span className={`${styles.header_closedMenu}`}></span>

          : <MenuSVG ref={menuIconRef} className={`${styles.header_menuSVG}`} />
        }

      </button>


      <nav id="navMenu" className={`${styles.header_nav} ${menuVisible ? styles["header_nav--visible"] : ""}`}>

        <ul className={`${styles.header_nav_menu}`} >

          <li className={`${styles.header_nav_menu_item}`}>
            <Link href="#popular">Popular</Link>
          </li>

          <li className={`${styles.header_nav_menu_item}`} >
            <Link href="#new">New</Link>
          </li>

          <li className={`${styles.header_nav_menu_item}`} >
            <Link href="#aboutUs">About Us</Link>
          </li>

          <li className={`${styles.header_nav_menu_item}`} >
            <Link href="">Types ▼</Link>

            <ul className={`${styles.header_nav_menu_item_subMenu}`}>

              <li>
                <Link href={createUrl({ paramsAndValueObj: { category: "cookies" }, pathName, searchParams, hash: "categories" })}>Cookies</Link>
              </li>

              <li>
                <Link href={createUrl({ paramsAndValueObj: { category: "iceCreams" }, pathName, searchParams, hash: "categories" })}>Ice Creams</Link>
              </li>

              <li>
                <Link href={createUrl({ paramsAndValueObj: { category: "fried" }, pathName, searchParams, hash: "categories" })}>Fried</Link>
              </li>

              <li>
                <Link href={createUrl({ paramsAndValueObj: { category: "fruits" }, pathName, searchParams, hash: "categories" })}>Fruits</Link>
              </li>

            </ul>

          </li>

        </ul>

      </nav>


    </header>
  )
}