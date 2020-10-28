import React, {
  FC,
  Dispatch,
  useState,
  useRef,
  useEffect,
} from 'react'
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

const useValidate = (
  validate: () => { error: string },
  title: string,
  dateS: string,
  dateF: string,
  people: number
): [string] => {
  const [validateError, setValidateError] = useState<
    string
  >('')

  useEffect(() => {
    const { error } = validate()
    setValidateError(error)
  }, [title, dateS, dateF, people])

  return [validateError]
}

const PostOverviewContainer: FC<Props> = ({ history }) => {
  const dispatch = useDispatch()
  moment.locale('ja')
  const [title, setTitle] = useState<string>('')
  const [tag, setTag] = useState<string>('')
  const [dateS, setDateS] = useState<string>('')
  const [dateF, setDateF] = useState<string>('')
  const [people, setPeople] = useState<number>(1)
  const [tags, setTags] = useState<string[]>([])
  const [isBtnDisabled, setIsBtnDisabled] = useState<
    boolean
  >(true)
  const [isPublic, setIsPublic] = useHooks<boolean, string>(
    false,
    () => {
      const isBefore = moment().isBefore(moment(dateF))
      setIsBtnDisabled(isBefore)
      if (isBefore) {
        setIsPublic(false)
      }
    },
    [dateF]
  )

  const validate: () => { error: string } = () => {
    if (!title) return { error: 'タイトルが未入力です' }
    if (!dateS) return { error: '開始日が未入力です' }
    if (!dateF) return { error: '終了日が未入力です' }
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

  const [validateError] = useValidate(
    validate,
    title,
    dateS,
    dateF,
    people
  )

  const goToNext = () => {
    if (validateError) {
      alert(validateError)

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
      validateError={validateError}
    />
  )
}

export default PostOverviewContainer
