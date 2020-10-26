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
import { colors } from '../../utilities/colors'
import FontAwesomeIconBtn from '../atoms/FontAwesomeIconBtn'
import DashedCircle from '../atoms/svg/DashedCircle'

type Props = {
  index: number
  className?: string
  classNamePrefix: string
  selectedClass?: string
  isSelectedIcon?: boolean
}

const TransportSelectIcon: FC<Props> = ({
  index,
  className = '',
  classNamePrefix,
  selectedClass = '',
  isSelectedIcon = false,
}) => {
  const propsClass = className ? `${className} ` : ''

  switch (index) {
    case 0:
      return (
        <FontAwesomeIconBtn
          className={
            propsClass +
            classNamePrefix +
            'walking' +
            selectedClass
          }
          icon={faShoePrints}
        />
      )
    case 1:
      return (
        <FontAwesomeIconBtn
          className={
            propsClass +
            classNamePrefix +
            'bicycle' +
            selectedClass
          }
          icon={faBicycle}
        />
      )
    case 2:
      return (
        <FontAwesomeIconBtn
          className={
            propsClass +
            classNamePrefix +
            'car' +
            selectedClass
          }
          icon={faCar}
        />
      )
    case 3:
      return (
        <FontAwesomeIconBtn
          className={
            propsClass +
            classNamePrefix +
            'bus' +
            selectedClass
          }
          icon={faBus}
        />
      )
    case 4:
      return (
        <FontAwesomeIconBtn
          className={
            propsClass +
            classNamePrefix +
            'train' +
            selectedClass
          }
          icon={faTrain}
        />
      )
    case 5:
      return (
        <FontAwesomeIconBtn
          className={
            propsClass +
            classNamePrefix +
            'ship' +
            selectedClass
          }
          icon={faShip}
        />
      )
    case 6:
      return (
        <FontAwesomeIconBtn
          className={
            propsClass +
            classNamePrefix +
            'airplane' +
            selectedClass
          }
          icon={faPlane}
        />
      )
    default: {
      const color = isSelectedIcon
        ? colors.navyBlue
        : colors.lightNavy

      return (
        <DashedCircle
          className={
            propsClass +
            classNamePrefix +
            'none' +
            selectedClass
          }
          color={color}
        />
      )
    }
  }
}

export default TransportSelectIcon
