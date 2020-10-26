import {
  faBicycle,
  faBus,
  faCar,
  faPlane,
  faShip,
  faShoePrints,
  faTrain,
} from '@fortawesome/free-solid-svg-icons'
import React, { FC } from 'react'
import FontAwesomeIconBtn from '../atoms/FontAwesomeIconBtn'
import DashedCircle from '../atoms/svg/DashedCircle'

type Props = {
  index: number
  classNamePrefix: string
  selectedClass?: string
  onClick: () => void
}

const TransportSelectIcon: FC<Props> = ({
  index,
  classNamePrefix,
  selectedClass = '',
  onClick,
}) => {
  switch (index) {
    case 0:
      return (
        <FontAwesomeIconBtn
          className={
            classNamePrefix + 'walking' + selectedClass
          }
          onClick={onClick}
          icon={faShoePrints}
        />
      )
    case 1:
      return (
        <FontAwesomeIconBtn
          className={
            classNamePrefix + 'bicycle' + selectedClass
          }
          onClick={onClick}
          icon={faBicycle}
        />
      )
    case 2:
      return (
        <FontAwesomeIconBtn
          className={
            classNamePrefix + 'car' + selectedClass
          }
          onClick={onClick}
          icon={faCar}
        />
      )
    case 3:
      return (
        <FontAwesomeIconBtn
          className={
            classNamePrefix + 'bus' + selectedClass
          }
          onClick={onClick}
          icon={faBus}
        />
      )
    case 4:
      return (
        <FontAwesomeIconBtn
          className={
            classNamePrefix + 'train' + selectedClass
          }
          onClick={onClick}
          icon={faTrain}
        />
      )
    case 5:
      return (
        <FontAwesomeIconBtn
          className={
            classNamePrefix + 'ship' + selectedClass
          }
          onClick={onClick}
          icon={faShip}
        />
      )
    case 6:
      return (
        <FontAwesomeIconBtn
          className={
            classNamePrefix + 'airplane' + selectedClass
          }
          onClick={onClick}
          icon={faPlane}
        />
      )
    default:
      return (
        <DashedCircle
          className={
            classNamePrefix + 'none' + selectedClass
          }
          onClick={onClick}
        />
      )
  }
}

export default TransportSelectIcon
