import React, { useState } from 'react'

import { FILE_ICONS } from '../fileconstants'
import { XMarkIcon } from '@heroicons/react/16/solid'
import {formatBytes} from '../formatters'

const Alphafilepreview = (props) => {
  return (
    <>
    {props.show?
    <div className='absolute right-0 top-0 w-full md:w-[300px] h-full p-6 border-l z-50 bg-white'>
    <div className='flex items-center gap-2 relative'>
      <img src={FILE_ICONS[props.file.filename.toLocaleLowerCase().split('.')[1]]} className='w-8 h-8'/>
      <p className='text-xs font-semibold font-poppins'>{props.file.filename}</p>

      <button className='absolute right-0 z-50 p-2 hover:bg-gray-200 transition-colors rounded-md' onClick={()=>props.setshow(!props.show)}>
        <XMarkIcon className='w-4 h-4'/>
      </button>
    </div>
    <table class="w-full mt-6 text-[13px] text-gray-500"> 
      <tbody class="w-full flex flex-col font-poppins font-normal gap-4">
          <tr class="flex justify-between w-full">
              <td class="text-left font-medium">File Size:</td>
              <td class="text-right">{formatBytes(props.file.filesize)}</td>
          </tr>
          <tr class="flex justify-between w-full">
              <td class="text-left font-medium">File Sharing</td>
              <td class="text-right">{props.file.filesharing?"Public":"Private"}</td>
          </tr>
          <tr class="flex justify-between w-full">
              <td class="text-left font-medium">Favourite:</td>
              <td class="text-right">{props.file.isFavourite?"Yes":"No"}</td>
          </tr>
          <tr class="flex justify-between w-full">
              <td class="text-left font-medium">MGSecure:</td>
              <td class="text-right">{props.file.isMgsecure?"Yes":"No"}</td>
          </tr>
          <tr class="flex justify-between w-full">
              <td class="text-left font-medium">Date Added:</td>
              <td class="text-right">{new Date(props.file.date_created).toDateString()}</td>
          </tr>

      </tbody>
  </table>
  </div>
  :<></>}
  </>
  )
}

export default Alphafilepreview