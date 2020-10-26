import React, { FC, useState, useEffect } from 'react'
import * as H from 'history'
import { Coords } from 'google-map-react'
import { useDispatch, useSelector } from 'react-redux'
import { RootState } from '../../reducers'
import { setShouldAppearMap } from '../../actions/map'
import EditDailyItinerary from '../../components/organisms/EditDailyItinerary'

type Props = {
  history: H.History
  date: string
  index: number
}

const EditDailyItineraryContainer: FC<Props> = ({
  history,
  date,
  index,
}) => {
  const dispatch = useDispatch()
  const { index: mapIndex, lat, lng, name } = useSelector(
    (state: RootState) => state.mapReducer
  )
  const [isTarget, setIsTarget] = useState<boolean>(false)
  const [location, setLocation] = useState<Coords | null>(
    null
  )
  const [placeName, setPlaceName] = useState<string | null>(
    null
  )
  const showMap = () => {
    dispatch(setShouldAppearMap(true, index))
  }

  useEffect(() => {
    ;(() => { // eslint-disable-line
      if (mapIndex === index) {
        setIsTarget(true)

        return
      }
      if (isTarget) {
        setLocation({ lat, lng })
        setPlaceName(name)
        console.log('ok!')
        console.log(name)
      }
      setIsTarget(false)
    })()
  }, [mapIndex])

  return (
    <EditDailyItinerary
      history={history}
      date={date}
      index={index}
      showMap={showMap}
      placeName={placeName}
    />
  )
}

export default EditDailyItineraryContainer
