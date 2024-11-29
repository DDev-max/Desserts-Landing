// import { usePathname, useSearchParams } from "next/navigation"
// import { useRouter } from "next/navigation"

// export interface CreateUrlProps{
//     paramsAndValueObj: Record<string, string | number>
//     saveHistory: boolean
// }

// export function useCreateUrl({paramsAndValueObj,saveHistory}: CreateUrlProps){
//     const searchParams = useSearchParams()
//     const params = new URLSearchParams(searchParams)
//     const pathName = usePathname()
//     const {replace} = useRouter()

//     Object.entries(paramsAndValueObj).forEach(([param, value]) => {
//         params.set(param, value.toString())
//     })

//     if (saveHistory) {
//         replace(`${pathName}?${params.toString()}`, {scroll: false})
//    }

//     return `${pathName}?${params.toString()}`
// }




/////////////////////////////////////////////////////

import { NavigateOptions } from "next/dist/shared/lib/app-router-context.shared-runtime"
import { ReadonlyURLSearchParams } from "next/navigation"

export interface CreateUrlProps{
    paramsAndValueObj: Record<string, string | number>
    searchParams: ReadonlyURLSearchParams
    pathName: string
    replace?: (href: string, options?: NavigateOptions) => void
}

export function createUrl({paramsAndValueObj,pathName,replace,searchParams}: CreateUrlProps){
    const params = new URLSearchParams(searchParams)

    Object.entries(paramsAndValueObj).forEach(([param, value]) => {
        params.set(param, value.toString())
    })

    if (replace) {
        replace(`${pathName}?${params.toString()}`, {scroll: false})
   }

    return `${pathName}?${params.toString()}`
}