import type { Dispatch, SetStateAction } from 'react'

interface ToggleMenuProps {
  setMenuVisible: Dispatch<SetStateAction<boolean[]>>
  menuIdx: number
}

export function toggleMenu({ menuIdx, setMenuVisible }: ToggleMenuProps) {
  setMenuVisible((prev: boolean[]) => {
    const copy = [...prev]
    copy[menuIdx] = !copy[menuIdx]

    return copy
  })
}
