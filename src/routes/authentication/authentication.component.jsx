// import { getRedirectResult } from 'firebase/auth'
import SignUpForm from "../../components/sing-up-form/sign-up-form.component"
import SignInForm from "../../components/sign-in-form/sign-in-form.component"
import './authentication.styles.scss'

const Authentication = () => {

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

  return (
    <div className="authentication-container">
      {/* Section for sign in using google redirect */}
      {/* <button onClick={signInWithGoogleRedirect}>
        Sign in with Google Redirect
      </button> */}
      <SignInForm/>
      <SignUpForm/>
    </div>
  )
}

export default Authentication