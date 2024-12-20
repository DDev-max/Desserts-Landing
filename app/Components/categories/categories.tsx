"use client"

import Image from "next/image";
import styles from "./categories.module.css"
import { RecipesCategoriesAPI } from "../../data/types";
import { fetchData } from "@/app/utils/fetchData/fetchData";
import { categoriesUrl } from "@/app/data/consts";
import { useEffect, useRef, useState } from "react";
import { usePathname, useSearchParams } from "next/navigation";
import { createUrl } from "@/app/utils/createUrl/createUrl";
import { focusTab } from "./focustab";
import Link from "next/link";
import { CategoriesSkeleton } from "./categoriesSkeleton";

export interface CategoriesProps{
    currentCategory: string
}

export function Categories({currentCategory}:CategoriesProps) {

    const searchParams = useSearchParams()
    const pathName = usePathname()


    const tabsBtnsRef = useRef<HTMLAnchorElement[]>([])

    const [, setSelectedBtn] = useState(0)
    const [categories, setCategories] = useState<RecipesCategoriesAPI[]>()
    const [isLoading, setIsLoading] = useState(true)


    // NECESARIO POR QUE LA DATA ES INTERACTIVA Y SE CONSULTA POR MEDIO DE UN FETCH
    useEffect(() => {

        async function getFetchData() {
            const data = await fetchData<RecipesCategoriesAPI[]>({URL: categoriesUrl,setIsLoading})
            setCategories(data)
        }


        getFetchData()

    }, [])



    return (
        <section className={`${styles.categoriesSctn}`}>
            <h2>Choose your sweet destiny!</h2>


            {isLoading && <CategoriesSkeleton/>}

            {!isLoading &&

            <div
                onKeyDown={(e)=>{focusTab({e,setSelectedBtn,tabsBtnsRef})}}
                role="tablist"
                id="categories"
                className={`${styles.categoriesSctn_categoriesCont}`}>

                {categories?.map((elmnt, idx) => (
                    <Link 
                    scroll={false}
                    ref={(el)=> {if(el) tabsBtnsRef.current[idx] = el}}
                    tabIndex={currentCategory === elmnt.id ? 0 : -1}
                    role="tab"
                    aria-selected={currentCategory === elmnt.id}
                    aria-controls={`${elmnt.id}Tab`}
                    id={`${elmnt.id}ID`}
                    className={
                        currentCategory === elmnt.id
                        ? styles["categoriesSctn_btn--selected"] 
                        : styles.categoriesSctn_btn
                    }
                    key={elmnt.id}
                    href={ createUrl({ paramsAndValueObj: { category: elmnt.id, page: 1 }, pathName, searchParams })}
                    >

                        <Image className={styles.categoriesSctn_btn_img} width={200} height={200} src={elmnt.imgLink} alt={`${elmnt.name} category`}/>

                        <p className={styles.categoriesSctn_btn_title}>{elmnt.name}</p>

                    </Link>
                ))}

            </div>
            }

        </section>

    )
}






