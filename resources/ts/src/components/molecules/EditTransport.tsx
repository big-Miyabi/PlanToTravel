import React, { FC, Dispatch } from 'react'
import FontAwesomeIconBtn from '../atoms/FontAwesomeIconBtn'
import {
  faWalking,
  faShoePrints,
} from '@fortawesome/free-solid-svg-icons'
import { Transport } from '../../utilities/types'
import PlusInputBox from '../atoms/PlusInputBox'
import TransportSelectIcon from '../molecules/TransportSelectIcon'

type Props = {
  className: string
  transports: Transport[]
  selectedIndex: number
  setSelectedIndex: Dispatch<React.SetStateAction<number>>
  overlayClass: string
  isShownBox: boolean
  setIsShownBox: Dispatch<React.SetStateAction<boolean>>
}

const EditTransport: FC<Props> = ({
  className,
  transports,
  selectedIndex,
  setSelectedIndex,
  overlayClass,
  isShownBox,
  setIsShownBox,
}) => {
  return (
    <div className={className + ' ' + 'edit-transport'}>
      <p className="edit-transport__title">
        <FontAwesomeIconBtn
          className="edit-transport__walking-icon"
          icon={faWalking}
        />
        移動手段を追加
      </p>
      <div className="edit-transport__select-transport">
        <div
          className="edit-transport__select-wrap"
          onClick={() => {
            setIsShownBox(!isShownBox)
          }}
        >
          <FontAwesomeIconBtn
            className="edit-transport__shoe-prints-icon fa-rotate-90"
            icon={faShoePrints}
          />
          <p className="edit-transport__selected">徒歩 ▾</p>

          {isShownBox ? (
            <div className="transport-box">
              {transports.map((value, index) => {
                const selectedClass =
                  selectedIndex === index
                    ? '--selected'
                    : ''

                return (
                  <div className="transport-box__row">
                    <div className="transport-box__icon-wrap">
                      <TransportSelectIcon
                        index={index}
                        classNamePrefix="transport-box__"
                        selectedClass={selectedClass}
                        key={index}
                        onClick={() => {
                          setSelectedIndex(index)
                        }}
                      />
                    </div>
                    <p
                      className={
                        'transport-box__name' +
                        selectedClass
                      }
                    >
                      {value}
                    </p>
                  </div>
                )
              })}
            </div>
          ) : (
            <></>
          )}
        </div>
        <p className="edit-transport__message">
          アイコンを選択してください
        </p>
      </div>
      <div className="edit-transport__detail-wrap">
        <PlusInputBox
          type="text"
          placeholder={'例）山手線　30分'}
          className="edit-transport__detail"
        />
      </div>
      <div
        style={isShownBox ? {} : { display: 'none' }}
        className={`box-overlay ${overlayClass}`}
      ></div>
    </div>
  )
}

export default EditTransport
