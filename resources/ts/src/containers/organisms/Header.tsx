import React, { FC, useState } from 'react'
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

  const documentClickHandler = () => {
    console.log(document)
    switchMenuDisplay()
    document.body.removeEventListener(
      'click',
      documentClickHandler
    )
  }

  document.body.addEventListener(
    'click',
    documentClickHandler
  )

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
