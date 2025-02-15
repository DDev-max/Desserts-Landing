import type { Dispatch, SetStateAction } from 'react'

interface FetchDataProps {
  URL: string
  setIsLoading?: Dispatch<SetStateAction<boolean>>
}

export async function fetchData<T>({ URL, setIsLoading }: FetchDataProps) {
  try {
    const response = await fetch(URL)

    if (!response.ok) {
      throw new Error(`Fetch error: ${response.status}, ${response.statusText}`)
    }

    const format: T = await response.json()

    if (setIsLoading) setIsLoading(false)

    return format
  } catch (error) {
    if (error instanceof Error) {
      console.error(`Fetch error: ${error.name}`)
      throw error
    }
  }
}
