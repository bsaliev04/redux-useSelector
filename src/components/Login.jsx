import React from 'react'
import {useDispatch} from 'react-redux'
import { login, logout } from '../features/User'

export const Login = () => {

  const dispatch = useDispatch()

  return (
    <div>
        <button onClick={() => {dispatch(login({name: 'Baktybek', age: 30, email: 'baktybek@gmail.com'}))}}>Login</button>
        <button onClick={() => {
          dispatch(
            logout()
          );
        }}>Logout</button>
    </div>
  )
}
