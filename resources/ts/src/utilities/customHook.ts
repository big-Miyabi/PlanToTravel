import { Dispatch, useState, useEffect } from 'react'

export const usePopupMenu = (
  overlayClassName: string
): [boolean, Dispatch<React.SetStateAction<boolean>>] => {
  const [isShown, setIsShown] = useState<boolean>(false)

  useEffect(() => {
    const overlay = document.getElementsByClassName(
      overlayClassName
    )[0] as HTMLElement

    const documentClickHandler = () => {
      if (!isShown) return
      setIsShown(false)
      overlay.removeEventListener(
        'click',
        documentClickHandler
      )
    }

    overlay.addEventListener('click', documentClickHandler)
  }, [isShown])

  return [isShown, setIsShown]
}
