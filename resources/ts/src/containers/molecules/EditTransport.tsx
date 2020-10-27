import React, {
  FC,
  useState,
  useEffect,
  Dispatch,
} from 'react'
import EditTransport from '../../components/molecules/EditTransport'
import { Transport, Place } from '../../utilities/types'
import { usePopupMenu } from '../../utilities/customHook'

type Props = {
  className: string
  dateIndex: number
  placeIndex: number
  places: Place[]
}

const useTransport = (
  place: Place,
  transports: Transport[]
): [number, Dispatch<React.SetStateAction<number>>] => {
  const [selectedIndex, setSelectedIndex] = useState<
    number
  >(7)

  useEffect(() => {
    place.transport = transports[selectedIndex]
  }, [selectedIndex])

  return [selectedIndex, setSelectedIndex]
}

const EditTransportContainer: FC<Props> = ({
  className,
  dateIndex,
  placeIndex,
  places,
}) => {
  const overlayClass = `transport-overlay__${dateIndex}-${placeIndex}`
  const transports: Transport[] = [
    '徒歩',
    '自転車',
    '車',
    'バス',
    '電車',
    '船',
    '飛行機',
    '入力なし',
  ]

  const [isShownBox, setIsShownBox] = usePopupMenu(
    overlayClass
  )
  const [selectedIndex, setSelectedIndex] = useTransport(
    places[placeIndex],
    transports
  )

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
