import React from 'react'
import logo from '../assets/images/logo.svg'
import { Link } from 'react-router-dom'

const Signin = () => {
  return (
    <div className="flex w-full items-center">
    <div className="flex min-h-full w-[50%] flex-1 flex-col px-6 py-8 lg:px-8">
      
    <div className="sm:mx-auto sm:w-full sm:max-w-sm">
      <img
        className="h-16 w-auto"
        src={logo}
        alt="Product Logo"
      />
      <h2 className="mt-4 text-2xl font-bold leading-9 tracking-tight text-gray-900">
        Sign in to your account
      </h2>
    </div>

    <div className="mt-4 sm:mx-auto sm:w-full sm:max-w-sm">
      <form className="space-y-4" action="#" method="POST">
        <div>
          <label htmlFor="email" className="block text-sm font-medium leading-6 text-gray-900">
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
            <label htmlFor="password" className="block text-sm font-medium leading-6 text-gray-900">
              Password
            </label>
          </div>
          <div className="mt-2">
            <input
              id="password"
              name="password"
              type="password"
              autoComplete="current-password"
              required
              className="block w-full rounded-md border-0 py-1.5 px-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 sm:text-sm sm:leading-6"
            />
          </div>
        </div>

        <div>
          <button
            type="submit"
            className="flex w-full justify-center rounded-md bg-[#414141] px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-black transition-colors"
          >
            Sign in
          </button>
        </div>
      </form>

      <p className="mt-6 text-center text-sm text-gray-500">
        Not a member?{' '}
        <Link to="/signup" className="font-semibold leading-6 text-[#414141] hover:black">
          Signup
        </Link>
      </p>
    </div>
    </div>
    <div className="bg-[#d9d9d9] w-[50%] h-full">

    </div>
  </div>
  )
}

export default Signin