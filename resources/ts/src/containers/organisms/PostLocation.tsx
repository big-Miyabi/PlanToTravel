import React, { FC, useState } from 'react'
import * as H from 'history'
import moment from 'moment'
import { useDispatch, useSelector } from 'react-redux'
import { setCreatedItinerary } from '../../actions/post'
import { RootState } from '../../reducers'
import PostLocation from '../../components/organisms/PostLocation'
import { Place, initialPlace } from '../../utilities/types'
import axios from 'axios'

type Props = {
  history: H.History
}

const PostLocationContainer: FC<Props> = ({ history }) => {
  const dispatch = useDispatch()
  const { title, dateS, dateF, people, tags } = useSelector(
    (state: RootState) => state.postReducer
  )
  const dateDiff =
    moment(dateF).diff(moment(dateS), 'days') + 1

  const initialItinerary: Place[][] = [
    ...Array(dateDiff),
  ].map(() => [initialPlace])
  const [itinerary, setItinerary] = useState<Place[][]>(
    initialItinerary
  )

  const uid = useSelector(
    (state: RootState) => state.loginReducer.id
  )
  const header = useSelector(
    (state: RootState) => state.postReducer.src
  )

  const onClickNext = () => {
    const sliced = itinerary.slice()
    setItinerary(sliced)
    dispatch(setCreatedItinerary(sliced))
    console.log(sliced)
    axios
      .post('/api/create', {
        uid,
        title,
        header: 'test',
        people,
        day_s: dateS,
        day_f: dateF,
        tag_name: tags,
        is_public: false, // 後で追加
        itinerary: sliced,
      })
      .then((res) => {
        console.log(res.data)
      })
      .catch((error) => {
        console.log(error)
      })
  }

  return (
    <PostLocation
      history={history}
      dateS={dateS}
      dateDiff={dateDiff}
      itinerary={itinerary}
      setItinerary={setItinerary}
      onClickNext={onClickNext}
    />
  )
}

export default PostLocationContainer
