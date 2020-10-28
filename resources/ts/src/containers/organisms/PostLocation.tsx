import React, { FC, useState, useEffect } from 'react'
import * as H from 'history'
import moment from 'moment'
import { useDispatch, useSelector } from 'react-redux'
import {
  setCreatedItinerary,
  setPostProgressIndex,
} from '../../actions/post'
import { RootState } from '../../reducers'
import PostLocation from '../../components/organisms/PostLocation'
import { Place, initialPlace } from '../../utilities/types'

type Props = {
  history: H.History
}

const useValidate = (
  validate: () => { error: string },
  itinerary: Place[][]
): [string] => {
  const [validateError, setValidateError] = useState<
    string
  >('')

  useEffect(() => {
    const { error } = validate()
    setValidateError(error)
    console.log(error)
  }, [itinerary])

  return [validateError]
}

const PostLocationContainer: FC<Props> = ({ history }) => {
  const dispatch = useDispatch()
  const { dateS, dateF } = useSelector(
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

  const updateItinerary = () => {
    const newItinerary = itinerary.map((v1) => {
      const newValue = v1.map((v2) => {
        return Object.assign(v2)
      })

      return newValue.slice()
    })
    setItinerary(newItinerary.slice())
  }

  const validate: () => { error: string } = () => {
    let error = ''
    itinerary.some((places) => {
      if (error) return true
      places.some((place) => {
        if (
          !place.name ||
          !place.location?.lat ||
          !place.location?.lng
        ) {
          error =
            '1日につき最低一つは場所を登録してください'

          return true
        }
      })
    })

    return { error }
  }

  const [validateError] = useValidate(validate, itinerary)

  const goToNext = () => {
    if (validateError) {
      alert(validateError)

      return
    }
    const sliced = itinerary.slice()
    setItinerary(sliced)
    dispatch(setCreatedItinerary(sliced))
    dispatch(setPostProgressIndex(2))
    history.push('/post/confirm')
  }

  const returnToPrevious = () => {
    history.push('/post/overview')
  }

  return (
    <PostLocation
      dateS={dateS}
      dateDiff={dateDiff}
      itinerary={itinerary}
      updateItinerary={updateItinerary}
      goToNext={goToNext}
      returnToPrevious={returnToPrevious}
      validateError={validateError}
    />
  )
}

export default PostLocationContainer
