import type { FetchDataProps } from '@/data/types'
import { ServerNotLaunched } from './ErrorServerNotLaunched'

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
      if (/fetch failed/i.test(error.message)) {
        throw new ServerNotLaunched('Json server is not launched')
      } else {
        console.error(`Fetch error: ${error.name}`)
        throw error
      }
    } else {
      console.error('Unexpected error')
      throw error
    }
  }
}
