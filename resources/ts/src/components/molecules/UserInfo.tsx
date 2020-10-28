import React, { FC } from 'react'
import FontAwesomeIconBtn from '../atoms/FontAwesomeIconBtn'
import { faUserCircle } from '@fortawesome/free-solid-svg-icons'
import { getClassName } from '../../utilities/utilFunc'

type Props = {
  classNamePrefix: string
  iconUrl: string
  name: string
  isShowProfileLink?: boolean
}

const UserInfo: FC<Props> = ({
  classNamePrefix,
  iconUrl,
  name,
  isShowProfileLink = false,
}) => {
  const prefix = {
    common: 'user-info',
    unique: classNamePrefix,
  }

  return (
    <div className={getClassName(prefix, '')}>
      <div
        className={getClassName(prefix, 'icon-name-wrap')}
      >
        <FontAwesomeIconBtn
          className={getClassName(prefix, 'user-icon')}
          icon={faUserCircle}
        />
        <div className={getClassName(prefix, 'name-wrap')}>
          <p className={getClassName(prefix, 'name')}>
            {name}
          </p>
        </div>
      </div>
      {isShowProfileLink ? (
        <p className={getClassName(prefix, 'show-profile')}>
          マイプロフィールを見る
        </p>
      ) : (
        <></>
      )}
    </div>
  )
}

export default UserInfo
