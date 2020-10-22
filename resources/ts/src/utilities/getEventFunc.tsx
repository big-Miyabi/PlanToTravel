import { Dispatch, ChangeEvent } from 'react'

type OnChangeFunc = (
  e: ChangeEvent<HTMLInputElement>
) => void

export const getChangeEventFunc = (
  setValue: Dispatch<React.SetStateAction<any>>
): OnChangeFunc => {
  return (e: ChangeEvent<HTMLInputElement>) => {
    e.persist()
    console.log(e.target.value)
    setValue(e.target.value)
  }
}
