"use client"
import { PaginationBtnsProps } from "@/app/data/types"
import { createUrl } from "@/app/utils/createUrl/createUrl"
import Link from "next/link"
import { usePathname, useSearchParams } from "next/navigation"



export function PaginationBtns({buttonsQtty,classNameBtn,classNameCont,currentPage,selectedBtnClassName}: PaginationBtnsProps) {

    const pathName = usePathname()
    const searchParams = useSearchParams()

    const emptyArray =  Array.from({ length: buttonsQtty }, (_, idx) => idx + 1)


    return (
        <div className={classNameCont}>
            {emptyArray.map((elmnt, idx) => (
                <Link className={`${classNameBtn} ${currentPage== elmnt ? selectedBtnClassName : ""}`} key={idx} href={createUrl({paramsAndValueObj: {page: idx + 1}, pathName,searchParams })}>
                    {elmnt}
                </Link>
            ))}

        </div>
    )
}