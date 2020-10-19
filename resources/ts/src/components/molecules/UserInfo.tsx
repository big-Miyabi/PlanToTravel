import React, { FC } from 'react'
import FontAwesomeIconBtn from '../atoms/FontAwesomeIconBtn'
import { faUserCircle } from '@fortawesome/free-solid-svg-icons'

type Props = {
  className: string
  iconUrl: string
  name: string
}

const UserInfo: FC<Props> = ({
  className,
  iconUrl,
  name,
}) => {
  return (
    <div className={className + ' ' + 'user-info'}>
      <div className="user-info__icon-name-wrap">
        <FontAwesomeIconBtn
          className="user-info__user-icon"
          icon={faUserCircle}
        />
        <div className="user-info__name-wrap">
          <p className="user-info__name">{name}</p>
        </div>
      </div>
      <p className="user-info__show-profile">
        マイプロフィールを見る
      </p>
    </div>
  )
}

export default UserInfo
