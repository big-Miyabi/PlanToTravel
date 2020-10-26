import React, {
  FC,
  useEffect,
  useRef,
  useState,
} from 'react'
import { useDispatch } from 'react-redux'
import {
  setShouldAppearMap,
  setSettingPlaceType,
} from '../../actions/map'
import {
  Place,
  WhetherIcon,
  WhetherItem,
  initialWhetherItems,
} from '../../utilities/types'
import EditPlace from '../../components/molecules/EditPlace'
import { faSun } from '@fortawesome/free-solid-svg-icons'

type Props = {
  className: string
  places: Place[]
  dateIndex: number
  placeIndex: number
}

const EditPlaceContainer: FC<Props> = ({
  className,
  places,
  dateIndex,
  placeIndex,
}) => {
  const dispatch = useDispatch()
  const inputRef = useRef<HTMLInputElement>(null)
  const [
    isShownWhetherBox,
    setIsShownWhetherBox,
  ] = useState<boolean>(false)
  const [whetherItems, setWhetherItems] = useState<
    WhetherItem[]
  >(initialWhetherItems)
  const [selectedWhether, setSelectedWheter] = useState<
    WhetherIcon
  >({ icon: faSun, name: 'sun' })

  const setCustomName = (value: string) => {
    places[placeIndex].name = value
  }

  const showMap = () => {
    dispatch(
      setShouldAppearMap(true, {
        dateIndex,
        placeIndex,
      })
    )
    dispatch(setSettingPlaceType('edit'))
  }

  const onSelectWhether = (index: number) => {
    whetherItems.some((_, i) => {
      if (i === index) return
      whetherItems[i].isSelected = false
    })
    const whether = whetherItems[index]
    whether.isSelected = true
    setWhetherItems(whetherItems.slice())
    setSelectedWheter({
      icon: whether.icon,
      name: whether.name,
    })
    places[placeIndex].whether = whether.name
  }

  // input.valueの中身を書き換える
  useEffect(() => {
    const writeInPlaceInput = () => {
      const input = inputRef.current
      const name = places[placeIndex].name
      if (input === null || name === null) return
      input.value = name
    }
    writeInPlaceInput()
  }, [places[placeIndex].name])

  // 天気セレクトボックスの外を押すとメニューを閉じる処理
  useEffect(() => {
    if (!isShownWhetherBox) return
    const overlay = document.getElementsByClassName(
      'box-overlay'
    )[0] as HTMLElement

    const documentClickHandler = () => {
      if (!isShownWhetherBox) return
      setIsShownWhetherBox(false)
      overlay.removeEventListener(
        'click',
        documentClickHandler
      )
    }

    overlay.addEventListener('click', documentClickHandler)
  }, [isShownWhetherBox])

  return (
    <EditPlace
      className={className}
      inputRef={inputRef}
      setCustomName={setCustomName}
      showMap={showMap}
      isShownWhetherBox={isShownWhetherBox}
      setIsShownWhetherBox={setIsShownWhetherBox}
      whetherItems={whetherItems}
      onSelectWhether={onSelectWhether}
      selectedWhether={selectedWhether}
    />
  )
}

export default EditPlaceContainer
