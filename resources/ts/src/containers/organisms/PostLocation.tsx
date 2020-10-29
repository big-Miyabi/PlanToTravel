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
import { checkObjEqual } from '../../utilities/utilFunc'

type Props = {
  history: H.History
}

const checkItineraryIsInitial = (
  obj1: Place[][],
  obj2: Place[][]
): Promise<boolean> => {
  return new Promise((resolve) => {
    if (obj1.length !== obj2.length) resolve(false)

    obj1.forEach((places1, dateIndex) => {
      const places2 = obj2[dateIndex]
      if (places1.length !== places2.length) resolve(false)

      places1.forEach((place1, placeIndex) => {
        const place2 = places2[placeIndex]
        if (!checkObjEqual(place1, place2)) resolve(false)

        const location1 = place1.location
        const location2 = place2.location
        if (
          location1 &&
          location2 &&
          !checkObjEqual(location1, location2)
        ) {
          resolve(false)
        }
      })
    })
    resolve(true)
  })
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
  const {
    dateS,
    dateF,
    itinerary: reduxItinerary,
  } = useSelector((state: RootState) => state.postReducer)
  const dateDiff =
    moment(dateF).diff(moment(dateS), 'days') + 1

  const initialItinerary: Place[][] = [
    ...Array(dateDiff),
  ].map(() => [initialPlace])
  const [itinerary, setItinerary] = useState<Place[][]>(
    initialItinerary
  )
  // メモリリークを防ぐのに必要
  const [isMounted, setIsMounted] = useState<boolean>(false)

  useEffect(() => {
    const setReduxItinerary = async () => {
      const isSelectorItineraryInitial = await checkItineraryIsInitial(
        reduxItinerary,
        [[initialPlace]]
      )
      // Redux上の行程表が初期値だったら何もしない
      if (isSelectorItineraryInitial) return

      const lengthDiff = Math.abs(
        reduxItinerary.length - initialItinerary.length
      )
      if (
        reduxItinerary.length >= initialItinerary.length
      ) {
        reduxItinerary.splice(-1, lengthDiff)
      } else {
        const emptyArray = [...Array(lengthDiff)]
        emptyArray.forEach(() => {
          reduxItinerary.push([initialPlace])
        })
      }
      setItinerary(reduxItinerary.slice())
    }

    setReduxItinerary()
  }, [reduxItinerary])

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
