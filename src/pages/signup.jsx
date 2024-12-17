import React, { useState, useEffect } from 'react'
import logo from '../assets/images/logo.svg'
import { Link, useNavigate } from 'react-router-dom'
import Loader from '../components/loader'

import { useAuth } from '../authcontext'
import Swiper from 'swiper/bundle'
import viewpassword from '../assets/images/viewpassword.svg'
import signinposter from '../assets/images/signinposter.png'
import test from '../assets/images/test.png'


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
    
  const swiper = new Swiper('.swiper-container', {
    grabCursor: true,
    slidesPerView: 1,
    
    autoplay: {
      delay: 3000,
    },
    loop: true,
    
    // pagination: {
    //   el: ".swiper-pagination",
    //   clickable: true,
    // },
  })
  return (
    <div className="flex w-full sm:p-6 lg:p-12 h-screen bg-[#F5F5F5] flex-wrap gap-6 items-center">
    <div className="flex max-w-[1440px] w-full max-h-full overflow-y-scroll flex-wrap lg:flex-nowrap justify-center items-center gap-6 bg-white shadow-xl rounded-xl p-6">
      <div className="flex flex-col w-full lg:w-[50%]">
        
      <div className="mt-12">
        <img
          className="h-16 w-auto"
          src={logo}
          alt="Product Logo"  
        />
        <h2 className="text-2xl font-bold leading-9 tracking-tight text-gray-900">
          Create an account
        </h2>
      </div>

      <div className="mt-4 sm:w-full min-h-full min-w-[80%]">
        <form className="space-y-4" method="POST" onSubmit={formHandler}>
        <div>
            <label htmlFor="email" className="block text-sm font-medium leading-6 text-gray-900">
              Fullname
            </label>
            <div className="mt-2">
              <input
                id="email"
                name="fullname"
                type="text"
                autoComplete="email"
                required
                className="block w-full focus:ring-0 focus:border-[#7A11E3] rounded-md focus:border border-0 py-1.5 px-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 sm:text-sm sm:leading-6"
              />
            </div>
          </div>

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
                className="block w-full focus:ring-0 focus:border-[#7A11E3] focus:border border-0 rounded-md py-1.5 px-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 sm:text-sm sm:leading-6"
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
                name="password1"
                type="password"
                autoComplete="current-password"
                required
                className="block w-full focus:ring-0 focus:border-[#7A11E3] focus:border border-0 rounded-md py-1.5 px-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 sm:text-sm sm:leading-6"
              />
            </div>
          </div>

          <div>
            <div className="flex items-center justify-between">
              <label htmlFor="password" className="block text-sm font-medium leading-6 text-gray-900">
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
                className="block w-full focus:ring-0 focus:border-[#7A11E3] rounded-md focus:border border-0 py-1.5 px-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 sm:text-sm sm:leading-6"
              />
              <p className='text-red-500 text-[14px]'>{errors.password}</p>
            </div>
          </div>

          <div>
            <button
              type="submit"
              className="flex w-full focus:ring-0 focus:border-[#7A11E3] bg-[#7A11E3] hover:bg-[#6a29ab] gap-3 items-center justify-center rounded-md px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm transition-colors"
            >
              Signup
              {
                loading?<Loader size="w-3 h-4"/>:<></>
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
      <div className='swiper-container overflow-hidden w-[500px] min-h-full rounded-xl'>
          <div className='swiper-wrapper flex'>
            <div className='swiper-slide'>
              <img src={signinposter} alt="" />
            </div>
            <div className='swiper-slide'>
              <img src={test} alt="" />
            </div>
          </div>
        </div>
    </div>
  </div>
  )
}

export default Signup