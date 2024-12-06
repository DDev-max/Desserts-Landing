"use client"

import Image from "next/image"
import styles from "./multipleProducts.module.css"
import { RecipeSteps } from "@/app/Components/recipeSteps/recipeSteps"
import { fetchData } from "@/app/utils/fetchData/fetchData"
import { popularCatgrsURL } from "@/app/data/consts"
import { RecipeElmnt } from "@/app/data/types"
import { useEffect, useState } from "react"

export function MultipleProducts() {

    const [recipes, setRecipes] = useState<RecipeElmnt[]>()
    const [showMenu, setShowMenu] = useState<boolean[]>([])



    useEffect( ()=>  {

        async function getFetchData() {
            const multipleRecipes = await fetchData<RecipeElmnt[]>(popularCatgrsURL)

            setRecipes(multipleRecipes)
        }


        getFetchData()

    }, [])


    function toggleShowMenu(idx: number) {
        const copy = [...showMenu]
        copy[idx] = !copy[idx]

        setShowMenu(copy)
    }


    return (
        <section id="popular">
            <h2 className={`${styles.section_h2}`}>The favorites you can&apos;t miss!</h2>
            <div className={`${styles.section_grid}`} >
                {recipes?.map((elmnt, idx)=>(
                    <article className={`${styles.section_grid_elmnt}`} key={elmnt.id}>
                        <Image  className={`${styles.section_grid_elmnt_img}`} src={elmnt.image} alt={elmnt.dish} width={250} height={170}/>

                        <div  className={`${styles.section_grid_elmnt_recipeCont}`}>
                            <div onClick={()=>{toggleShowMenu(idx)}}>
                                <h3  className={`${styles.section_grid_elmnt_recipeCont_title}`}>
                                    {`${elmnt.dish}${showMenu[idx]? "▲": "▼" }`}

                                </h3>

                                <div className={`${showMenu[idx] ? styles["section_grid_elmnt_recipeCont_bg--visible"] : styles.section_grid_elmnt_recipeCont_bg}`}>

                                    <RecipeSteps 
                                    olClassName={`${styles.section_grid_elmnt_recipeCont_bg_ol}`}
                                    recipeParagraph={elmnt.recipe}/>

                                </div>

                            </div>

                        </div>
                    </article>
                ))}
            </div>
        </section>
    )
}


