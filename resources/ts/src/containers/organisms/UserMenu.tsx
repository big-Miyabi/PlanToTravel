import React, { FC } from 'react'
import UserMenu from '../../components/organisms/UserMenu'

type Props = {
  className: string
}

const UserMenuContainer: FC<Props> = ({ className }) => {
  const name = 'こんこん'
  const iconUrl = ''

  return (
    <UserMenu
      className={className}
      name={name}
      iconUrl={iconUrl}
    />
  )
}

export default UserMenuContainer
