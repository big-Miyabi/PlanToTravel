import { Dispatch, ChangeEvent, KeyboardEvent } from 'react'

type OnChangeFunc = (
  e: ChangeEvent<HTMLInputElement>
) => void
type OnKeyPressFunc = (
  e: KeyboardEvent<HTMLInputElement>
) => void

export const getChangeEventFunc = (
  func:
    | Dispatch<React.SetStateAction<any>>
    | ((value: string) => void)
): OnChangeFunc => {
  return (e: ChangeEvent<HTMLInputElement>) => {
    e.persist()
    func(e.target.value)
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
