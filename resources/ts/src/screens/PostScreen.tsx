import React, {
  FC,
  Dispatch,
  useState,
  useEffect,
} from 'react'
import { RouteComponentProps as Props } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux'
import { RootState } from '../reducers/index'
import { setPostProgressIndex } from '../actions/post'
import Header from '../containers/organisms/Header'
import Menu from '../components/organisms/Menu'
import ProgressBar from '../components/molecules/ProgressBar'
import PostOverview from '../containers/organisms/PostOverview'

const checkAndMovePages = (
  path: string,
  previousIndex: number,
  pathnames: string[],
  setPageIndex: Dispatch<React.SetStateAction<number>>,
  props: Props,
  dispatch: Dispatch<any>
) => {
  if (path === '/post') {
    // '/post'は強制的に最初の画面に遷移
    setPageIndex(previousIndex)
    dispatch(setPostProgressIndex(0))

    return
  }
  const pathIndex = pathnames.indexOf(path)
  if (pathIndex === -1) return

  if (pathIndex < previousIndex) {
    // 戻るなどをして前の画面に遷移した時
    setPageIndex(pathIndex)
    dispatch(setPostProgressIndex(pathIndex))

    return
  }
  if (pathIndex === previousIndex) {
    // ページのリロードなどで同じ画面に遷移した時
    setPageIndex(previousIndex)

    return
  }
  // URLを手打ちで入力するなどして非正規の手続きで次の画面に遷移した時
  setPageIndex(previousIndex)
  props.history.push(pathnames[previousIndex])
}

const PostScreen: FC<Props> = (props) => {
  const dispatch = useDispatch()
  const previousIndex = useSelector(
    (state: RootState) => state.postReducer.progressIndex
  )
  const [pageIndex, setPageIndex] = useState(0)

  const pathnames = [
    '/post/overview',
    '/post/location',
    '/post/confirm',
  ]

  // pathによって画面状態を変更する
  useEffect(() => {
    const path = props.location.pathname
    checkAndMovePages(
      path,
      previousIndex,
      pathnames,
      setPageIndex,
      props,
      dispatch
    )
  }, [props.location.pathname])

  useEffect(() => {
    return () => {
      dispatch(setPostProgressIndex(0))
    }
  }, [])

  return (
    <div className="post-screen">
      <Header isPost={false} />
      <Menu />
      <ProgressBar
        className="post-screen__progress-map"
        names={['概要', '場所', '確認']}
        index={pageIndex}
      />
      {pageIndex === 0 ? (
        <PostOverview history={props.history} />
      ) : (
        <></>
      )}
    </div>
  )
}

export default PostScreen
