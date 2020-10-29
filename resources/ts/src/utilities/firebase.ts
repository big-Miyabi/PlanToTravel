import firebase from 'firebase'

const firebaseConfig = {
  apiKey: process.env.MIX_FIREBASE_API_KEY,
  authDomain: process.env.MIX_FIREBASE_AUTH_DOMAIN,
  databaseURL: process.env.MIX_FIREBASE_DATABASE_URL,
  projectId: process.env.MIX_FIREBASE_PROJECT_ID,
  storageBucket: process.env.MIX_FIREBASE_STORAGE_BUCKET,
  messagingSenderId:
    process.env.MIX_FIREBASE_MESSAGING_SENDER_ID,
  appId: process.env.MIX_FIREBASE_APP_ID,
}

const firebaseApp = !firebase.apps.length
  ? firebase.initializeApp(firebaseConfig)
  : firebase.app()

firebaseApp

export const db = firebase.firestore()
export const auth = firebase.auth()
export const storage = firebase.storage()
export const storageRef = firebase.storage().ref()
export const FieldValue = firebase.firestore.FieldValue
export type Reference = firebase.storage.Reference
