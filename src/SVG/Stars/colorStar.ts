import { emptyStarColorCode, starColorCode } from '@/data/consts'
import type { Dispatch, MutableRefObject, SetStateAction } from 'react'

interface ColorStarProps {
  idx: number
  setColor: Dispatch<SetStateAction<string[]>>
  isRated: MutableRefObject<boolean>
  color: string[]
}

export function colorStar({ idx, isRated, setColor, color }: ColorStarProps) {
  if (!isRated.current) {
    const newColors = color.map((_, i) => (i <= idx ? starColorCode : emptyStarColorCode))
    setColor(newColors)
  }
}
