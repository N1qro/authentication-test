"use client"

import React from 'react'
import register from './action'
import { useFormState } from 'react-dom'

export default function RegisterForm() {
  const [ state, action ] = useFormState(register, undefined)

  return (
    <form className='bg-slate-500' action={action}>
      <div>
        <label htmlFor="username">Username</label>
        <br />
        <input className='text-blue-500' type="text" name="username" required/>
      </div>
      {state?.errors.username && <p>{state.errors.username}</p>}

      <div>
        <label htmlFor="email">Email</label>
        <br />
        <input className='text-blue-500' type="text" name="email" required/>
      </div>
      {state?.errors.email && <p>{state.errors.email}</p>}

      <div>
        <label htmlFor="password">Password</label>
        <br />
        <input className='text-blue-500' type="text" name="password" required/>
      </div>
      {state?.errors.password &&
        <div>
          <p>Password must:</p>
          <ul>
            {state.errors.password.map(err => <li key={err}>- {err}</li>)}
          </ul>
        </div>
      }
      <button className='bg-slate-700 px-8' type="submit">Register</button>
    </form>
  )
}
