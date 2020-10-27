import { ActionTypes } from './index'
import { Place } from '../utilities/types'

export const setPostProgressIndex = (
  progressIndex: number
) =>
  ({
    type: ActionTypes.SET_POST_PROGRESS_INDEX,
    payload: {
      progressIndex,
    },
  } as const)

export const setPostOverview = (
  title: string,
  dateS: string,
  dateF: string,
  people: number,
  tags: string[]
) =>
  ({
    type: ActionTypes.SET_POST_OVERVIEW,
    payload: {
      title,
      dateS,
      dateF,
      people,
      tags,
    },
  } as const)

export const setImageSrc = (src: string) =>
  ({
    type: ActionTypes.SET_IMAGE_SRC,
    payload: {
      src,
    },
  } as const)

export const setCreatedItinerary = (itinerary: Place[][]) =>
  ({
    type: ActionTypes.SET_CREATED_ITINERARY,
    payload: {
      itinerary,
    },
  } as const)
