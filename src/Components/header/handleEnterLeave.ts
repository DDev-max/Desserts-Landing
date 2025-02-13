import type { Dispatch, MutableRefObject, SetStateAction } from 'react'
import { toggleMenu } from './toggleMenu'

interface HandleEnterLeaveProps {
  enter: boolean
  isMouse: MutableRefObject<boolean>
  setMenuVisible: Dispatch<SetStateAction<boolean[]>>
  menuVisible: boolean[]
}

export function handleEnterLeave({
  enter,
  isMouse,
  setMenuVisible,
  menuVisible,
}: HandleEnterLeaveProps) {
  if (enter) {
    isMouse.current = true
    toggleMenu({ menuIdx: 1, setMenuVisible })
  } else {
    if (!menuVisible[1]) return
    isMouse.current = false
    toggleMenu({ menuIdx: 1, setMenuVisible })
  }

  return
}
