import React, { FC } from 'react'
import EditTransport from '../../components/molecules/EditTransport'
import { transports, Place } from '../../utilities/types'
import {
  usePopupMenu,
  useHooks,
} from '../../utilities/customHook'

type Props = {
  className: string
  dateIndex: number
  placeIndex: number
  places: Place[]
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
  })

  const [transportDetail, setTransportDetail] = useHooks<
    string
  >('', (state) => {
    places[placeIndex].transportDetail = state
  })

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
    />
  )
}

export default EditTransportContainer
