import { ToggleMenuProps } from "@/app/data/types"

export function toggleMenu({ menuIdx, setMenuVisible }: ToggleMenuProps) {

  setMenuVisible((prev: boolean[]) => {

    const copy = [...prev]
    copy[menuIdx] = !copy[menuIdx]


    return copy
  })
  
}

