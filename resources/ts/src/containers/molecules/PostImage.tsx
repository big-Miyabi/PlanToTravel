import React, { FC } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { setImageSrc } from '../../actions/post'
import { RootState } from '../../reducers'
import { useFileInput } from '../../utilities/customHook'
import ItineraryFirstView from '../../components/molecules/ItineraryFirstView'

const ItineraryFirstViewContainer: FC = () => {
  const dispatch = useDispatch()
  const [inputRef, base64, onFileChange] = useFileInput(
    (base64) => {
      dispatch(setImageSrc(base64))
    }
  )
  const { username, icon } = useSelector(
    (state: RootState) => state.loginReducer
  )
  const progressIndex = useSelector(
    (state: RootState) => state.postReducer.progressIndex
  )
  const {
    title,
    dateS,
    dateF,
    people,
    tags,
    src,
  } = useSelector((state: RootState) => state.postReducer)
  const replacedDateS = dateS.replace(/-/g, '.')
  const replacedDateF = dateF.replace(/-/g, '.')

  return (
    <ItineraryFirstView
      inputRef={inputRef}
      src={src}
      onFileChange={onFileChange}
      isDetail={progressIndex === 2}
      icon={icon}
      username={username}
      title={title}
      dateS={replacedDateS}
      dateF={replacedDateF}
      people={people}
      tags={tags}
    />
  )
}

export default ItineraryFirstViewContainer
