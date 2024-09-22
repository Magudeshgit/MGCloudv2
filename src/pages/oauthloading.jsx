import React from 'react'

import logoimg from '../assets/images/logo.svg'

import Loader from '../components/loader'

// import { goauth } from '../thirdparty/gdrive'

const OauthLoading = () => {
    // console.log(window.location.)
    const params = new URLSearchParams(window.location.search)
    // Implement state verification!
    let code = params.get('code')
    console.log(code)
    // const d = goauth(code)
    console.log(d)
    
  return (
    <section className='w-[100vw] h-[100vh] flex flex-col justify-center items-center p-6'>
      <div className=''>
        <div className='flex gap-4'>
          <img src={logoimg}/>
          <Loader size="w-6 h-6"/>
        </div>
        <p className='font-poppins font-medium text-xl text-gray-700'>We are Authorizing you, please hold on. This might take a few minutes.</p>
        <p className='font-poppins font-light text-gray-500'>If this takes too long, kindly reload the page.</p>
      </div>
    </section>
  )
}

export default OauthLoading
