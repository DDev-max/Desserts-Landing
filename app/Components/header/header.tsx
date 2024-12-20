"use client"

import Image from "next/image";
import Link from "next/link";
import { MenuSVG } from "../../SVG/MenuSVG";
import styles from "./header.module.css"
import { useEffect, useRef, useState } from "react";
import { usePathname, useSearchParams } from "next/navigation";
import { createUrl } from "@/app/utils/createUrl/createUrl";


export function Header() {

  //PONER EL SKELETON Y LAS WEBADAS DE NEXT JS PARA QUE CARGUE BIEN


  //SACARLOS Y PASARSELOS DESDE EL PAGE?


  const pathName = usePathname()
  const searchParams = useSearchParams()


  const headerRef = useRef<HTMLElement>(null)
  const btnMenuRef = useRef<HTMLButtonElement>(null)

  const [menuVisible, setMenuVisible] = useState<boolean[]>([false, false])


  function hideMenu(menuIdx: number) {
    setMenuVisible(prev => {
      const copy = [...prev]
      copy[menuIdx] = !copy[menuIdx]
      return copy
    })
  }



  useEffect(() => {

    function hideAllMenus(e: KeyboardEvent) {
      if (e.key === "Escape" && menuVisible.some(elmnt => elmnt === true)) {
        setMenuVisible([])
      }
    }

    document.addEventListener("keyup", hideAllMenus)
 
    return () => {
      document.removeEventListener("keyup", hideAllMenus)

    }
  }, [menuVisible])


  return (
    <header 
    ref={headerRef} className={`${styles.header} ${menuVisible.some((el)=>el===true) ? styles["header--fixed"] : ""}`}>

      <Link title="Go to main page" className={`${styles.header_logo_link}`} href={"/"}>
        <Image priority width={90} height={65} src="/pageLogo.png" alt="" />
      </Link>


      <button className={styles.header_menuBtn} ref={btnMenuRef} aria-label="Navigation menu" aria-expanded={menuVisible[0]} aria-controls="navMenu" onClick={() => hideMenu(0)}>

        {
          menuVisible[0]
            ? <span className={`${styles.header_closedMenu}`}></span>

            : <MenuSVG className={`${styles.header_menuSVG}`} />
        }

      </button>

      <span onClick={() => hideMenu(0)} className={`${styles.header_navBg} ${menuVisible[0] ? styles["header_navBg--visible"] : ""}`}></span>

      <nav id="navMenu" className={`${styles.header_nav} ${menuVisible[0] ? styles["header_nav--visible"] : ""}`}>

        <ul className={styles.header_nav_menu}>

          <li className={styles.header_nav_menu_item}>
            <Link href="#popular">Popular</Link>
          </li>

          <li className={styles.header_nav_menu_item}>
            <Link href="#new">New</Link>
          </li>

          <li className={styles.header_nav_menu_item}>
            <Link href="#aboutUs">About Us</Link>
          </li>

          <li
            onMouseEnter={() => {
              const copy = [...menuVisible]
              copy[1] = true
              setMenuVisible(copy)
              //MOVER A OTRO LADOOO O IMPLEMENTAR EN LA FUNCION HIDE
            }}

            onMouseLeave={() => {
              const copy = [...menuVisible]
              copy[1] = false
              setMenuVisible(copy)

              //MOVER A OTRO LADOOO O IMPLEMENTAR EN LA FUNCION HIDE

            }}
            
            // onClick={(e)=> {
            //   console.log("click");
              
            //   const copy = [...menuVisible]
            //   copy[1] = !copy[1]
            //   setMenuVisible(copy)
            //   e.preventDefault()

            // }
            // }
            
            // onKeyDown={(e) => { if (e.key === "Enter"){
            //   hideMenu(1); console.log("enterado")
            //   //to prevent conflicts between 'onClick' and 'onKeyDown' when using screen readers
            // } else{
            // console.log("no fue enter")
            // }
            
            //  }} 

            className={`${styles.header_nav_menu_item} ${menuVisible[1] ? styles["header_nav_menu_item--extended"] : ""}`}
            >

            <Link 
            onClick={()=>hideMenu(1)
            }
            aria-controls="subMenu1" aria-expanded={menuVisible[1]}
              href={"#categories"}>Types ▼</Link>

            <ul             onClick={()=>hideMenu(1)
            } id="subMenu1"
              className={`${styles.header_nav_menu_item_subMenu} ${menuVisible[1] ? styles["header_nav_menu_item_subMenu--visible"] : ""}`} >

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