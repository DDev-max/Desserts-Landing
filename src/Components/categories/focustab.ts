import type { Dispatch, MutableRefObject, SetStateAction } from 'react'

interface FocustabProps {
  e: React.KeyboardEvent<HTMLDivElement>
  setSelectedBtn: Dispatch<SetStateAction<number>>
  tabsBtnsRef: MutableRefObject<HTMLAnchorElement[]>
}

export function focusTab({ e, setSelectedBtn, tabsBtnsRef }: FocustabProps) {
  setSelectedBtn((prev: number) => {
    let selectionIdx = prev

    if (e.key === 'ArrowRight') {
      selectionIdx += 1
      if (selectionIdx >= tabsBtnsRef.current.length) {
        selectionIdx = 0
      }
    } else if (e.key === 'ArrowLeft') {
      selectionIdx -= 1
      if (selectionIdx < 0) {
        selectionIdx = tabsBtnsRef.current.length - 1
      }
    }

    tabsBtnsRef.current[selectionIdx].focus()

    return selectionIdx
  })
}
