"use client"

import Image from "next/image";
import Link from "next/link";
import { MenuSVG } from "../../SVG/MenuSVG";
import styles from "./header.module.css"
import {useEffect, useRef, useState } from "react";
import { usePathname, useSearchParams } from "next/navigation";
import { createUrl } from "@/app/utils/createUrl/createUrl";


export function Header() {

  //CAMBIAR LINK DE 'Types' (es un link vacio y no deberia, ver ul li)

  //PONER EL SKELETON Y LAS WEBADAS DE NEXT JS PARA QUE CARGUE BIEN

  const pathName = usePathname()
  const searchParams = useSearchParams()

  const headerRef = useRef<HTMLElement>(null)
  const btnMenuRef = useRef<HTMLButtonElement>(null)
  const [menuVisible, setMenuVisible] = useState(false)


  useEffect(()=>{

    function hideMenu(e:KeyboardEvent) {
      if (e.key === "Escape" && !menuVisible) {
        setMenuVisible(false)
      }
    }

    document.addEventListener("keyup", hideMenu)


    //VER SI ESTA BIEN
    return ()=>{
      document.removeEventListener("keyup", hideMenu)

    }
  }, [menuVisible])

  
  return (
    <header ref={headerRef} className={`${styles.header} ${menuVisible? styles["header--fixed"]: ""}`}>

      <Link className={`${styles.header_logo_link}`} href={"/"}>
        <Image width={90} height={65} src="/pageLogo.png" alt="" />
      </Link>


      <button className={`${styles.header_btn}`} ref={btnMenuRef} aria-label="Navigation menu" aria-expanded={menuVisible} aria-controls="navMenu"  onClick={()=>{setMenuVisible(!menuVisible)} }>

        {
        menuVisible
          ? <span className={`${styles.header_closedMenu}`}></span>

          : <MenuSVG className={`${styles.header_menuSVG}`} />
        }

      </button>

      <nav id="navMenu" className={`${styles.header_nav} ${menuVisible ? styles["header_nav--visible"] : ""}`}>

        <ul onClick={()=>setMenuVisible(false)} className={`${styles.header_nav_menu}`} >

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