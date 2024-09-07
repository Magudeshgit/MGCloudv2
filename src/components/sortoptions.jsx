import React from 'react'
import { ChevronDownIcon } from '@heroicons/react/24/outline'

const Sortoptions = () => {
  return (
    <div className="dropdown">
        <div tabIndex={0} role="button" className="btn flex gap-1 font-medium text-xs shadow-sm">
          Sort by
          <ChevronDownIcon className='w-4 h-4'/>
        </div>
        <ul tabIndex={0} className="dropdown-content menu bg-base-100 rounded-box z-[1] w-52 p-2 shadow">
          <li><a>Document</a></li>
          <li><a>Image</a></li>
          <li><a>Audio</a></li>
          <li><a>Video</a></li>
        </ul>
        </div>
  )
}

export default Sortoptions