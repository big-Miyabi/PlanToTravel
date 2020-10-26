import React, { FC } from 'react'
import BadFace from '../atoms/svg/BadFace'
import SosoFace from '../atoms/svg/SosoFace'
import GoodFace from '../atoms/svg/GoodFace'
import DashedCircle from '../atoms/svg/DashedCircle'

type Props = {
  index: number
  classNamePrefix: string
  selectedClass?: string
}

const RatingIcons: FC<Props> = ({
  index,
  classNamePrefix,
  selectedClass = '',
}) => {
  switch (index) {
    case 1:
      return (
        <BadFace
          className={
            classNamePrefix + 'bad' + selectedClass
          }
        />
      )
    case 2:
      return (
        <SosoFace
          className={
            classNamePrefix + 'soso' + selectedClass
          }
        />
      )
    case 3:
      return (
        <GoodFace
          className={
            classNamePrefix + 'good' + selectedClass
          }
        />
      )
    default:
      return (
        <DashedCircle
          className={classNamePrefix + 'none'}
        />
      )
  }
}

export default RatingIcons
