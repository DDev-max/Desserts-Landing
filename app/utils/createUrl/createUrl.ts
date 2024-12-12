import { CreateUrlProps } from "@/app/data/types"

export function createUrl({paramsAndValueObj,pathName,router,searchParams,hash}: CreateUrlProps){

    const params = new URLSearchParams(searchParams)

    Object.entries(paramsAndValueObj).forEach(([param, value]) => {
        params.set(param, value.toString())
    })

    if (router) {
        router.push(`${pathName}?${params.toString()}`, {scroll: false})    
    }

   if (hash) {
    return `${pathName}?${params.toString()}#${hash}`
   }c
   
    return `${pathName}?${params.toString()}`
}

