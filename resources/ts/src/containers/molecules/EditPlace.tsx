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
    shouldShowWhetherBox,
    setShouldShowWhetherBox,
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

  // input.valueの中身を書き換える
  useEffect(() => {
    ;(() => { // eslint-disable-line
      const input = inputRef.current
      const name = places[placeIndex].name
      if (input === null || name === null) return
      input.value = name
    })()
  }, [places[placeIndex].name])

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
    whetherItems[index].isSelected = true
    setWhetherItems(whetherItems.slice())
    setSelectedWheter({
      icon: whetherItems[index].icon,
      name: whetherItems[index].name,
    })
  }

  return (
    <EditPlace
      className={className}
      inputRef={inputRef}
      setCustomName={setCustomName}
      showMap={showMap}
      shouldShowWhetherBox={shouldShowWhetherBox}
      setShouldShowWhetherBox={setShouldShowWhetherBox}
      whetherItems={whetherItems}
      onSelectWhether={onSelectWhether}
      selectedWhether={selectedWhether}
    />
  )
}

export default EditPlaceContainer
