import { Dispatch, ChangeEvent, KeyboardEvent } from 'react'

type OnChangeFunc = (
  e: ChangeEvent<HTMLInputElement>
) => void
type OnKeyPressFunc = (
  e: KeyboardEvent<HTMLInputElement>
) => void

export const getChangeEventFunc = (
  setValue: Dispatch<React.SetStateAction<any>>
): OnChangeFunc => {
  return (e: ChangeEvent<HTMLInputElement>) => {
    e.persist()
    setValue(e.target.value)
  }
}

export const getKeyboardEventFunc = (
  func: () => void
): OnKeyPressFunc => {
  return (e: KeyboardEvent<HTMLInputElement>) => {
    if (e.key !== 'Enter') return
    func()
  }
}
