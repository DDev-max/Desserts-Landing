"use client"

import Image from "next/image";
import styles from "./categories.module.css"
import {  RecipesCategoriesAPI } from "../../data/types";
import { fetchData } from "@/app/utils/fetchData/fetchData";
import { categoriesUrl } from "@/app/data/consts";
import { useEffect, useState } from "react";
import { usePathname, useSearchParams } from "next/navigation";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { createUrl } from "@/app/utils/createUrl/createUrl";


export function Categories() {

    const searchParams= useSearchParams()
    const {replace}= useRouter()
    const pathName = usePathname()

    const currentCategory = searchParams.get("category")

    const [categories, setCategories] = useState<RecipesCategoriesAPI[]>()



    // NECESARIO POR QUE LA DATA INTERACTIVA SE CONSULTA POR MEDIO DE UN FETCH
    useEffect( ()=>  {

        async function getFetchData() {
            const data =  await fetchData<RecipesCategoriesAPI[]>(categoriesUrl)

            setCategories(data)
        }


        getFetchData()

    }, [])



    return (
        <section className={`${styles.categoriesSctn}`}>
            <h2>Choose your sweet destiny!</h2>

            <Link href={createUrl({paramsAndValueObj: {page: 1}, pathName, searchParams})} 
            className={`${styles.categoriesSctn_categoriesCont}`}>

                {categories?.map(elmnt => (
                    <div className={
                        currentCategory == elmnt.id
                          ? styles["categoriesSctn_categoriesCont_category--selected"]
                          : styles.categoriesSctn_categoriesCont_category
                      }
                    
                    key={elmnt.id}>

                        <Image className={`${styles.categoriesSctn_categoriesCont_img}`}
                            width={200} height={200} src={elmnt.imgLink} alt={`${elmnt.name} category`} />




                        <label className={`${styles.categoriesSctn_categoriesCont_category_title}`}>

                            {elmnt.name}

                            <input 
                            checked={elmnt.id == currentCategory} value={`${elmnt.id}`} onChange={(e)=> createUrl({paramsAndValueObj:{category: e.target.value, page: 1} , pathName, replace,searchParams})} type="radio" name="categories" />

                        </label>


                    </div>
                ))}

            </Link>


        </section>

    )
}







