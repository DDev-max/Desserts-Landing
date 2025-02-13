import type { ResetColorsProps } from '@/data/types'

export function resetColors({ isRated, setColor }: ResetColorsProps) {
  const emptyStarsArray: string[] = Array(5).fill('')

  if (!isRated.current) {
    setColor(emptyStarsArray)
  }
}
