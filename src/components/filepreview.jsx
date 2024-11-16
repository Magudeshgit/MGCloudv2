import axios from 'axios'
import React from 'react'
import DocViewer from "@cyntler/react-doc-viewer"
import { XMarkIcon, ArrowDownTrayIcon, ArrowsPointingOutIcon} from '@heroicons/react/16/solid'
import { InformationCircleIcon, HeartIcon } from '@heroicons/react/24/outline'
import {HeartIcon as SolidHeart} from '@heroicons/react/16/solid'

import { FILE_ICONS } from '../fileconstants'
import { PresignedPost } from 'aws-sdk/clients/s3'
import im from 'D:\\Magudesh\\Pictures\\MG\\20241102_130826.jpg'
import { useAuth } from '../authcontext'
import { modifyFavouriteStatus } from '../mgc_helper'

import {formatBytes} from '../formatters'

const Filepreview = (props) => {
  let urls = [
    // {uri: props.status.fileurl},
    {uri: im}, 
  ]
  
  function modifyfav()
  {
    console.log(props.status.id, props.status.userid, !props.status.isFavourite)
    modifyFavouriteStatus(props.status.id, props.status.userid, !props.status.isFavourite)
    .then(resp=>{
      const intermediatary = JSON.parse(JSON.stringify(props.status))
      intermediatary.isFavourite = resp.data.details[0].isFavourite
      props.setshow(intermediatary)
    })
  }
  function fullscreen()
  {
    const lk = document.createElement('a')
    fetch(props.status.fileurl)
    .then(e=>e.blob()
    .then(f=>{
      lk.href = URL.createObjectURL(f)
      lk.target = "_blank"
      lk.click()
      }))
  }
  function downloadfile()
  {
    console.log("lkjdfklsj")
    fetch(props.status.fileurl)
    .then(e=>e.blob()
    .then(f=>{
      const lk = document.createElement('a')
      lk.href = URL.createObjectURL(f)
      lk.setAttribute('download', props.status.filename)
      lk.click()
      }))
  }
  return (
    <section className="flex bg-black bg-opacity-20 justify-center w-full h-[100vh] items-center absolute top-0 left-0 z-50 p-6">
            {/* overlay */}
            <div className="w-full h-[550px] bg-white rounded-md overflow-y-scroll shadow-lg relative">
              <div className='w-full z-50 flex bg-white justify-between p-6 border-b sticky top-0 left-0'>
                <div className='flex gap-2'>
                  <div>
                    <img src={FILE_ICONS[props.status.filename.toLocaleLowerCase().split('.')[1]]} alt="" />
                  </div>
                  <div className=''>
                    <p className='font-medium text-sm font-poppins'>{props.status.filename}</p>
                    <p className='text-xs font-poppins'>{props.status.filesharing?"Public":"Private"}</p>
                  </div>
                </div>
                <div className='flex justify-center items-center gap-2'>
                  {props.status.isFavourite?
                  <button className='hover:bg-gray-200 p-3 rounded-md transition-all cursor-pointer' onClick={()=>modifyfav()}>
                  <SolidHeart className='w-[17px] h-5 opacity-75'/></button>:
                  <button className='hover:bg-gray-200 p-3 rounded-md transition-all cursor-pointer' onClick={()=>modifyfav()}>
                    <HeartIcon className='w-[17px] h-5'/>
                  </button>}

                  <button className='hover:bg-gray-200 p-3 rounded-md transition-all cursor-pointer' onClick={()=>fullscreen()}>
                  <ArrowsPointingOutIcon className='w-[17px] h-5 opacity-75'/>
                  </button>

                  <button className='hover:bg-gray-200 p-3 rounded-md transition-all cursor-pointer' onClick={()=>downloadfile()}>
                  <ArrowDownTrayIcon className='w-[17px] h-5 opacity-75'/>
                  </button>

                  <button className='hover:bg-gray-200 p-3 rounded-md transition-all cursor-pointer'>
                  <InformationCircleIcon className='w-[17px] h-5'/>
                  </button>
                  
                  <button className='hover:bg-gray-200 p-3 rounded-md transition-all cursor-pointer' onClick={()=>props.setshow({status:false})}>
                  <XMarkIcon className='w-[17px] h-5 opacity-75'/>
                  </button>
                </div>
              </div>

                <DocViewer 
                prefetchMethod = "GET"
                documents={urls}
                config={{
                  pdfVerticalScrollByDefault: true, 
                  pdfZoom: {
                    defaultZoom: 1.05,
                    zoomJump: 1,
                    },
                  header: {
                    disableHeader: true
                  }
                  }}
                  theme={{
                    primary: "#E4E4E4",
                    secondary: "#E4E4E4"
                  }}
                />

            <div className='absolute right-5 top-0 w-[300px] h-full pt-32 pl-4 border-l'>
              <div className='flex items-center gap-2'>
                <img src={FILE_ICONS[props.status.filename.toLocaleLowerCase().split('.')[1]]} className='w-8 h-8'/>
                <p className='text-xs font-semibold font-poppins'>{props.status.filename}</p>
              </div>
              <table class="w-full mt-6 text-[13px] text-gray-500"> 
                <tbody class="w-full flex flex-col font-poppins font-normal gap-4">
                    <tr class="flex justify-between w-full">
                        <td class="text-left font-medium">File Size:</td>
                        <td class="text-right">{formatBytes(props.status.filesize)}</td>
                    </tr>
                    <tr class="flex justify-between w-full">
                        <td class="text-left font-medium">File Sharing</td>
                        <td class="text-right">{props.status.filesharing?"Public":"Private"}</td>
                    </tr>
                    <tr class="flex justify-between w-full">
                        <td class="text-left font-medium">MGSecure:</td>
                        <td class="text-right">{}</td>
                    </tr>
                    <tr class="flex justify-between w-full">
                        <td class="text-left font-medium">Event Date:</td>
                        <td class="text-right">good</td>
                    </tr>
                    <tr class="flex justify-between w-full">
                        <td class="text-left font-medium">Event Venue:</td>
                        <td class="text-right">somewer</td>
                    </tr>

                </tbody>
            </table>
            </div>
            </div>

        </section>
  )
}

export default Filepreview