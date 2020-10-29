import { Dispatch } from 'react'
import {
  setLoginState,
  setLoginInfo,
} from '../actions/login'
import axios, { AxiosResponse } from 'axios'
import { Place } from './types'
/// <reference types="googlemaps" />
type PlaceResult = google.maps.places.PlaceResult
type DirectionsResult = google.maps.DirectionsResult

type Login = {
  dispatch: Dispatch<any>
  email: string
  password: string
}

type Regist = Login & {
  username: string
}

type DistanceArg = {
  origin: string
  destination: string
  mode: string
}

type ItineraryArg = {
  uid: string
  title: string
  header: string
  people: number
  day_s: string
  day_f: string
  tag_name: string[]
  is_public: boolean
  itinerary: Place[][]
}

type PostByAxios = {
  regist: (arg: Regist) => Promise<string>
  login: (arg: Login) => Promise<string>
  postItinerary: (
    arg: ItineraryArg
  ) => Promise<{
    result: any
    isSuccess: boolean
  }>
  getItineraryDetail: (
    id: string
  ) => Promise<{
    result: any
    isSuccess: boolean
  }>
}

type GoogleByAxios = {
  getPlaceName: (
    placeId: string
  ) => Promise<{
    result: PlaceResult
    isSuccess: boolean
  }>
  getDistance: (
    arg: DistanceArg
  ) => Promise<{
    result: {
      distance: string
      duration: string
      error?: string
    }
    isSuccess: boolean
  }>
}

export const postByAxios: PostByAxios = {
  // 登録処理
  regist: (arg: Regist): Promise<string> => {
    return new Promise((resolve) => {
      axios
        .post('/api/register', {
          username: arg.username,
          email: arg.email,
          password: arg.password,
        })
        .then((res) => {
          console.log(res)
          const userData = res.data[0]
          console.log(userData)
          arg.dispatch(setLoginState(true))
          arg.dispatch(
            setLoginInfo(
              userData.id,
              userData.username,
              userData.header,
              userData.icon,
              userData.profile
            )
          )
          resolve('success')
        })
        .catch((error) => {
          // エラー処理
          console.log(error)
          resolve('failed')
        })
    })
  },
  // ログイン処理
  login: (arg: Login): Promise<string> => {
    return new Promise((resolve) => {
      axios
        .post('/api/login', {
          email: arg.email,
          password: arg.password,
        })
        .then((res) => {
          console.log(res)
          const userData = res.data[0]
          arg.dispatch(setLoginState(true))
          arg.dispatch(
            setLoginInfo(
              userData.id,
              userData.username,
              userData.header,
              userData.icon,
              userData.profile
            )
          )
          resolve('success')
          console.log(res.data)
        })
        .catch((error) => {
          // エラー処理
          console.log(error)
          resolve('failed')
        })
    })
  },
  postItinerary: (
    arg: ItineraryArg
  ): Promise<{ result: any; isSuccess: boolean }> => {
    return new Promise((resolve) => {
      axios
        .post('/api/create', {
          uid: arg.uid,
          title: arg.title,
          header: arg.header,
          people: arg.people,
          day_s: arg.day_s,
          day_f: arg.day_f,
          tag_name: arg.tag_name,
          is_public: arg.is_public,
          itinerary: arg.itinerary,
        })
        .then((res) => {
          console.log(res)
          resolve({ result: res, isSuccess: true })
        })
        .catch((error) => {
          console.log(error)
          resolve({ result: error, isSuccess: false })
        })
    })
  },
  getItineraryDetail: (
    id: string
  ): Promise<{ result: any; isSuccess: boolean }> => {
    return new Promise((resolve) => {
      axios
        .post('/api/show', {
          sid: id,
        })
        .then((res) => {
          resolve({ result: res.data, isSuccess: true })
        })
        .catch((error) => {
          console.log(error)
          resolve({ result: error, isSuccess: false })
        })
    })
  },
}

export const googleByAxios: GoogleByAxios = {
  // GoogleMapAPIで場所名取得
  getPlaceName: (
    placeId: string
  ): Promise<{
    result: PlaceResult
    isSuccess: boolean
  }> => {
    return new Promise((resolve) => {
      axios
        .post('/api/getPlaceName', {
          placeId,
        })
        .then((res) => {
          const result = res.data.result
          resolve({ result, isSuccess: true })
        })
        .catch((error) => {
          console.log('getPlaceName():error')
          resolve({ result: error, isSuccess: false })
        })
    })
  },
  // GoogleMapAPIで距離取得
  getDistance: (
    arg: DistanceArg
  ): Promise<{
    result: {
      distance: string
      duration: string
      error?: string
    }
    isSuccess: boolean
  }> => {
    return new Promise((resolve) => {
      axios
        .post('/api/getDistance', {
          origin: arg.origin,
          destination: arg.destination,
          mode: arg.mode,
        })
        .then((res: AxiosResponse<DirectionsResult>) => {
          const distance =
            res.data.routes[0].legs[0].distance.text
          const duration =
            res.data.routes[0].legs[0].duration.text
          resolve({
            result: { distance, duration },
            isSuccess: true,
          })
        })
        .catch((error) => {
          console.log('getPlaceName():error')
          const result = {
            distance: '',
            duration: '',
            error,
          }
          resolve({ result, isSuccess: false })
        })
    })
  },
}
