import React, { useState, useEffect } from 'react'
import logo from '../assets/images/logo.svg'
import { Link, useNavigate } from 'react-router-dom'
import Loader from '../components/loader'

import { useAuth } from '../authcontext'


const Signup = () => {
  const [errors, setError] = useState(
    {
      "username": "",
      "password": "",
    }
  )
  const {user, createuser} = useAuth()
  const [loading, setloading] = useState(false)
  const navigate = useNavigate()

  useEffect(()=>{
    if (user.isAuthenticated)
    {
      navigate('/home')
    }
  })

  function FormValidator(formdata) {
    if (formdata.get('password1') === formdata.get('password2'))
    {
      return {
        first_name: formdata.get('fullname'),
        email: formdata.get('email'),
        password: formdata.get('password1')
      }
    }
    else
    {
      setError(
        {
          "username": "",
          "password": "Please enter the same password in both the fields.",
        }
      )
      return null
    }
  }
  function formHandler(e) {
      e.preventDefault()
      let Form = new FormData(e.target)
      Form = FormValidator(Form)
      if (Form != null)
      {
        setloading(true)
        createuser(Form).then(e=>{
        console.log(e)
        setloading(false)
        navigate('/home')

        })
      }
    }
  return (
    <div className="flex w-full min-h-[100vh] flex-wrap gap-6 items-center">
    <div className="flex min-h-full grow flex-col max-w-[50%] px-6 py-8 lg:px-8">
      
    <div className="sm:mx-auto min-w-[80%] sm:w-full sm:max-w-sm">
      <img
        className="h-16 w-auto"
        src={logo}
        alt="Product Logo"  
      />
      <h2 className="mt-4 text-2xl font-bold leading-9 tracking-tight text-gray-900">
        Create an account
      </h2>
    </div>

    <div className="mt-4 sm:mx-auto sm:w-full sm:max-w-sm min-h-full min-w-[80%]">
      <form className="space-y-4" method="POST" onSubmit={formHandler}>
      <div>
          <label htmlFor="email" className="block text-md font-medium leading-6 text-gray-900">
            Fullname
          </label>
          <div className="mt-2">
            <input
              id="email"
              name="fullname"
              type="text"
              autoComplete="email"
              required
              className="block w-full rounded-md border-0 py-1.5 px-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 sm:text-sm sm:leading-6"
            />
          </div>
        </div>

        <div>
          <label htmlFor="email" className="block text-md font-medium leading-6 text-gray-900">
            Email address
          </label>
          <div className="mt-2">
            <input
              id="email"
              name="email"
              type="email"
              autoComplete="email"
              required
              className="block w-full rounded-md border-0 py-1.5 px-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 sm:text-sm sm:leading-6"
            />
          </div>
        </div>

        <div>
          <div className="flex items-center justify-between">
            <label htmlFor="password" className="block text-md font-medium leading-6 text-gray-900">
              Password
            </label>
          </div>
          <div className="mt-2">
            <input
              id="password"
              name="password1"
              type="password"
              autoComplete="current-password"
              required
              className="block w-full rounded-md border-0 py-1.5 px-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 sm:text-sm sm:leading-6"
            />
          </div>
        </div>

        <div>
          <div className="flex items-center justify-between">
            <label htmlFor="password" className="block text-md font-medium leading-6 text-gray-900">
              Re-enter Password
            </label>
          </div>
          <div className="mt-2">
            <input
              id="password"
              name="password2"
              type="password"
              autoComplete="current-password"
              required
              className="block w-full rounded-md border-0 py-1.5 px-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 sm:text-sm sm:leading-6"
            />
            <p className='text-red-500 text-[14px]'>{errors.password}</p>
          </div>
        </div>

        <div>
          <button
            type="submit"
            className="flex w-full gap-3 items-center justify-center rounded-md bg-[#414141] px-3 py-1.5 text-md font-semibold leading-6 text-white shadow-sm hover:bg-black transition-colors"
          >
            Signup
            {
              loading?<Loader/>:<></>
            }
          </button>
        </div>
      </form>

      <p className="mt-6 text-center text-sm text-gray-500">
        Already a member?{' '}
        <Link to="/signin" className="font-semibold leading-6 text-[#414141] hover:black">
          Signin
        </Link>
      </p>
    </div>
    </div>
    <div className="bg-red-600 grow max-w-[50%] min-h-full relative flex justify-center">
      <div className="rounded-lg p-4 w-5/6 absolute bottom-12 font-light bg-[#e4e4e4]">
        <p>"MGCloud has greatly helped me with organizing my files online, with maximum security and reliability"</p>
        <p className='text-xs'>- Joe Brittan</p>
      </div>
    </div>
  </div>
  )
}

export default Signup