import React, { FC } from 'react'

type Props = {
  className: string
  names: string[]
  index: number
}

const ProgressBar: FC<Props> = ({
  className,
  names,
  index,
}) => {
  const figmaScreenWidth = 375
  const leftPx = [-98, 0, 97]
  const leftVw = (leftPx[index] / figmaScreenWidth) * 100
  const left = `${leftVw}vw`
  const style = { left }

  return (
    // クラス名を`progress-bar`にするとbootstrapのクラス名とかぶるので、ここでは`progress-map`というクラス名にしている
    <div className={className + ' ' + 'progress-map'}>
      <div className="progress-map__wrap">
        <div className="progress-map__name-wrap">
          <p className="progress-map__name">{names[0]}</p>
          <p className="progress-map__name--2">
            {names[1]}
          </p>
          <p className="progress-map__name--3">
            {names[2]}
          </p>
        </div>
        <div className="progress-map__progress">
          <img
            className="progress-map__progress-img"
            src="../images/progress_bar.png"
            alt="プログレスバー"
          />
        </div>
      </div>
      <div
        className="progress-map__circle"
        style={style}
      ></div>
    </div>
  )
}

export default ProgressBar
