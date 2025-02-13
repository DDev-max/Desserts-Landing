import { emptyStarColorCode, starColorCode } from '@/data/consts'
import type { ColorStarProps } from '@/data/types'

export function colorStar({ idx, isRated, setColor, color }: ColorStarProps) {
  if (!isRated.current) {
    const newColors = color.map((_, i) => (i <= idx ? starColorCode : emptyStarColorCode))
    setColor(newColors)
  }
}
