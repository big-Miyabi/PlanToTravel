import React, { FC } from 'react'
import SunnyPin from './svg/SunnyPin'
import CloudyPin from './svg/CloudyPin'
import RainyPin from './svg/RainyPin'
import SnowyPin from './svg/SnowyPin'
import MoonyPin from './svg/MoonyPin'
import { OpacityGradientType } from '../../utilities/types'

type Props = {
  className: string
  whether: string
  index?: number
}

const WhetherPin: FC<Props> = ({
  className,
  whether,
  index,
}) => {
  const opacity: OpacityGradientType[] = [
    {
      start: 1,
      end: 0.8421,
    },
    {
      start: 0.6352,
      end: 0.4774,
    },
    {
      start: 0.2711,
      end: 0.1132,
    },
  ]

  switch (whether) {
    case 'sun':
      return (
        <SunnyPin
          className={className + ' ' + 'whether-pin'}
          opacityGradient={
            index !== undefined ? opacity[index] : undefined
          }
        />
      )
    case 'cloud':
      return (
        <CloudyPin
          className={className + ' ' + 'whether-pin'}
          opacityGradient={
            index !== undefined ? opacity[index] : undefined
          }
        />
      )
    case 'rain':
      return (
        <RainyPin
          className={className + ' ' + 'whether-pin'}
          opacityGradient={
            index !== undefined ? opacity[index] : undefined
          }
        />
      )
    case 'snow':
      return (
        <SnowyPin
          className={className + ' ' + 'whether-pin'}
          opacityGradient={
            index !== undefined ? opacity[index] : undefined
          }
        />
      )
    default:
      return (
        <MoonyPin
          className={className + ' ' + 'whether-pin'}
          opacityGradient={
            index !== undefined ? opacity[index] : undefined
          }
        />
      )
  }
}

export default WhetherPin
