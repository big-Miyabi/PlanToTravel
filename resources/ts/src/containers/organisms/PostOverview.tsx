import React, { FC, useState } from 'react'
import * as H from 'history'
import { useDispatch } from 'react-redux'
import { setPostProgressIndex } from '../../actions/post'
import PostOverView from '../../components/organisms/PostOverView'

type Props = {
  history: H.History
}

const PostOverviewContainer: FC<Props> = ({ history }) => {
  const dispatch = useDispatch()
  const [tag, setTag] = useState<string>('')
  const [dateS, setDateS] = useState<string>('')
  const [dateF, setDateF] = useState<string>('')
  const [people, setPeople] = useState<number>(0)
  const [tags, setTags] = useState<string[]>([])

  const addTag = () => {
    tags.push(tag)
    setTags(tags.slice())
  }

  const goToNext = () => {
    dispatch(setPostProgressIndex(1))
    history.push('/post/location')
  }

  return (
    <PostOverView
      goToNext={goToNext}
      tag={tag}
      tags={tags}
      addTag={addTag}
      setTag={setTag}
      setDateS={setDateS}
      setDateF={setDateF}
      setPeople={setPeople}
    />
  )
}

export default PostOverviewContainer
