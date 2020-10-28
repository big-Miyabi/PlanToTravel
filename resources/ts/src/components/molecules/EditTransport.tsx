import React, { FC, Dispatch } from 'react'
import FontAwesomeIconBtn from '../atoms/FontAwesomeIconBtn'
import { faWalking } from '@fortawesome/free-solid-svg-icons'
import { getChangeEventFunc } from '../../utilities/getEventFunc'
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
  setTransportDetail: Dispatch<React.SetStateAction<string>>
  isInputActive: boolean
  setIsInputActive: Dispatch<React.SetStateAction<boolean>>
}

const EditTransport: FC<Props> = ({
  className,
  transports,
  selectedIndex,
  setSelectedIndex,
  overlayClass,
  isShownBox,
  setIsShownBox,
  setTransportDetail,
  isInputActive,
  setIsInputActive,
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
          <TransportSelectIcon
            className={'edit-transport__selected-icon'}
            index={selectedIndex}
            classNamePrefix="selected-icon__"
            isSelectedIcon={true}
          />
          <p className="edit-transport__selected">
            {transports[selectedIndex]} ▾
          </p>

          {transports[selectedIndex] === '入力なし' ? (
            <p className="edit-transport__message">
              アイコンを選択してください
            </p>
          ) : (
            <></>
          )}

          {isShownBox ? (
            <div className="transport-box">
              {transports.map((value, index) => {
                const isSelectedIcon =
                  selectedIndex === index
                const selectedClass = isSelectedIcon
                  ? '--selected'
                  : ''

                return (
                  <div
                    className="transport-box__row"
                    onClick={() => {
                      setSelectedIndex(index)
                    }}
                    key={index}
                  >
                    <div className="transport-box__icon-wrap">
                      <TransportSelectIcon
                        index={index}
                        classNamePrefix="transport-box__"
                        selectedClass={selectedClass}
                        isSelectedIcon={isSelectedIcon}
                        key={index}
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
      </div>
      <div className="edit-transport__detail-wrap">
        <PlusInputBox
          type="text"
          placeholder={'例）山手線　30分'}
          className="edit-transport__detail"
          maxLength={15}
          onChange={getChangeEventFunc(setTransportDetail)}
          onFocus={() => {
            setIsInputActive(true)
          }}
          onBlur={() => {
            setIsInputActive(false)
          }}
          modifier={
            isInputActive ? '--light-navy' : '--light-blue'
          }
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
