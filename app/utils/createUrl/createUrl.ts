import { CreateUrlProps } from "@/app/data/types"

export function createUrl({paramsAndValueObj,pathName,replace,searchParams, hash}: CreateUrlProps){
    const params = new URLSearchParams(searchParams)

    Object.entries(paramsAndValueObj).forEach(([param, value]) => {
        params.set(param, value.toString())
    })

    if (replace) {
        replace(`${pathName}?${params.toString()}`, {scroll: false})
   }

   if (hash) {
    return `${pathName}?${params.toString()}#${hash}`
   }

    return `${pathName}?${params.toString()}`
}