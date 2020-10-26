import {
  Dispatch,
  useState,
  useEffect,
  useRef,
  ChangeEvent,
  RefObject,
} from 'react'

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
  func?: (file: File) => void
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
    if (func) func(e.target.files[0])
  }

  const deleteImage = () => {
    setImage(null)
    setBase64('')
  }

  useEffect(() => {
    const fileReader = new FileReader()
    fileReader.onload = () => {
      if (typeof fileReader.result === 'string')
        setBase64(fileReader.result)
    }

    if (image) fileReader.readAsDataURL(image)
  }, [image])

  return [inputRef, base64, onFileChange, deleteImage]
}
