import type { OverwriteColorProps } from '@/data/types'

export function overwriteColor({ color, idx }: OverwriteColorProps) {
  return color[idx] ? color[idx] : ''
}
