import { useState } from 'react'
import { RiTwitterFill } from 'react-icons/ri'
import Button from '../../components/button/Button'

import './AuthPage.scss'

const AuthPage = () => {
  const [isLogin, setIsLogin] = useState(true)
  return (
    <div className='authPage'>
      <div className='authPage__left'>
        <RiTwitterFill className='logo' />
        <div className='webname'>
          <h1>S Media</h1>
          <h6>Explore the world</h6>
        </div>
      </div>
      {isLogin ? (
        <LogIn onClick={() => setIsLogin(false)} />
      ) : (
        <SignUp onClick={() => setIsLogin(true)} />
      )}
    </div>
  )
}
const LogIn = ({ onClick }: { onClick: Function }) => {
  return (
    <div className='authPage__right'>
      <form className='authform'>
        <h3>Log In</h3>

        <input
          type='text'
          placeholder='Username'
          className='auth-input'
          name='username'
        />

        <input
          type='password'
          className='auth-input'
          placeholder='Password'
          name='password'
        />

        <div className='authform__actions'>
          <span onClick={() => onClick()}>Don't have an account Sign up</span>
          <Button title='Login' onclick={() => console.log('hi')} />
        </div>
      </form>
    </div>
  )
}
const SignUp = ({ onClick }: { onClick: Function }) => {
  return (
    <div className='authPage__right'>
      <form className='authform'>
        <h3>Sign up</h3>
        <div className='input-wrapper'>
          <input
            type='text'
            placeholder='First Name'
            className='auth-input'
            name='firstname'
          />
          <input
            type='text'
            placeholder='Last Name'
            className='auth-input'
            name='lastname'
          />
        </div>

        <div className='input-wrapper'>
          <input
            type='text'
            className='auth-input'
            name='username'
            placeholder='Usernames'
          />
        </div>

        <div className='input-wrapper'>
          <input
            type='text'
            className='auth-input'
            name='password'
            placeholder='Password'
          />
          <input
            type='text'
            className='auth-input'
            name='confirmpass'
            placeholder='Confirm Password'
          />
        </div>

        <div className='authform__actions'>
          <span onClick={() => onClick()}>Already have an account. Login!</span>
          <Button title='Signup' onclick={() => console.log('hi')} />
        </div>
      </form>
    </div>
  )
}

export default AuthPage
