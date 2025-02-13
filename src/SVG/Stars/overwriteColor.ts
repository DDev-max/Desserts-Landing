interface OverwriteColorProps {
  idx: number
  color: string[]
}

export function overwriteColor({ color, idx }: OverwriteColorProps) {
  return color[idx] ? color[idx] : ''
}
