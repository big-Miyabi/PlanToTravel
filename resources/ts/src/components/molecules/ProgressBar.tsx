import React, { FC } from 'react'

const ProgressBar: FC = () => {
  return (
    // クラス名を`progress-bar`にするとbootstrapのクラス名とかぶるので、ここでは`progress-map`というクラス名にしている
    <div className="progress-map">
      <p>ぷろぐれすばぁ</p>
    </div>
  )
}

export default ProgressBar
