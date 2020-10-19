import React, { FC } from 'react'
import SunnyPin from './svg/SunnyPin'
import CloudyPin from './svg/CloudyPin'
import RainyPin from './svg/RainyPin'
import SnowyPin from './svg/SnowyPin'
import MoonyPin from './svg/MoonyPin'

type Props = {
  className: string
  whether: string
}

const WhetherPin: FC<Props> = ({ className, whether }) => {
  switch (whether) {
    case 'sun':
      return (
        <SunnyPin
          className={className + ' ' + 'whether-pin'}
        />
      )
    case 'cloud':
      return (
        <CloudyPin
          className={className + ' ' + 'whether-pin'}
        />
      )
    case 'rain':
      return (
        <RainyPin
          className={className + ' ' + 'whether-pin'}
        />
      )
    case 'snow':
      return (
        <SnowyPin
          className={className + ' ' + 'whether-pin'}
        />
      )
    default:
      return (
        <MoonyPin
          className={className + ' ' + 'whether-pin'}
        />
      )
  }
}

export default WhetherPin
