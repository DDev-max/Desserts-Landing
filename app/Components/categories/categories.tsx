"use client"

import Image from "next/image";
import styles from "./categories.module.css"
import { RecipesCategoriesAPI } from "../../data/types";
import { fetchData } from "@/app/utils/fetchData/fetchData";
import { categoriesUrl } from "@/app/data/consts";
import { useEffect, useRef, useState } from "react";
import { usePathname, useSearchParams, useRouter } from "next/navigation";
import { createUrl } from "@/app/utils/createUrl/createUrl";
// import { noentiendoniverga } from "./noentiendoniverga";


export function Categories() {

    const searchParams = useSearchParams()
    const router = useRouter()
    const pathName = usePathname()

    const currentCategory = searchParams.get("category") || "cookies"

    const tabsBtnsRef = useRef<HTMLButtonElement[]>([])
    const [selectedBtn, setSelectedBtn] = useState(0)


    const [categories, setCategories] = useState<RecipesCategoriesAPI[]>()



    // NECESARIO POR QUE LA DATA INTERACTIVA SE CONSULTA POR MEDIO DE UN FETCH
    useEffect(() => {

        async function getFetchData() {
            const data = await fetchData<RecipesCategoriesAPI[]>(categoriesUrl)

            setCategories(data)


        }


        getFetchData()

    }, [])


    function focusTab(e:  React.KeyboardEvent<HTMLDivElement>) {
        
        setSelectedBtn((prev)=>{
            let selectionIdx = prev

            if (e.key === "ArrowRight") {
                selectionIdx += 1
                if(selectionIdx >= tabsBtnsRef.current.length){
                    selectionIdx = 0
                }

            }else if(e.key === "ArrowLeft"){
                selectionIdx -= 1
                if (selectionIdx <0) {
                    selectionIdx = tabsBtnsRef.current.length -1
                }
            }

            tabsBtnsRef.current[selectionIdx].focus()

            return selectionIdx
        })





    }

    return (
        <section className={`${styles.categoriesSctn}`}>
            <h2>Choose your sweet destiny!</h2>

            <div
                onKeyDown={focusTab}
                role="tablist"
                id="categories"
                className={`${styles.categoriesSctn_categoriesCont}`}>

                {categories?.map((elmnt, idx) => (
                    <button 
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
                    onClick={() => createUrl({ paramsAndValueObj: { category: elmnt.id, page: 1 }, pathName, router, searchParams })}
                    >

                        <Image className={styles.categoriesSctn_btn_img} width={200} height={200} src={elmnt.imgLink} alt={`${elmnt.name} category`}/>

                        <p className={styles.categoriesSctn_btn_title}>{elmnt.name}</p>

                    </button>
                ))}

            </div>


        </section>

    )
}






