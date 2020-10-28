import React, { FC, useState, useRef } from 'react'
import { useDispatch } from 'react-redux'
import * as H from 'history'
import moment from 'moment'
import {
  setPostProgressIndex,
  setPostOverview,
} from '../../actions/post'
import PostOverView from '../../components/organisms/PostOverView'
import { useHooks } from '../../utilities/customHook'

type Props = {
  history: H.History
}

const PostOverviewContainer: FC<Props> = ({ history }) => {
  const dispatch = useDispatch()
  moment.locale('ja')
  const [title, setTitle] = useState<string>('')
  const [tag, setTag] = useState<string>('')
  const [dateS, setDateS] = useState<string>(
    moment().format('YYYY-MM-DD')
  )
  const [dateF, setDateF] = useState<string>(
    moment().format('YYYY-MM-DD')
  )
  const [people, setPeople] = useState<number>(1)
  const [tags, setTags] = useState<string[]>([])
  const [isBtnDisabled, setIsBtnDisabled] = useState<
    boolean
  >(true)
  const [isPublic, setIsPublic] = useHooks<boolean, string>(
    false,
    () => {
      const isBefore = moment().isBefore(moment(dateS))
      setIsBtnDisabled(isBefore)
      if (isBefore) {
        setIsPublic(false)
      }
    },
    [dateS]
  )
  const tagInputRef = useRef<HTMLInputElement>(null)

  const addTag = () => {
    const input = tagInputRef.current
    if (input === null) return
    if (tags.length >= 5) return
    if (input.value.length > 12) return
    if (input.value === '') return
    const regexp = /^\s+(?!.+)/g // 空白のみの時
    if (regexp.test(input.value)) return
    const trimedTag = tag.trim() // trimは前後の空白を削除するメソッド
    if (tags.includes(trimedTag)) return
    tags.push(trimedTag)
    setTags(tags.slice())
    input.value = ''
    setTag('')
  }

  const deleteTag = (index: number) => {
    tags.splice(index, 1)
    setTags(tags.slice())
  }

  const validate: () => { error: string } = () => {
    if (!title) return { error: 'タイトルが未入力です' }
    if (moment(dateS).isAfter(moment(dateF)))
      return {
        error: '終了日より前に開始日を設定してください',
      }
    const dateDiff =
      moment(dateF).diff(moment(dateS), 'days') + 1
    if (dateDiff > 14)
      return {
        error: '行程表の期間は2週間以内に設定してください',
      }
    if (people < 1 || String(people).length > 11)
      return { error: '人数が不正です' }

    return { error: '' }
  }

  const goToNext = () => {
    const { error } = validate()
    if (error) {
      alert(error)

      return
    }
    dispatch(
      setPostOverview(
        title,
        dateS,
        dateF,
        people,
        tags,
        isPublic
      )
    )
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
      isPublic={isPublic}
      setIsPublic={setIsPublic}
      isBtnDisabled={isBtnDisabled}
    />
  )
}

export default PostOverviewContainer
