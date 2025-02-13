import type { HandleEnterLeaveProps } from '@/data/types'
import { toggleMenu } from './toggleMenu'

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
