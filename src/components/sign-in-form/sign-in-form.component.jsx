import React, { useState } from 'react'
import { 
  signInAuthUserWithEmailAndPassword,
  signInWithGooglePopup 
} from '../../utils/firebase/firebase.utils'
import FormInput from '../form-input/form-input.component'
import Button from '../button/button.component'
import { useNavigate } from 'react-router-dom'
import { SignInFormContainer, SignInFormButtonContainer } from './sign-in-form-styles'
import { useDispatch } from 'react-redux'
import { setUser } from '../../redux/user/userSlice'

const defaultFormFields = {
  emailUser: '',
  password: ''
}

const SignInForm = () => {
  const [formFields, setFormFields] = useState(defaultFormFields)
  const { emailUser, password } = formFields
  const navigate = useNavigate()
  const dispatch = useDispatch()

  const setDataToCurrentUser = data => {
    const { accessToken, displayName, email, uid } = data
    dispatch(setUser({accessToken, displayName, email, uid}))
  }

  const signInWithGoogle = async () => {
    const { user } = await signInWithGooglePopup()
    setDataToCurrentUser(user)
    navigate('/')
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
      const { user } = await signInAuthUserWithEmailAndPassword(emailUser, password)
      setDataToCurrentUser(user)
      console.log('USER:: ', user)
      resetFormFields()
      navigate('/')
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
          name= "emailUser" 
          value={emailUser}
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