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
  RatingIcon,
} from '../../utilities/types'
import { usePopupMenu } from '../../utilities/customHook'
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
  ] = usePopupMenu('box-overlay')
  const [
    isShownRatingBox,
    setIsShownRatingBox,
  ] = usePopupMenu('box-overlay')

  const [whetherItems, setWhetherItems] = useState<
    WhetherItem[]
  >(initialWhetherItems)
  const [selectedWhether, setSelectedWheter] = useState<
    WhetherIcon
  >({ icon: faSun, name: 'sun' })

  const ratingArray = ['bad', 'soso', 'good']
  const initialRatingIcons: RatingIcon[] = [
    ...Array(3),
  ].map((_, i) => ({
    isSelected: false,
    name: ratingArray[i],
  }))
  const [ratingIcons, setRatingIcons] = useState<
    RatingIcon[]
  >(initialRatingIcons)

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

  const onSelectRating = (index: number) => {
    const isSelected = ratingIcons[index].isSelected
    if (isSelected) {
      // 選択中の項目を選択した時、即ち、選択を外した時
      ratingIcons[index].isSelected = false
      setRatingIcons(ratingIcons.slice())
      places[placeIndex].rating = 0

      return
    }
    ratingIcons[index].isSelected = true
    ratingIcons.some((_, i) => {
      if (i === index) return
      ratingIcons[i].isSelected = false
    })
    setRatingIcons(ratingIcons.slice())
    places[placeIndex].rating = index + 1
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
      ratingIcons={ratingIcons}
      selectedRating={places[placeIndex].rating}
      onSelectRating={onSelectRating}
      isShownRatingBox={isShownRatingBox}
      setIsShownRatingBox={setIsShownRatingBox}
    />
  )
}

export default EditPlaceContainer
