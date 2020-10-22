import React, { FC, useState, useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { setShouldShowMenu } from '../../actions/menu'
import Header from '../../components/organisms/Header'
import PostHeader from '../../components/organisms/PostHeader'

type Props = {
  isPost?: boolean
}

const HeaderContainer: FC<Props> = ({ isPost = true }) => {
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

  // アンマウント時にメニューを閉じる
  useEffect(() => {
    return () => {
      dispatch(setShouldShowMenu(false))
    }
  }, [])

  return (
    <>
      {isPost ? (
        <Header
          isMenuActive={isMenuActive}
          isSearchActive={isSearchActive}
          switchMenuDisplay={switchMenuDisplay}
          switchSearchDisplay={switchSearchDisplay}
        />
      ) : (
        <PostHeader
          isMenuActive={isMenuActive}
          switchMenuDisplay={switchMenuDisplay}
        />
      )}
    </>
  )
}

export default HeaderContainer
