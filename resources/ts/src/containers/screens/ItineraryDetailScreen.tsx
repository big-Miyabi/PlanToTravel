import React, { FC } from 'react'
import { postByAxios } from '../../utilities/axios'
import ItineraryDetail from '../../components/screens/ItineraryDetailScreen'
import { RouteComponentProps } from 'react-router'

type urlProps = RouteComponentProps<{ id: string }>

const ItineraryDetailScreenContainer: FC<urlProps> = (
  props
) => {
  const scheduleId = props.match.params.id

  return <ItineraryDetail />
}

export default ItineraryDetailScreenContainer
