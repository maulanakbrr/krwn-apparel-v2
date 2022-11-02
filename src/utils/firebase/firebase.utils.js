// Import the functions you need from the SDKs you need
import userEvent from "@testing-library/user-event";
import { initializeApp } from "firebase/app";
import { 
  getAuth, 
  signInWithRedirect, 
  signInWithPopup, 
  GoogleAuthProvider
} from 'firebase/auth'
import { 
  getFirestore, 
  doc, // for retrieve the instance
  getDoc, // for get the data
  setDoc // for set the data
} from 'firebase/firestore'
// import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAZL0Hfjzdfr29jhBuFiBSMK_qb3qVE0Dg",
  authDomain: "krwn-v2-db.firebaseapp.com",
  projectId: "krwn-v2-db",
  storageBucket: "krwn-v2-db.appspot.com",
  messagingSenderId: "78557797602",
  appId: "1:78557797602:web:4b30a9736c28e47a0212bb",
  measurementId: "G-SGJ37SGWTN"
};

// Initialize Firebase
const firebaseApp = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);

const provider = new GoogleAuthProvider()

provider.setCustomParameters({
  prompt: 'select_account'
})

export const auth = getAuth()
export const signInWithGooglePopup = () => signInWithPopup(auth, provider)

export const db = getFirestore()

export const createUserDocumentFromAuth = async (userAuth) => {
  const userDocRef = doc(db, 'users', userAuth.uid)
  console.log(userDocRef)
  const userSnapshot = await getDoc(userDocRef)
  console.log(userSnapshot.exists())

  if (!userSnapshot.exists()) {
    const { displayName, email } = userAuth
    const createdAt = new Date()

    try {
      await setDoc(userDocRef, {
        displayName,
        email,
        createdAt
      })
    } catch(err) {
      console.log('error creating the user', err.message)
    }
  }

  return userDocRef
}