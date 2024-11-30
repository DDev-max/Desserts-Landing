"use client" // PASARLO A LMENUSVG

import Image from "next/image";
import Link from "next/link";
import { MenuSVG } from "../../SVG/MenuSVG";
import styles from "./header.module.css"
import { useEffect, useRef } from "react";
import { usePathname, useSearchParams } from "next/navigation";
import { createUrl } from "@/app/utils/createUrl/createUrl";

export function Header() {

  const menuIcon =  useRef<HTMLElement>(null)
  const pathName = usePathname()
  const searchParams =  useSearchParams()


  //CAMBIARRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRR
  useEffect(()=>{

    function toggleMenu(e: MouseEvent) {

      if (menuIcon.current?.contains(e.target as Node)) {
        menuIcon.current.nextElementSibling?.classList.add(`${styles.menuVisible}`)
        
       } else{
        menuIcon.current?.nextElementSibling?.classList.remove(`${styles.menuVisible}`)
   
       }
       
    }

    document.addEventListener("click",toggleMenu)

    return ()=> {document.removeEventListener("click",toggleMenu)}

  },[])

    return (
        <header className={`${styles.header}`}>

          <Link className={`${styles.header_logo_link}`} href={"/"}>
            <Image width={90} height={65} src="/pageLogo.png" alt=""/>
          </Link>

          <MenuSVG ref={menuIcon} className={`${styles.header_menuSVG}`}/>

          <nav  className={`${styles.header_nav}`}>
            
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
                    <Link href={createUrl({paramsAndValueObj:{category: "cookies"}, pathName,searchParams,hash:"categories"})}>Cookies</Link>
                  </li>

                  <li>
                    <Link href={createUrl({paramsAndValueObj:{category: "iceCreams"}, pathName,searchParams,hash:"categories"})}>Ice Creams</Link>
                  </li>

                  <li>
                    <Link href={createUrl({paramsAndValueObj:{category: "fried"}, pathName,searchParams,hash:"categories"})}>Fried</Link>
                  </li>

                  <li>
                    <Link  href={createUrl({paramsAndValueObj:{category: "fruits"}, pathName,searchParams,hash:"categories"})}>Fruits</Link>
                  </li>

                </ul>

              </li>

            </ul>
            
          </nav>


        </header>
    )
}