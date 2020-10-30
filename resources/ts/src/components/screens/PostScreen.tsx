import React, { FC } from 'react'
import * as H from 'history'
import Header from '../../containers/organisms/Header'
import Menu from '../../components/organisms/Menu'
import ProgressBar from '../../components/molecules/ProgressBar'
import PostOverview from '../../containers/organisms/PostOverview'
import PostLocation from '../../containers/organisms/PostLocation'
import MapScreen from '../../containers/screens/MapScreen'
import PostConfirm from '../../containers/organisms/PostConfirm'
import ItineraryFirstView from '../../containers/molecules/ItineraryFirstView'

type Props = {
  pageIndex: number
  history: H.History
  shouldAppearMap: boolean
}

const PostScreen: FC<Props> = ({
  pageIndex,
  history,
  shouldAppearMap,
}) => {
  const shownClass = shouldAppearMap
    ? ' post-screen__map-wrap--shown'
    : ''

  return (
    <div className="post-screen">
      <Header isPost={true} />
      <ItineraryFirstView />
      <Menu />
      <ProgressBar
        className="post-screen__progress-map"
        names={['概要', '場所', '確認']}
        index={pageIndex}
      />
      {pageIndex === 0 ? (
        <PostOverview history={history} />
      ) : pageIndex === 1 ? (
        <PostLocation history={history} />
      ) : (
        <PostConfirm history={history} />
      )}

      <div className={'post-screen__map-wrap' + shownClass}>
        <MapScreen />
      </div>
    </div>
  )
}

export default PostScreen
