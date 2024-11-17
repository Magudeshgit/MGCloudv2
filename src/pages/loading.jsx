import React from 'react'

import logoimg from '../assets/images/logo.svg'

import Loader from '../components/loader'

const Loading = () => {
  return (
    <section className='w-[100vw] h-[100vh] flex flex-col justify-center items-center p-6'>
      <div className='flex flex-col justify-center items-center text-center'>
        <div className='flex gap-4 items-center'>
          <img src={logoimg}/>
          <Loader size="w-6 h-6"/>
        </div>
        <p className='font-poppins font-medium text-lg text-gray-700'>We are Authorizing you, please hold on. This might take a few minutes.</p>
        <p className='font-poppins font-light text-gray-500 mt-2'>If this takes too long, kindly reload the page.</p>
        <button className='mt-4 p-2 px-6 font-poppins font-medium bg-gray-100 text-sm rounded-md'>Logout</button>
      </div>
    </section>  
  )
}

export default Loading
