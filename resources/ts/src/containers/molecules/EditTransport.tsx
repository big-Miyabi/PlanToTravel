import React, { FC, useState } from 'react'
import EditTransport from '../../components/molecules/EditTransport'
import {
  Transport,
  transports,
  Place,
} from '../../utilities/types'
import {
  usePopupMenu,
  useHooks,
} from '../../utilities/customHook'
import { googleByAxios } from '../../utilities/axios'
import { getDistanceByHubeny } from '../../utilities/utilFunc'

type Props = {
  className: string
  dateIndex: number
  placeIndex: number
  places: Place[]
}

const getMode = (transport: Transport): string => {
  switch (transport) {
    case '徒歩':
      return 'walking'
    case '自転車':
      return 'bicycling'
    case '車':
      return 'driving'
    default:
      return 'transit'
  }
}

const getDistance = async (
  places: Place[],
  placeIndex: number
) => {
  const isLast = places.length - 1 === placeIndex
  if (isLast) return

  const originLocation = places[placeIndex].location
  const destinationLocation =
    places[placeIndex + 1].location
  if (!originLocation || !destinationLocation) return

  const origin: string =
    originLocation.lat + ',' + originLocation.lng
  const destination: string =
    destinationLocation?.lat +
    ',' +
    destinationLocation?.lng
  const transport = places[placeIndex].transport
  const mode = getMode(transport)
  const {
    result,
    isSuccess,
  } = await googleByAxios.getDistance({
    origin,
    destination,
    mode,
  })
  console.log(result)

  const distance = getDistanceByHubeny(
    originLocation.lat,
    originLocation.lng,
    destinationLocation.lat,
    destinationLocation.lng
  )
  console.log(distance)
}

const EditTransportContainer: FC<Props> = ({
  className,
  dateIndex,
  placeIndex,
  places,
}) => {
  const overlayClass = `transport-overlay__${dateIndex}-${placeIndex}`

  const [isShownBox, setIsShownBox] = usePopupMenu(
    overlayClass
  )
  const [selectedIndex, setSelectedIndex] = useHooks<
    number
  >(7, () => {
    places[placeIndex].transport = transports[selectedIndex]
    getDistance(places, placeIndex)
  })

  const [transportDetail, setTransportDetail] = useHooks<
    string
  >('', (state) => {
    places[placeIndex].transportDetail = state
  })

  const [isInputActive, setIsInputActive] = useState<
    boolean
  >(false)

  return (
    <EditTransport
      className={className}
      transports={transports}
      selectedIndex={selectedIndex}
      setSelectedIndex={setSelectedIndex}
      overlayClass={overlayClass}
      isShownBox={isShownBox}
      setIsShownBox={setIsShownBox}
      setTransportDetail={setTransportDetail}
      isInputActive={isInputActive}
      setIsInputActive={setIsInputActive}
    />
  )
}

export default EditTransportContainer
