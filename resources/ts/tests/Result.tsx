import React, { FC, useState } from 'react'
import axios from 'axios'

const Result: FC = () => {
  const addSchedule = () => {
    const [title, setTitle] = useState<string>('')
    const [header, setHeader] = useState<string>('')
    const [people, setPeople] = useState<string>('')
    const [day_s, setDayS] = useState<string>('')
    const [day_f, setDayf] = useState<string>('')
    const [day, setDays] = useState<string[]>([''])
    const [img, setImgs] = useState<string[]>([''])
    const [place_name, setPlaceNames] = useState<string[]>([
      '',
    ])
    const [comment, setComments] = useState<string[]>([''])
    const [tag_name, setTags] = useState<string[]>([''])
    const uid = '1'
    const is_public = '0'
    const sid = '1'
    axios
      .post('/api/create', {
        uid,
        title,
        header,
        people,
        day_s,
        day_f,
        is_public,
        day,
        img,
        place_name,
        longitude,
        latitude,
        rating,
        weather,
        transport,
        transport_detail,
        comment,
        tag_name,
      })
      .then((res) => {
        console.log(res.data)
      })
      .catch((error) => {
        console.log(error)
      })
  }

  return (
    <>
      <h2>検索結果をコンソール上に表示する</h2>
      <button>投稿した物の表示</button>
      <br />
      <button>いいねした物の表示</button>
      <br />
      <button>ブックマークした物の表示</button>
    </>
  )
}

export default Result
