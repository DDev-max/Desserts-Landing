import { emptyStarColorCode, starColorCode } from '@/data/consts'

interface DefaultColorProps {
  idx: number
  qtty: number
}

export function defaultColor({ idx, qtty }: DefaultColorProps) {
  return Math.round(qtty) > idx ? starColorCode : emptyStarColorCode
}
