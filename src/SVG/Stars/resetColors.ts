import type { Dispatch, MutableRefObject, SetStateAction } from 'react'

interface ResetColorsProps {
  setColor: Dispatch<SetStateAction<string[]>>
  isRated: MutableRefObject<boolean>
}

export function resetColors({ isRated, setColor }: ResetColorsProps) {
  const emptyStarsArray: string[] = Array(5).fill('')

  if (!isRated.current) {
    setColor(emptyStarsArray)
  }
}
