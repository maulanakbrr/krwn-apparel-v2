// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { 
  getAuth, 
  signInWithRedirect, 
  signInWithPopup, 
  GoogleAuthProvider,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
  onAuthStateChanged
} from 'firebase/auth'
import { 
  getFirestore, 
  doc, // for retrieve the document's instance
  getDoc, // for get the document info
  setDoc, // for set the document
  collection, // for retrieve the collection's instance,
  writeBatch, // for create transaction to db
  query,
  getDocs
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

const googleProvider = new GoogleAuthProvider()

googleProvider.setCustomParameters({
  prompt: 'select_account'
})

export const auth = getAuth()
export const signInWithGooglePopup = () => signInWithPopup(auth, googleProvider)
export const signInWithGoogleRedirect = () => signInWithRedirect(auth, googleProvider)

export const db = getFirestore()

export const addCollectionAndDocuments = async (collectionKey, objectsToAdd) => {
  const collectionRef = collection(db, collectionKey)
  const batch = writeBatch(db)

  objectsToAdd.forEach((object) => {
    const docRef = doc(collectionRef, object.title.toLowerCase())
    batch.set(docRef, object)
  });

  await batch.commit()
  console.log('done')
}

export const getCategoriesAndDocuments = async () => {
  const collectionRef = collection(db, 'categories');
  const q = query(collectionRef)
  // console.log('q:: ', q)

  const querySnapshot = await getDocs(q)
  // console.log('querySnapshot:: ', querySnapshot)
  const categoryMap = querySnapshot.docs.reduce((acc, docSnapshot) => {
    const { title, items } = docSnapshot.data()
    acc[title.toLowerCase()] = items
    return acc
  }, {})

  return categoryMap
}

// check if the user was created on db
// if its not, then setDoc to db. insert the user data
// else it just return the userDocRef from the db
export const createUserDocumentFromAuth = async (userAuth, additionalInfo = {}) => {
  if (!userAuth) return

  // console.log('userAuth id:: ', userAuth.uid)
  // check user document reference
  // doc(*database*, *collection_name*, *document_name_or_key*)
  const userDocRef = doc(db, 'users', userAuth.uid)
  // console.log('userDocRef:: ', userDocRef)
  // getDoc to reach that document
  const userSnapshot = await getDoc(userDocRef)
  // console.log('userSnapshot:: ', userSnapshot.data())
  // console.log('userSnapshot exists:: ', userSnapshot.exists())

  if (!userSnapshot.exists()) {
    const { displayName, email } = userAuth
    const createdAt = new Date()

    try {
      // setDoc to create that document and its data. Although collection is not there, it will be created too. 
      // setDoc created based on userDocRef
      await setDoc(userDocRef, {
        displayName,
        email,
        createdAt,
        ...additionalInfo
      })
      console.log('user created')
    } catch(err) {
      console.log('error creating the user', err.message)
    }
  }

  return userDocRef
}

// create user with email and password function
export const createAuthUserWithEmailAndPassword = async (email, password) => {
  if (!email || !password) return
  console.log('AUTH:: ', auth)
  return await createUserWithEmailAndPassword(auth, email, password)
}

export const signInAuthUserWithEmailAndPassword = async (email, password) => {
  if (!email || !password) return
  console.log('AUTH:: ', auth)
  return await signInWithEmailAndPassword(auth, email, password)
}

export const signOutUser = async () => await signOut(auth)

export const onAuthStateChangedListener = (callback) => onAuthStateChanged(auth, callback)