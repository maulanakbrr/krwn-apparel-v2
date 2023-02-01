import { useState } from 'react'
import { 
  signInAuthUserWithEmailAndPassword,
  signInWithGooglePopup 
} from '../../utils/firebase/firebase.utils'
import FormInput from '../form-input/form-input.component'
import Button from '../button/button.component'
import { SignInFormContainer, SignInFormButtonContainer } from './sign-in-form-styles'

const defaultFormFields = {
  email: '',
  password: ''
}

const SignInForm = () => {
  const [formFields, setFormFields] = useState(defaultFormFields)
  const { email, password } = formFields

  const signInWithGoogle = async () => {
    await signInWithGooglePopup()
  }

  const resetFormFields = () => {
    setFormFields(defaultFormFields)
  }
  
  const handleChange = e => {
    const { name, value } = e.target
    setFormFields({
      ...formFields,
      [name]: value
    }) 
  }

  const handleSubmit = async e => {
    e.preventDefault()
    
    try {
      const { user } = await signInAuthUserWithEmailAndPassword(email, password)
      console.log(user)
      resetFormFields()
    } catch(error) {
      switch(error.code) {
        case 'auth/wrong-password' :
          alert('incorrect password for email')
          break
        case 'auth/user-not-found' :
          alert('no user associated with this email')
          break 
        default: 
          console.log(error)
      }
    }
  }

  return (
    <SignInFormContainer>
      <h2>Already have an account?</h2>
      <span>Sign in with your email dan password</span>
      <form onSubmit={handleSubmit}>

        <FormInput 
          label='Email'
          type= 'email'
          name= "email" 
          value={email}
          onChange={handleChange}
          required={true}
        />
        
        <FormInput 
          label='Password'
          type= 'password'
          name= "password" 
          value={password} 
          onChange={handleChange}
          required={true}
          
        />
        
        <SignInFormButtonContainer>
          <Button type="submit">Sign In</Button>
          <Button type="button" buttonType="google" onClick={signInWithGoogle}>Google Sign In</Button>
        </SignInFormButtonContainer>
      </form>
    </SignInFormContainer>
  )
}

export default SignInForm