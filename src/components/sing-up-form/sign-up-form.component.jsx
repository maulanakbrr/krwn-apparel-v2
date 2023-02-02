import { useState } from 'react'
import { createAuthUserWithEmailAndPassword, createUserDocumentFromAuth } from '../../utils/firebase/firebase.utils'
import FormInput from '../form-input/form-input.component'
import Button from '../button/button.component'
import { useNavigate } from 'react-router-dom'
import { SignUpFormContainer } from './sign-up-form.styles'

const defaultFormFields = {
  displayName: '',
  email: '',
  password: '',
  confirmPassword: ''
}

const SignUpForm = () => {
  const [formFields, setFormFields] = useState(defaultFormFields)
  const { displayName, email, password, confirmPassword } = formFields
  const navigate = useNavigate()

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
    
    if(password !== confirmPassword){
      alert('Passwords do not match')
      return
    }

    try {
      const {user} = await createAuthUserWithEmailAndPassword(email, password)
      await createUserDocumentFromAuth(user, { displayName })
      console.log({ user })
      resetFormFields()
      navigate('/')
    } catch(error) {
      if (error.code === 'auth/email-already-in-use') {
        alert('Cannot create user, email already in use');
      } else {
        console.log('user creation encountered an error', error);
      }
    }
  }

  return (
    <SignUpFormContainer>
      <h2>Don't have an account?</h2>
      <span>Sign up with your email dan password</span>
      <form onSubmit={handleSubmit}>
        <FormInput 
          label='Display Name' 
          type= 'text'
          name= "displayName" 
          value={displayName} 
          onChange={handleChange}
          required={true}
        />

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
        
        <FormInput 
          label='Confirm Password'
          type= 'password'
          name= "confirmPassword" 
          value={confirmPassword} 
          onChange={handleChange}
          required={true}
        />

        <Button type="submit">Sign Up</Button>
      </form>
    </SignUpFormContainer>
  )
}

export default SignUpForm