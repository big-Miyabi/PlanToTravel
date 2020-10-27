import {
  Dispatch,
  useState,
  useEffect,
  useRef,
  ChangeEvent,
  RefObject,
} from 'react'
import { Place } from './types'

export const usePopupMenu = (
  overlayClassName: string
): [boolean, Dispatch<React.SetStateAction<boolean>>] => {
  const [isShown, setIsShown] = useState<boolean>(false)

  useEffect(() => {
    const overlay = document.getElementsByClassName(
      overlayClassName
    )[0] as HTMLElement

    const documentClickHandler = () => {
      if (!isShown) return
      setIsShown(false)
      overlay.removeEventListener(
        'click',
        documentClickHandler
      )
    }

    overlay.addEventListener('click', documentClickHandler)
  }, [isShown])

  return [isShown, setIsShown]
}

export const useFileInput = (
  funcInOnChange?: (file: File) => void,
  funcInUseEffect?: (src: string) => void
): [
  RefObject<HTMLInputElement>,
  string,
  (e: ChangeEvent<HTMLInputElement>) => void,
  () => void
] => {
  const inputRef = useRef<HTMLInputElement>(null)
  const [image, setImage] = useState<File | null>(null)
  const [base64, setBase64] = useState<string>('')

  const onFileChange = (
    e: ChangeEvent<HTMLInputElement>
  ) => {
    e.persist()
    if (e.target.files === null) return
    setImage(e.target.files[0])
    if (funcInOnChange) funcInOnChange(e.target.files[0])
  }

  const deleteImage = () => {
    setImage(null)
    setBase64('')
  }

  useEffect(() => {
    const fileReader = new FileReader()
    fileReader.onload = () => {
      if (typeof fileReader.result !== 'string') return
      setBase64(fileReader.result)
      if (funcInUseEffect)
        funcInUseEffect(fileReader.result)
    }

    if (image) fileReader.readAsDataURL(image)
  }, [image])

  return [inputRef, base64, onFileChange, deleteImage]
}

export const useHooks = <T extends Place[keyof Place]>(
  initialValue: T,
  func: (state: T) => void
): [T, Dispatch<React.SetStateAction<T>>] => {
  const [state, setState] = useState<T>(initialValue)
  useEffect(() => {
    func(state)
  }, [state])

  return [state, setState]
}
