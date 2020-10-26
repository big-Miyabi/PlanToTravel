import React, { FC, useState } from 'react'
import EditTransport from '../../components/molecules/EditTransport'
import {
  Transport,
  initialTransports,
} from '../../utilities/types'
import { usePopupMenu } from '../../utilities/customHook'

type Props = {
  className: string
  dateIndex: number
  placeIndex: number
}

const EditTransportContainer: FC<Props> = ({
  className,
  dateIndex,
  placeIndex,
}) => {
  const overlayClass = `transport-overlay__${dateIndex}-${placeIndex}`
  const [isShownBox, setIsShownBox] = usePopupMenu(
    overlayClass
  )
  const [transports, setTransports] = useState<Transport[]>(
    initialTransports
  )
  const [selectedIndex, setSelectedIndex] = useState<
    number
  >(7)

  return (
    <EditTransport
      className={className}
      transports={transports}
      selectedIndex={selectedIndex}
      setSelectedIndex={setSelectedIndex}
      overlayClass={overlayClass}
      isShownBox={isShownBox}
      setIsShownBox={setIsShownBox}
    />
  )
}

export default EditTransportContainer
