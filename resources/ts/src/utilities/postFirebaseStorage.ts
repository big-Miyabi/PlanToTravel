import { Reference, storageRef } from './firebase'

type PostFirebaseStorage = {
  getUploadRef: (
    uid: string,
    folder: string
  ) => { uploadRef: Reference; filename: string }
  uploadPostImage: (
    ref: Reference,
    uri: string
  ) => Promise<string>
  getImageUrl: (ref: Reference) => Promise<string>
}

export const postFirebaseStorage: PostFirebaseStorage = {
  // 画像をアップロードするストレージ参照を取得する
  getUploadRef: (uid: string, folder: string) => {
    const filename = Date.now().toString()
    const uploadRef = storageRef.child(
      `itinerary/${uid}/${folder}/${filename}`
    )

    return { uploadRef, filename }
  },
  // 画像をstorageに保存
  uploadPostImage: async (ref: Reference, uri: string) => {
    const metadata = { contentType: 'image/jpeg' }
    const response = await fetch(uri)
    const blob = await response.blob()

    return new Promise((resolve) => {
      ref
        .put(blob, metadata)
        .then(() => {
          resolve('success')
        })
        .catch((error) => {
          resolve('error')
        })
    })
  },
  // ストレージ参照からURLを取得する
  getImageUrl: (ref: Reference) => {
    return new Promise((resolve) => {
      ref
        .getDownloadURL()
        .then((url) => {
          resolve(url)
        })
        .catch((error) => {
          resolve('error')
        })
    })
  },
}
