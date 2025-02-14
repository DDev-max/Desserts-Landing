import type { AppRouterInstance } from 'next/dist/shared/lib/app-router-context.shared-runtime'
import type { ReadonlyURLSearchParams } from 'next/navigation'

interface CreateUrlProps {
  paramsAndValueObj: Record<string, string | number>
  searchParams: ReadonlyURLSearchParams
  pathName: string
  router?: AppRouterInstance
  hash?: string
}

export function createUrl({ paramsAndValueObj, pathName, router, searchParams, hash }: CreateUrlProps) {
  const params = new URLSearchParams(searchParams)

  Object.entries(paramsAndValueObj).forEach(([param, value]) => {
    params.set(param, value.toString())
  })

  if (router) {
    router.push(`${pathName}?${params.toString()}`, { scroll: false })
  }

  if (hash) {
    return `${pathName}?${params.toString()}#${hash}`
  }

  return `${pathName}?${params.toString()}`
}
