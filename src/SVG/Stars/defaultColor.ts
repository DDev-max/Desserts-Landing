import { emptyStarColorCode, starColorCode } from '@/data/consts'
import type { DefaultColorProps } from '@/data/types'

export function defaultColor({ idx, qtty }: DefaultColorProps) {
  return Math.round(qtty) > idx ? starColorCode : emptyStarColorCode
}
