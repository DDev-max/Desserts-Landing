"use client" // PASARLO A LMENUSVG

import Image from "next/image";
import Link from "next/link";
import { MenuSVG } from "../../SVG/MenuSVG";
import styles from "./header.module.css"
import { useEffect, useRef } from "react";

export function Header() {

  const menuRef = useRef<HTMLElement>(null)
  const menuIcon =  useRef<HTMLElement>(null)

  useEffect(()=>{

    function toggleMenu(e: MouseEvent) {
      
      

      if (menuIcon.current?.contains(e.target as Node)) {
        menuRef.current?.classList.add(`${styles.menuVisible}`)
        console.log("clase añadida");
        
       } else{
         menuRef.current?.classList.remove(`${styles.menuVisible}`)
         console.log("clase quitada");
   
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

          <nav ref={menuRef} className={`${styles.header_nav}`}>
            
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
                    <Link href="#cookies">Cookies</Link>
                  </li>

                  <li>
                    <Link href="#iceCreams">Ice Creams</Link>
                  </li>

                  <li>
                    <Link href="#fried">Fried</Link>
                  </li>

                  <li>
                    <Link href="#fruits">Fruits</Link>
                  </li>

                </ul>

              </li>

            </ul>
            
          </nav>


        </header>
    )
}