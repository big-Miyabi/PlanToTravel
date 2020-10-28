import React, { FC } from 'react'
import BadFace from '../atoms/svg/BadFace'
import SosoFace from '../atoms/svg/SosoFace'
import GoodFace from '../atoms/svg/GoodFace'
import DashedCircle from '../atoms/svg/DashedCircle'

type Props = {
  index: number
  classNamePrefix: string
  selectedClass?: string
  onClick?: () => void
}

const RatingSelectIcon: FC<Props> = ({
  index,
  classNamePrefix,
  selectedClass = '',
  onClick,
}) => {
  switch (index) {
    case 1:
      return (
        <BadFace
          className={
            classNamePrefix + 'bad' + selectedClass
          }
          onClick={onClick}
        />
      )
    case 2:
      return (
        <SosoFace
          className={
            classNamePrefix + 'soso' + selectedClass
          }
          onClick={onClick}
        />
      )
    case 3:
      return (
        <GoodFace
          className={
            classNamePrefix + 'good' + selectedClass
          }
          onClick={onClick}
        />
      )
    default:
      return (
        <DashedCircle
          className={classNamePrefix + 'none'}
          onClick={onClick}
        />
      )
  }
}

export default RatingSelectIcon
