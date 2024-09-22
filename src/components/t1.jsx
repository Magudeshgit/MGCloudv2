import React from 'react'
import { Cog6ToothIcon } from '@heroicons/react/24/outline'
import logo from '../assets/images/logo.svg'
import { Button } from '@headlessui/react'
import Uploadbtn from './uploadbtn'
import add from '../assets/images/add.svg'

const T1 = () => {
  return (
    <div className='w-[100vw] bg-white shadow py-2 px-4 flex justify-between items-center'>
    <div>
      <img src={logo} alt="logo" />
    </div>
    <div className='items-center flex gap-4'>
        <Uploadbtn/>
        <button className='bg-gray-100 rounded-full p-1'>
        <Cog6ToothIcon className='w-6 h-6 opacity-65'/>
        </button>
    </div>
</div>
  )
}

export default T1