import React from 'react'
import '../../Styles/SignUp/SignUp.css'

const SignUpView = ({ onSubmit }) => {
  return (
    <div className='signup__container'>
      <h1>Sign up</h1>

      <form onSubmit={onSubmit}>
          <div className='signup__box'>
        <label>
          Email:
          <input name='email' type='email' placeholder='Email' />
        </label>
        <label>
          Password:
          <input name='password' type='password' placeholder='Password' />
        </label>
        <button type='submit'>Sign Up</button>
        </div>
      </form>
    </div>
  )
}

export default SignUpView
