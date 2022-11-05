// import { useEffect } from "react"
// import { getRedirectResult } from 'firebase/auth'
import { 
  auth,
  signInWithGooglePopup,
  createUserDocumentFromAuth,
  signInWithGoogleRedirect
} from "../../utils/firebase/firebase.utils"
import SignUpForm from "../../components/sing-up-form/sign-up-form.component"

const SignInPage = () => {

  // run first time when we open the page
  // check if user was signed in using signInWithGoogleRedirect
  // commented because we just wanna using sign in with google popup
  // education purpose only
  
  // useEffect(() => {
  //   const getRedirectData = async () => {
  //     const res = await getRedirectResult(auth)
  //     console.log(res)

  //     if(res) {
  //       const userDocRef = await createUserDocumentFromAuth(res.user)
  //     }
  //   }
  //   getRedirectData()
  // }, [])

  const logGoogleUser = async () => {
    const {user} = await signInWithGooglePopup()
    const userDocRef = await createUserDocumentFromAuth(user)
  }

  return (
    <div>
      <h1>Sign in page</h1>
      <button onClick={logGoogleUser}>
        Sign in with Google Popup
      </button>
      {/* Section for sign in using google redirect */}
      {/* <button onClick={signInWithGoogleRedirect}>
        Sign in with Google Redirect
      </button> */}

      <SignUpForm/>
    </div>
  )
}

export default SignInPage