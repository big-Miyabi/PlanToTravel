import React, {
  FC,
  useState,
  Dispatch,
  useRef,
} from 'react'
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
      return ''
  }
}

const getDistance = async (
  places: Place[],
  placeIndex: number,
  setDistance: Dispatch<React.SetStateAction<string>>,
  inputRef: React.RefObject<HTMLInputElement>,
  setTransportDetail: Dispatch<React.SetStateAction<string>>
) => {
  const isLast = places.length - 1 === placeIndex
  if (isLast || !inputRef.current) return

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

  const setByHubeny = () => {
    if (!inputRef.current) return
    const distance = getDistanceByHubeny(
      originLocation.lat,
      originLocation.lng,
      destinationLocation.lat,
      destinationLocation.lng
    )
    setDistance(distance)
    inputRef.current.value = ''
    setTransportDetail('')
  }

  const mode = getMode(transport)
  if (!mode) {
    setByHubeny()

    return
  }

  const {
    result,
    isSuccess,
  } = await googleByAxios.getDistance({
    origin,
    destination,
    mode,
  })

  if (!isSuccess) {
    setByHubeny()

    return
  }

  setDistance(result.distance)
  if (result.duration) {
    inputRef.current.value = result.duration
    setTransportDetail(result.duration)

    return
  }

  inputRef.current.value = ''
  setTransportDetail('')
}

const EditTransportContainer: FC<Props> = ({
  className,
  dateIndex,
  placeIndex,
  places,
}) => {
  const overlayClass = `transport-overlay__${dateIndex}-${placeIndex}`
  const inputRef = useRef<HTMLInputElement>(null)
  const [isShownBox, setIsShownBox] = usePopupMenu(
    overlayClass
  )
  const [distance, setDistance] = useHooks<string>(
    '',
    () => {
      places[placeIndex].distance = distance
    }
  )
  const [transportDetail, setTransportDetail] = useHooks<
    string
  >('', (state) => {
    places[placeIndex].transportDetail = state
  })
  const [selectedIndex, setSelectedIndex] = useHooks<
    number,
    string | null
  >(
    7,
    () => {
      places[placeIndex].transport =
        transports[selectedIndex]
      getDistance(
        places,
        placeIndex,
        setDistance,
        inputRef,
        setTransportDetail
      )
    },
    [places[placeIndex + 1].name]
  )
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
      distance={distance}
      inputRef={inputRef}
    />
  )
}

export default EditTransportContainer
