"use client"

import Image from "next/image"
import styles from "./multipleProducts.module.css"
// import { RecipeSteps } from "@/app/Components/recipeSteps/recipeSteps"
import { fetchData } from "@/app/utils/fetchData/fetchData"
import { sponsorsUrl } from "@/app/data/consts"
import { SponsorApi } from "@/app/data/types"
import { useEffect, useState } from "react"
import { LinkSVG } from "@/app/SVG/LinkSVG"
import Link from "next/link"

export function MultipleProducts() {

    //HACER DE PRODUCTOS PATROCINADOS Y AL HACERLO, PONER EN EL LINK rel="sponsored"
    //HACER FAQQQ

    const [recipes, setRecipes] = useState<SponsorApi[]>()
    // const [showMenu, setShowMenu] = useState<boolean[]>([])



    useEffect(() => {


        // SE PUEDE HACER MAS DIRECTA O SEPARAR? LA ESTOY USANDO EN DISTINTAS PARTES
        async function getFetchData() {
            const multipleRecipes = await fetchData<SponsorApi[]>(sponsorsUrl)


            setRecipes(multipleRecipes)
        }


        getFetchData()

    }, [])


    // function toggleShowMenu(idx: number) {

    //     if (showMenu[idx]) {
    //         const hayLago= [...showMenu]

    //         hayLago[idx] = !hayLago[idx]

    //         setShowMenu(hayLago)
    //         console.log(hayLago);

    //         return
    //     }

    //     const copy: boolean[] = []

    //     copy[idx] = true

    //     console.log(copy);

    //     setShowMenu(copy)
    // }



    return (
        <section id="popular">
            <h2 className={`${styles.section_h2}`}>The favorites you can&apos;t miss!</h2>
            <div className={`${styles.section_grid}`} >
                {recipes?.map((elmnt) => (

                    <Link rel="sponsored" href={elmnt.url}

                        className={`${styles.section_grid_elmnt}`} key={elmnt.id}>

                        <Image className={`${styles.section_grid_elmnt_img}`} src={elmnt.image} alt={elmnt.dish} width={250} height={170} />

                        <div className={`${styles.section_grid_elmnt_recipeCont}`}>

                            <h2 className={`${styles.section_grid_elmnt_recipeCont_title}`}>

                                {`${elmnt.dish}`}

                                <LinkSVG className={styles.section_grid_elmnt_recipeCont_title_linkSVG} />

                            </h2>

                        </div>

                    </Link>
                ))}


            </div>
        </section>
    )
}


