import React, { FC, useState } from 'react'
import axios from 'axios'

const Post: FC = () => {
  const [title, setTitle] = useState<string>('')
  const [header, setHeader] = useState<string>('')
  const [people, setPeople] = useState<string>('')
  const [day_s, setDayS] = useState<string>('')
  const [day_f, setDayf] = useState<string>('')
  const [order_number, setOrderNum] = useState<string>('')
  const [day, setDay] = useState<string>('')
  const [img, setImg] = useState<string>('')
  const [place_name, setPlaceName] = useState<string>('')
  const [longitude, setLongitude] = useState<string>('')
  const [latitude, setLatitude] = useState<string>('')
  const [rating, setRating] = useState<string>('')
  const [weather, setWeather] = useState<string>('')
  const [transport, setTransport] = useState<string>('')
  const [transport_detail, setTransD] = useState<string>('')
  // const [distance, setDistance] = useState<string>('')
  const [comment, setComment] = useState<string>('')
  const [tags, setTags] = useState<string[]>([''])
  const uid = '31'
  const is_public = '0'
  const addSchedule = () => {
    axios
      .post('/api/create', {
        uid,
        title,
        header,
        people,
        day_s,
        day_f,
        is_public,
        tags,
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
      <p>{tags}</p>
      <label>
        ヘッダー画像追加
        <input
          type="text"
          onChange={(e) => setHeader(e.target.value)}
        />
      </label>
      <br />
      <label>
        タイトル*
        <input
          type="text"
          onChange={(e) => setTitle(e.target.value)}
        />
      </label>
      <br />
      <label>
        タグ
        <input
          type="text"
          onChange={(e) => {
            const newTags = tags.slice()
            newTags[0] = e.target.value
            setTags(newTags)
          }}
        />
        ,
        <input
          type="text"
          onChange={(e) => {
            const newTags = tags.slice()
            newTags[1] = e.target.value
            setTags(newTags)
          }}
        />
        ,
        <input
          type="text"
          onChange={(e) => {
            const newTags = tags.slice()
            newTags[2] = e.target.value
            setTags(newTags)
          }}
        />
      </label>
      <br />
      <label>
        日付*
        <input
          type="text"
          onChange={(e) => setDayS(e.target.value)}
        />
        ～
        <input
          type="text"
          onChange={(e) => setDayf(e.target.value)}
        />
      </label>
      <br />
      <label>
        人数*
        <input
          type="text"
          onChange={(e) => setPeople(e.target.value)}
        />
        人
      </label>
      <button onClick={addSchedule}>投稿</button>
      <br />
      <h2>行程*</h2>
      <label>
        場所
        <input
          type="text"
          onChange={(e) => setPlaceName(e.target.value)}
        />
        天気
        <select
          onChange={(e) => setWeather(e.target.value)}
        >
          <option value="sun">sun</option>
          <option value="cloud">cloud</option>
          <option value="rain">rain</option>
          <option value="snow">snow</option>
          <option value="night">night</option>
        </select>
        評価
        <select onChange={(e) => setRating(e.target.value)}>
          <option value="0">0</option>
          <option value="1">1</option>
          <option value="2">2</option>
          <option value="3">3</option>
        </select>
      </label>
      <br />
      <label>
        緯度
        <input
          type="text"
          onChange={(e) => setLatitude(e.target.value)}
        />
        経度
        <input
          type="text"
          onChange={(e) => setLongitude(e.target.value)}
        />
      </label>
      <br />
      <label>
        写真
        <input
          type="text"
          onChange={(e) => setImg(e.target.value)}
        />
      </label>
      <br />
      <label>
        コメント
        <input
          type="text"
          onChange={(e) => setComment(e.target.value)}
        />
      </label>
      <br />
      <label>
        移動手段
        <select
          onChange={(e) => setTransport(e.target.value)}
        >
          <option value="徒歩">徒歩</option>
          <option value="自転車">自転車</option>
          <option value="車">車</option>
          <option value="バス">バス</option>
          <option value="電車">電車</option>
          <option value="船">船</option>
          <option value="飛行機">飛行機</option>
        </select>
      </label>
      <br />
      <label>
        移動手段詳細
        <input
          type="text"
          onChange={(e) => setTransD(e.target.value)}
        />
      </label>
      <br />
      <br />
      {/* <label>
        場所
        <input
          type="text"
          onChange={(e) => setPlaceName(e.target.value)}
        />
        天気
        <select
          onChange={(e) => setWeather(e.target.value)}
        >
          <option>sun</option>
          <option>cloud</option>
          <option>rain</option>
          <option>snow</option>
          <option>night</option>
        </select>
        評価
        <select onChange={(e) => setRating(e.target.value)}>
          <option>0</option>
          <option>1</option>
          <option>2</option>
          <option>3</option>
        </select>
      </label>
      <br />
      <label>
        緯度
        <input
          type="text"
          onChange={(e) => setLatitude(e.target.value)}
        />
        経度
        <input
          type="text"
          onChange={(e) => setLongitude(e.target.value)}
        />
      </label>
      <br />
      <label>
        写真
        <input
          type="text"
          onChange={(e) => setImg(e.target.value)}
        />
      </label>
      <br />
      <label>
        コメント
        <input
          type="text"
          onChange={(e) => setComment(e.target.value)}
        />
      </label>
      <br />
      <label>
        移動手段
        <select
          onChange={(e) => setTransport(e.target.value)}
        >
          <option>徒歩</option>
          <option>自転車</option>
          <option>車</option>
          <option>バス</option>
          <option>電車</option>
          <option>船</option>
          <option>飛行機</option>
        </select>
      </label>
      <br />
      <label>
        移動手段詳細
        <input
          type="text"
          onChange={(e) => setTransD(e.target.value)}
        />
      </label>
      <br /> */}
      <button>確定</button>
    </>
  )
}

export default Post
