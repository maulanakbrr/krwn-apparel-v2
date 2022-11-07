import { useState } from 'react'
import { createAuthUserWithEmailAndPassword, createUserDocumentFromAuth } from '../../utils/firebase/firebase.utils'
import FormInput from '../form-input/form-input.component'
import Button from '../button/button.component'
import './sign-up-form.styles.scss'

const defaultFormFields = {
  displayName: '',
  email: '',
  password: '',
  confirmPassword: ''
}

const SignUpForm = () => {
  const [formFields, setFormFields] = useState(defaultFormFields)
  const { displayName, email, password, confirmPassword } = formFields

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
    } catch(error) {
      if (error.code === 'auth/email-already-in-use') {
        alert('Cannot create user, email already in use');
      } else {
        console.log('user creation encountered an error', error);
      }
    }
  }

  return (
    <div className='sign-up-container'>
      <h2>Don't have an account?</h2>
      <span>Sign up with your email dan password</span>
      <form onSubmit={handleSubmit}>
        <FormInput 
          label='Display Name' 
          inputOptions={{
            type: 'text',
            name: "displayName", 
            value: displayName, 
            onChange: handleChange,
            required: true
          }}
        />

        <FormInput 
          label='Email'
          inputOptions={{
            type: 'email',
            name: "email", 
            value: email, 
            onChange: handleChange,
            required: true
          }}
        />
        
        <FormInput 
          label='Password'
          inputOptions={{
            type: 'password',
            name: "password", 
            value: password, 
            onChange: handleChange,
            required: true
          }}
        />
        
        <FormInput 
          label='Confirm Password' 
          inputOptions={{
            type: 'password',
            name: "confirmPassword", 
            value: confirmPassword, 
            onChange: handleChange,
            required: true
          }}
        />

        <Button type="submit">Sign Up</Button>
      </form>
    </div>
  )
}

export default SignUpForm