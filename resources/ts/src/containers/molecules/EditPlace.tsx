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
  initialWhetherIcons,
} from '../../utilities/types'
import EditPlace from '../../components/molecules/EditPlace'

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
  const [whetherIcons, setWhetherIcons] = useState<
    WhetherIcon[]
  >(initialWhetherIcons)
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
    whetherIcons.some((_, i) => {
      if (i === index) return
      whetherIcons[i].isSelected = false
    })
    whetherIcons[index].isSelected = true
    setWhetherIcons(whetherIcons.slice())
  }

  return (
    <EditPlace
      className={className}
      inputRef={inputRef}
      setCustomName={setCustomName}
      showMap={showMap}
      shouldShowWhetherBox={shouldShowWhetherBox}
      setShouldShowWhetherBox={setShouldShowWhetherBox}
      whetherIcons={whetherIcons}
      onSelectWhether={onSelectWhether}
    />
  )
}

export default EditPlaceContainer
