import Image from "next/image";
import Link from "next/link";
import { MenuSVG } from "../SVG/MenuSVG";
import styles from "./header.module.css"

export function Header() {


    return (
        <header className={`${styles.header}`}>

          <Link className={`${styles.header_logo_link}`} href={"/"}>
            <Image width={90} height={65} src="/pageLogo.png" alt=""/>
          </Link>

          <MenuSVG className={`${styles.header_menuSVG}`}/>

          <nav className={`${styles.header_nav}`}>
            
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