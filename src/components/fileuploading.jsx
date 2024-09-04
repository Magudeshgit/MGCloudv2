import React, { useState } from 'react'
import { XMarkIcon } from '@heroicons/react/24/outline'

const FileUploading = (props) => {
  const [show, setshow] = useState(true)
  if (!show) return <></>
  return (
    <div className='rounded-md shadow bg-gray-100 p-4 pt-12'>
        <div class="flex justify-between items-center">
        <div>
          <p className='font-medium text-sm'>{props.filename}</p>
          <p className='font-normal text-xs'>{(props.fileprogress === 100)?"File Uploaded":`${props.loaded} of ${props.filesize}`}</p>
        </div>
        <div>
          <p className='font-normal text-sm'>{props.fileprogress}%</p>
        </div>
        </div>
        <progress className="progress w-full h-1" value={props.fileprogress} max="100"></progress>
        <button className='absolute top-3 right-10 opacity-50' onClick={()=>setshow(false)}>
          <XMarkIcon className='w-4 h-4'/>
        </button>
    </div>
  )
}

export default FileUploading