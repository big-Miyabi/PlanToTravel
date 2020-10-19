import React, { FC, useState, useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { setShouldShowMenu } from '../../actions/menu'
import Header from '../../components/organisms/Header'

const HeaderContainer: FC = () => {
  const dispatch = useDispatch()
  const [isMenuActive, setIsMenuActive] = useState(false)
  const [isSearchActive, setIsSearchActive] = useState(
    false
  )
  const switchMenuDisplay = () => {
    setIsMenuActive(!isMenuActive)
    dispatch(setShouldShowMenu(!isMenuActive))
  }
  const switchSearchDisplay = () => {
    isSearchActive
      ? setIsSearchActive(false)
      : setIsSearchActive(true)
  }

  // メニュー外をクリックでメニューを閉じる処理
  useEffect(() => {
    const overlay = document.getElementsByClassName(
      'menu-overlay'
    )[0] as HTMLElement

    const documentClickHandler = () => {
      if (!isMenuActive) return
      switchMenuDisplay()
      overlay.removeEventListener(
        'click',
        documentClickHandler
      )
    }

    overlay.addEventListener('click', documentClickHandler)
  }, [isMenuActive])

  return (
    <Header
      isMenuActive={isMenuActive}
      isSearchActive={isSearchActive}
      switchMenuDisplay={switchMenuDisplay}
      switchSearchDisplay={switchSearchDisplay}
    />
  )
}

export default HeaderContainer
