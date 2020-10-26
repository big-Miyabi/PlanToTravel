import React, { FC } from 'react'
import * as H from 'history'
import { colors } from '../../utilities/colors'
import EditPlace from '../../containers/molecules/EditPlace'
import EditPlaceDetail from '../../containers/organisms/EditPlaceDetail'
import FontAwesomeIconBtn from '../atoms/FontAwesomeIconBtn'
import { faPlus } from '@fortawesome/free-solid-svg-icons'
import MapIcon from '../atoms/svg/MapIcon'
import { Moment } from 'moment'
import EditDailyItinerary from '../../containers/organisms/EditDailyItinerary'

type Props = {
  className: string
  history: H.History
  dateDiff: number
  mDateS: Moment
}

const EditItinerary: FC<Props> = ({
  className,
  history,
  dateDiff,
  mDateS,
}) => {
  return (
    <div className={className + ' ' + 'edit-itinerary'}>
      {[...Array(dateDiff)].map((_, index) => {
        const date = mDateS
          .add(index, 'd')
          .format('YYYY.MM.DD')

        return (
          <EditDailyItinerary
            history={history}
            date={date}
            dateIndex={index}
            key={index}
          />
        )
      })}
    </div>
  )
}

export default EditItinerary
