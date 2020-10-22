import React, { FC, useState, useRef } from 'react'
import * as H from 'history'
import { useDispatch } from 'react-redux'
import { setPostProgressIndex } from '../../actions/post'
import PostOverView from '../../components/organisms/PostOverView'

type Props = {
  history: H.History
}

const PostOverviewContainer: FC<Props> = ({ history }) => {
  const dispatch = useDispatch()
  const [title, setTitle] = useState<string>('')
  const [tag, setTag] = useState<string>('')
  const [dateS, setDateS] = useState<string>('')
  const [dateF, setDateF] = useState<string>('')
  const [people, setPeople] = useState<number>(0)
  const [tags, setTags] = useState<string[]>([])
  const tagInputRef = useRef<HTMLInputElement>(null)

  const addTag = () => {
    const input = tagInputRef.current
    if (input === null) return
    if (tags.length >= 5) return
    if (input.value.length > 12) return
    if (input.value === '') return
    const regexp = /^\s+(?!.+)/g // 空白のみの時
    if (regexp.test(input.value)) return
    tags.push(tag.trim()) // trimは前後の空白を削除するメソッド
    setTags(tags.slice())
    input.value = ''
    setTag('')
  }

  const deleteTag = (index: number) => {
    tags.splice(index, 1)
    setTags(tags.slice())
  }

  const goToNext = () => {
    dispatch(setPostProgressIndex(1))
    history.push('/post/location')
  }

  return (
    <PostOverView
      setTitle={setTitle}
      goToNext={goToNext}
      tags={tags}
      addTag={addTag}
      deleteTag={deleteTag}
      setTag={setTag}
      tagInputRef={tagInputRef}
      setDateS={setDateS}
      setDateF={setDateF}
      setPeople={setPeople}
    />
  )
}

export default PostOverviewContainer
