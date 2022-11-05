import { useState } from 'react'
import { createAuthUserWithEmailAndPassword } from '../../utils/firebase/firebase.utils'

const defaultFormFields = {
  displayName: '',
  email: '',
  password: '',
  confirmPassword: ''
}

const SignUpForm = () => {
  const [formFields, setFormFields] = useState(defaultFormFields)
  const { displayName, email, password, confirmPassword } = formFields
  
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
      const res = await createAuthUserWithEmailAndPassword(email, password)
      console.log(res)
    } catch(error) {
      console.error('user creation encountered an error', error)
    }
  }

  return (
    <div>
      <h1>Sign up with your email dan password</h1>
      <form onSubmit={handleSubmit}>
        <label >Display Name</label>
        <input type="text" name="displayName" value={displayName} onChange={handleChange} required/>

        <label>Email</label>
        <input type="email" name="email" value={email} onChange={handleChange} required/>
        
        <label>Password</label>
        <input type="password" name="password" value={password} onChange={handleChange} required/>
        
        <label>Confirm Password</label>
        <input type="password" name="confirmPassword" value={confirmPassword} onChange={handleChange} required/>

        <button type="submit">Sign Up</button>
      </form>
    </div>
  )
}

export default SignUpForm