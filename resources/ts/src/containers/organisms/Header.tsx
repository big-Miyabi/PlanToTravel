import React, { FC, useState } from 'react'
import Header from '../../components/organisms/Header'

const HeaderContainer: FC = () => {
  const [isMenuActive, setIsMenuActive] = useState(false)
  const [isSearchActive, setIsSearchActive] = useState(
    false
  )

  return <Header />
}

export default HeaderContainer
