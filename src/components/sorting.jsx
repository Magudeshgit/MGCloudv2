import React from 'react'
import { Square2StackIcon, ListBulletIcon } from '@heroicons/react/24/outline'

const Sorting = () => {
  return (
    <div className='p-2 py-1 gap-x-4 bg-gray-100 inline-flex items-center justify-between rounded-md'>
          <div className='p-2 flex items-center gap-1 bg-white rounded-md'>
            <Square2StackIcon className='w-4 h-4'/>
            <p className='text-xs font-poppins font-medium'>List</p>
          </div>
          <div className='p-1 flex items-center gap-1'>
            <ListBulletIcon className='w-4 h-4'/>
            <p className='text-xs font-poppins font-medium'>Grid</p>
          </div>
    </div>
  )
}

export default Sorting