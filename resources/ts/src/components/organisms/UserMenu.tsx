import React, { FC } from 'react'
import {
  faHome,
  faHeart,
  faBookmark,
  faCog,
  faSignOutAlt,
  faMapMarkerAlt,
} from '@fortawesome/free-solid-svg-icons'
import UserInfo from '../molecules/UserInfo'
import MenuItem from '../molecules/MenuItem'

type Props = {
  className: string
  name: string
  iconUrl: string
  logout: () => void
}

const UserMenu: FC<Props> = ({
  className,
  name,
  iconUrl,
  logout,
}) => {
  return (
    <div className={className + ' ' + 'user-menu'}>
      <UserInfo
        className="user-menu__user-info"
        name={name}
        iconUrl={iconUrl}
      />
      <div className="items-wrap">
        <MenuItem
          className="items-wrap__home"
          title={'Home'}
          icon={faHome}
        />
        <MenuItem
          className="items-wrap__itinerary"
          title={'作成した行程表'}
          icon={faMapMarkerAlt}
        />
        <MenuItem
          className="items-wrap__favorite"
          title={'いいね'}
          icon={faHeart}
        />
        <MenuItem
          className="items-wrap__bookmark"
          title={'ブックマーク'}
          icon={faBookmark}
        />
        <MenuItem
          className="items-wrap__setting"
          title={'設定'}
          icon={faCog}
        />
        <MenuItem
          className="items-wrap__logout"
          title={'ログアウト'}
          icon={faSignOutAlt}
          onClick={logout}
        />
      </div>

      <p className="policy">
        <span className="policy__terms">利用規約</span>・
        <span className="policy__privacy-policy">
          プライバシーポリシー
        </span>
      </p>
    </div>
  )
}

export default UserMenu
