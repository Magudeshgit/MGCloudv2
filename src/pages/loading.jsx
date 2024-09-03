import React from 'react'

import logoimg from '../assets/images/logo.svg'

const Loading = () => {
  return (
    <section className='w-[100vh] h-[100vh] flex justify-center items-center'>
        <img src={logoimg} alt="" />
    </section>
  )
}

export default Loading