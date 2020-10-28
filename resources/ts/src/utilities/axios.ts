import { Dispatch } from 'react'
import {
  setLoginState,
  setLoginInfo,
} from '../actions/login'
import axios, { AxiosResponse } from 'axios'
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

type PostByAxios = {
  regist: (arg: Regist) => Promise<string>
  login: (arg: Login) => Promise<string>
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

// axios
//   .post('/api/create', {
//     uid,
//     title,
//     header: 'test',
//     people,
//     day_s: dateS,
//     day_f: dateF,
//     tag_name: tags,
//     is_public: false, // 後で追加
//     itinerary: sliced,
//   })
//   .then((res) => {
//     console.log(res.data)
//   })
//   .catch((error) => {
//     console.log(error)
//   })
