import React, { FC, useState, Component } from 'react'
import axios from 'axios'
import { useDispatch, useSelector } from 'react-redux'
import { RootState } from '../src/reducers/index'
const Post: FC = () => {
  const loginInfo = useSelector(
    (state: RootState) => state.loginReducer
  )
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
  const [longitude, setLongitudes] = useState<string[]>([
    '',
  ])
  const [latitude, setLatitudes] = useState<string[]>([''])
  const [rating, setRatings] = useState<string[]>([''])
  const [weather, setWeathers] = useState<string[]>([''])
  const [transport, setTransports] = useState<string[]>([
    '',
  ])
  const [transport_detail, setTransDs] = useState<string[]>(
    ['']
  )
  // const [distance, setDistance] = useState<string>('')
  const [comment, setComments] = useState<string[]>([''])
  const [tag_name, setTags] = useState<string[]>([''])
  const uid = loginInfo.id
  const is_public = '0'
  const sid = '134'
  const [search, setSearch] = useState<string>('')
  const searchSchedule = () => {
    axios
      .post('/api/search', {
        search,
      })
      .then((res) => {
        console.log(res.data)
      })
      .catch(() => {
        console.log('通信に失敗しました')
      })
  }
  const showSchedule = () => {
    axios
      .post('/api/show', {
        sid,
      })
      .then((res) => {
        console.log(res.data)
      })
      .catch(() => {
        console.log('通信に失敗しました')
      })
  }
  const deleteSchedule = () => {
    axios
      .post('/api/delete', {
        sid,
      })
      .then((res) => {
        console.log(res.data)
      })
      .catch(() => {
        console.log('通信に失敗しました')
      })
  }
  const likeSchedule = () => {
    axios
      .post('/api/like', {
        sid,
        uid,
      })
      .then((res) => {
        console.log(res.data)
      })
      .catch(() => {
        console.log('通信に失敗しました')
      })
  }
  const bookMark = () => {
    axios
      .post('/api/bookmark', {
        sid,
        uid,
      })
      .then((res) => {
        console.log(res.data)
      })
      .catch(() => {
        console.log('通信に失敗しました')
      })
  }
  const indexSchedule = () => {
    axios
      .get('/api/index')
      .then((res) => {
        console.log(res.data)
      })
      .catch(() => {
        console.log('通信に失敗しました')
      })
  }
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
      <p>id: {loginInfo.id}</p>
      <p>ユーザー名: {loginInfo.username}</p>
      <p>{tag_name}</p>
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
            const newTags = tag_name.slice()
            newTags[0] = e.target.value
            setTags(newTags)
          }}
        />
        ,
        <input
          type="text"
          onChange={(e) => {
            const newTags = tag_name.slice()
            newTags[1] = e.target.value
            setTags(newTags)
          }}
        />
        ,
        <input
          type="text"
          onChange={(e) => {
            const newTags = tag_name.slice()
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
      <label htmlFor="">
        日にち
        <input
          type="text"
          onChange={(e) => {
            const newDays = day.slice()
            newDays[0] = e.target.value
            setDays(newDays)
          }}
        />
      </label>
      <label>
        場所
        <input
          type="text"
          onChange={(e) => {
            const newPlaces = place_name.slice()
            newPlaces[0] = e.target.value
            setPlaceNames(newPlaces)
          }}
        />
        天気
        <select
          onChange={(e) => {
            const newWeathers = weather.slice()
            newWeathers[0] = e.target.value
            setWeathers(newWeathers)
          }}
        >
          <option>選択してください</option>
          <option value="sun">sun</option>
          <option value="cloud">cloud</option>
          <option value="rain">rain</option>
          <option value="snow">snow</option>
          <option value="night">night</option>
        </select>
        評価
        <select
          onChange={(e) => {
            const newRatings = rating.slice()
            newRatings[0] = e.target.value
            setRatings(newRatings)
          }}
        >
          <option>選択してください</option>
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
          onChange={(e) => {
            const newLongitudes = longitude.slice()
            newLongitudes[0] = e.target.value
            setLongitudes(newLongitudes)
          }}
        />
        経度
        <input
          type="text"
          onChange={(e) => {
            const newLatitudes = latitude.slice()
            newLatitudes[0] = e.target.value
            setLatitudes(newLatitudes)
          }}
        />
      </label>
      <br />
      <label>
        写真
        <input
          type="text"
          onChange={(e) => {
            const newImgs = img.slice()
            newImgs[0] = e.target.value
            setImgs(newImgs)
          }}
        />
      </label>
      <br />
      <label>
        コメント
        <input
          type="text"
          onChange={(e) => {
            const newComments = comment.slice()
            newComments[0] = e.target.value
            setComments(newComments)
          }}
        />
      </label>
      <br />
      <label>
        移動手段
        <select
          onChange={(e) => {
            const newTransports = transport.slice()
            newTransports[0] = e.target.value
            setTransports(newTransports)
          }}
        >
          <option>選択してください</option>
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
          onChange={(e) => {
            const newTransportDs = transport_detail.slice()
            newTransportDs[0] = e.target.value
            setTransDs(newTransportDs)
          }}
        />
      </label>
      <br />
      <br />
      {/* ここから二つ目 */}
      <label htmlFor="">
        日にち
        <input
          type="text"
          onChange={(e) => {
            const newDays = day.slice()
            newDays[1] = e.target.value
            setDays(newDays)
          }}
        />
      </label>
      <label>
        場所
        <input
          type="text"
          onChange={(e) => {
            const newPlaces = place_name.slice()
            newPlaces[1] = e.target.value
            setPlaceNames(newPlaces)
          }}
        />
        天気
        <select
          onChange={(e) => {
            const newWeathers = weather.slice()
            newWeathers[1] = e.target.value
            setWeathers(newWeathers)
          }}
        >
          <option>選択してください</option>
          <option value="sun">sun</option>
          <option value="cloud">cloud</option>
          <option value="rain">rain</option>
          <option value="snow">snow</option>
          <option value="night">night</option>
        </select>
        評価
        <select
          onChange={(e) => {
            const newRatings = rating.slice()
            newRatings[1] = e.target.value
            setRatings(newRatings)
          }}
        >
          <option>選択してください</option>
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
          onChange={(e) => {
            const newLongitudes = longitude.slice()
            newLongitudes[1] = e.target.value
            setLongitudes(newLongitudes)
          }}
        />
        経度
        <input
          type="text"
          onChange={(e) => {
            const newLatitudes = latitude.slice()
            newLatitudes[1] = e.target.value
            setLatitudes(newLatitudes)
          }}
        />
      </label>
      <br />
      <label>
        写真
        <input
          type="text"
          onChange={(e) => {
            const newImgs = img.slice()
            newImgs[1] = e.target.value
            setImgs(newImgs)
          }}
        />
      </label>
      <br />
      <label>
        コメント
        <input
          type="text"
          onChange={(e) => {
            const newComments = comment.slice()
            newComments[1] = e.target.value
            setComments(newComments)
          }}
        />
      </label>
      <br />
      <label>
        移動手段
        <select
          onChange={(e) => {
            const newTransports = transport.slice()
            newTransports[1] = e.target.value
            setTransports(newTransports)
          }}
        >
          <option>選択してください</option>
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
          onChange={(e) => {
            const newTransportDs = transport_detail.slice()
            newTransportDs[1] = e.target.value
            setTransDs(newTransportDs)
          }}
        />
      </label>
      <button onClick={addSchedule}>確定</button>
      <button onClick={indexSchedule}>一覧確認</button>
      <button onClick={showSchedule}>確認</button>
      <button onClick={likeSchedule}>いいね</button>
      <button onClick={deleteSchedule}>削除</button>
      <input
        type="text"
        onChange={(e) => setSearch(e.target.value)}
      />
      <button onClick={searchSchedule}>検索</button>
    </>
  )
}

export default Post
