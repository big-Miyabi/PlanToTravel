import React, { FC, useState } from 'react'
import axios from 'axios'

const Post: FC = () => {
  

  return (
    <>
      <label>
        ヘッダー画像追加
        <input type="text" />
      </label>
      <br />
      <label>
        タイトル*
        <input type="text" />
      </label>
      <br />
      <label>
        タグ
        <input type="text" />,
        <input type="text" />,
        <input type="text" />
      </label>
      <br />
      <label>
        日付*
        <input type="text" />
        ～
        <input type="text" />
      </label>
      <br />
      <label>
        人数*
        <input type="text" />人
      </label>
      <br />
      <h2>行程*</h2>
      <label>
        場所
        <input type="text" />
        天気
        <select>
          <option>sun</option>
          <option>cloud</option>
          <option>rain</option>
          <option>snow</option>
          <option>night</option>
        </select>
        評価
        <select>
          <option>0</option>
          <option>1</option>
          <option>2</option>
          <option>3</option>
        </select>
      </label>
      <br />
      <label>
        写真
        <input type="text" />
      </label>
      <br />
      <label>
        コメント
        <input type="text" />
      </label>
      <br />
      <label>
        移動手段
        <select>
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
        <input type="text" />
      </label>
      <br />
      <br />

      <label>
        場所
        <input type="text" />
        天気
        <select>
          <option>sun</option>
          <option>cloud</option>
          <option>rain</option>
          <option>snow</option>
          <option>night</option>
        </select>
        評価
        <select>
          <option>0</option>
          <option>1</option>
          <option>2</option>
          <option>3</option>
        </select>
      </label>
      <br />
      <label>
        写真
        <input type="text" />
      </label>
      <br />
      <label>
        コメント
        <input type="text" />
      </label>
      <br />
      <label>
        移動手段
        <select>
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
        <input type="text" />
      </label>

      <br />
      <button>確定</button>
    </>
  )
}

export default Post
