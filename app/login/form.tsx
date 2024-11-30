import React from 'react'
import login from './action'

export default function LoginForm() {
  return (
    <form className='bg-slate-500'  action={login}>
      <div>
        <label htmlFor="email">Email</label>
        <br />
        <input className='text-blue-500' type="text" name="email" required/>
      </div>
      <div>
        <label htmlFor="password">Password</label>
        <br />
        <input className='text-blue-500' type="text" name="password" required/>
      </div>
      <button className='bg-slate-700 px-8' type="submit">Login</button>
    </form>
  )
}
