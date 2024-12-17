import React, { useState, useEffect, useRef } from 'react'
import logo from '../assets/images/logo.svg'
import { Link } from 'react-router-dom'
import Loader from '../components/loader'
import { useAuth } from '../authcontext'
import { useNavigate } from 'react-router-dom'

import Swiper from 'swiper/bundle'
import viewpassword from '../assets/images/viewpassword.svg'
import signinposter from '../assets/images/signinposter.png'
import arrow from '../assets/images/arrow.svg'
import test from '../assets/images/test.png'
import { Autoplay } from 'swiper/modules'
import 'swiper/css'

const Signin = () => {
  const [loading, setloading]  = useState(false)
  const [error, seterror]  = useState("")
  const {user, authenticate} = useAuth()
  const passwordfield = useRef(null)
  const navigate = useNavigate()

  useEffect(()=>{
    console.log(user)
    if (user.isAuthenticated) navigate('/home')
  }, [])

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

  function formHandler(e) {
    e.preventDefault()
    setloading(true)
    let formdata = new FormData(e.target)
    let params = 
    {
      email: formdata.get('email'),
      password: formdata.get('password')
    }
    
    authenticate(params).then(e=>{
      setloading(false)
      if (e['status'] === 'failed')
      {
        seterror("Your email and password combination is incorrect")
      }
    })

    
  }

  function ViewPassword()
  {
    if (passwordfield.current.type === "text") passwordfield.current.type = "password";
    else passwordfield.current.type = "text";
  }
  return (
    // Parent
    <div className='sm:p-6 lg:p-12 flex justify-center items-center bg-[#F5F5F5] w-full lg:max-h-[100vh]'> 
      {/* content wrapper */}
      <div className="flex max-w-[1440px] w-full min-h-max flex-wrap justify-center items-center gap-6 bg-white shadow-xl rounded-xl p-6 relative">
        <Link to="/" className='inline-flex w-fit rounded-3xl items-center gap-2 text-xs opacity-75 px-4 py-1 hover:bg-gray-200 transition-all absolute top-10 left-5'>
            <img src={arrow} alt="arrow" className='invert rotate-180 w-3 h-3'/>
            Back Home
        </Link>

        <div className="flex min-w-[300px] h-full flex-1 flex-col relative mt-12 lg:mt-0">
        <div className="">
          <img
            className="h-16 w-auto"
            src={logo}
            alt="Product Logo"
          />
          <h2 className="text-2xl font-bold leading-9 tracking-tight text-gray-900">
            Sign in to your account
          </h2>
        </div>

        <div className="mt-4 sm:w-full">
          <form className="space-y-4" action="#" method="POST" onSubmit={formHandler}>
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
                  className="block focus:ring-0 focus:border-[#7A11E3] focus:border w-full rounded-md border-0 py-1.5 px-3 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 sm:text-sm sm:leading-6"
                />
              </div>
            </div>

            <div className='relative'>
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
                  ref={passwordfield}
                  autoComplete="current-password"
                  required
                  className="block focus:ring-0 focus:border-[#7A11E3] focus:border w-full rounded-md border-0 py-1.5 px-3 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 sm:text-sm sm:leading-6"
                />
              </div>
              <img src={viewpassword} alt="viewpassword" className='absolute top-[2.64rem] right-[1rem] cursor-pointer opacity-40' onClick={ViewPassword}/>
              <p className='text-red-500 text-[14px]'>{error}</p>
            </div>

            <div>
            <button
                type="submit"
                className="flex w-full gap-3 items-center justify-center rounded-md border bg-[#7A11E3] hover:bg-[#6a29ab] text-white px-3 py-1.5 text-md font-semibold leading-6 shadow-sm  transition-colors"
              >
                Sign in
                {loading?<Loader size="w-4 h-4"/>:<></>}
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

        <div className='absolute bottom-0'>
      
        </div>
        </div>
       
        {/* <div className="min-w-[300px] w-full md:w-[50%] min-h-full rounded-xl overflow-hidden"> */}
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

export default Signin