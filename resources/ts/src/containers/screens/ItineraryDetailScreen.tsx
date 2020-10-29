import React, { FC, useEffect } from 'react'
import { GettedPlace } from '../../utilities/types'
import { postByAxios } from '../../utilities/axios'
import ItineraryDetail from '../../components/screens/ItineraryDetailScreen'
import { RouteComponentProps } from 'react-router'

type urlProps = RouteComponentProps<{ id: string }>

const ItineraryDetailScreenContainer: FC<urlProps> = (
  props
) => {
  const sid = props.match.params.id
  console.log(sid)
  useEffect(() => {
    const getItineraryByAxios = async () => {
      const getResult = await postByAxios.getItineraryDetail(
        sid
      )
      console.log(getResult.result)
      const [
        scheduleInfo,
        tags,
        itinerary,
        isLiked,
        likeCounts,
        isBookmarked,
      ] = getResult.result
    }
    getItineraryByAxios()
  }, [])

  return <ItineraryDetail />
}

export default ItineraryDetailScreenContainer
