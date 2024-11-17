import axios from 'axios'
import React, { useEffect, useState, memo } from 'react'
// import DocViewer from "@cyntler/react-doc-viewer"
import { XMarkIcon, ArrowDownTrayIcon, ArrowsPointingOutIcon} from '@heroicons/react/16/solid'
import { InformationCircleIcon, HeartIcon } from '@heroicons/react/24/outline'
import {HeartIcon as SolidHeart} from '@heroicons/react/16/solid'
import Documentviewer from './documentviewer'
import Previewactions from './previewactions'

import { FILE_ICONS } from '../fileconstants'
import { modifyFavouriteStatus, getFileDownloadURL, getFileURL } from '../mgc_helper'

import {formatBytes} from '../formatters'

const Filepreview = (props) => {
  const [showfiledetail, setfiledetail] = useState(false)
  
  function modifyfav()
  {
    modifyFavouriteStatus(props.status.filedata.id, props.status.userid, !props.status.filedata.isFavourite)
    .then(resp=>{
      const intermediatary = JSON.parse(JSON.stringify(props.status))
      intermediatary.filedata.isFavourite = resp.data.details[0].isFavourite
      props.setshow(intermediatary)
    })
  }
  function downloadfile()
  {
    getFileDownloadURL(props.status.filedata.filename).then(e=>{
      window.location.href = e
    })
  }
  function infoCallback()
  {
    setfiledetail(!showfiledetail)
  }
  function closureCallback()
  {
    props.setshow({show: false})
  }
  return (
    <section className="flex bg-black bg-opacity-20 justify-center w-full h-[100vh] items-center absolute top-0 left-0 z-50 p-6">
            {/* overlay */}
            <div className="w-full h-[450px] md:h-[550px] bg-white rounded-md overflow-y-scroll shadow-lg relative">
              <div className='w-full z-50 flex bg-white justify-between p-2 md:p-6 border-b items-center sticky top-0 left-0'>
                <div className='flex gap-2'>
                  <div>
                    <img src={FILE_ICONS[props.status.filedata.filename.toLocaleLowerCase().split('.')[1]]} alt="" />
                  </div>
                  <div className=''>
                    <p className='font-medium text-sm font-poppins'>{props.status.filedata.filename}</p>
                    <p className='text-xs font-poppins'>{props.status.filedata.filesharing?"Public":"Private"}</p>
                  </div>
                </div>

                {/* Action buttons */}
                <div className='justify-center items-center gap-2 hidden md:flex'>
                  {props.status.filedata.isFavourite?
                  <button className='hover:bg-gray-200 p-3 rounded-md transition-all cursor-pointer' onClick={()=>modifyfav()}>
                  <SolidHeart className='w-[17px] h-5 opacity-75'/></button>:
                  <button className='hover:bg-gray-200 p-3 rounded-md transition-all cursor-pointer' onClick={()=>modifyfav()}>
                    <HeartIcon className='w-[17px] h-5'/>
                  </button>}

                  <button className='hover:bg-gray-200 p-3 rounded-md transition-all cursor-pointer' onClick={()=>downloadfile()}>
                  <ArrowDownTrayIcon className='w-[17px] h-5 opacity-75'/>
                  </button>

                  <button className='hover:bg-gray-200 p-3 rounded-md transition-all cursor-pointer' onClick={()=>infoCallback()}>
                  <InformationCircleIcon className='w-[17px] h-5'/>
                  </button>
                  
                  <button className='hover:bg-gray-200 p-3 rounded-md transition-all cursor-pointer' onClick={()=>closureCallback()}>
                  <XMarkIcon className='w-[17px] h-5 opacity-75'/>
                  </button> 
                </div>

                {/* Mobile Menu */}
                <Previewactions
                favouritestatus={props.status.filedata.isFavourite}
                favouritecallback={modifyfav}
                downloadcallback={downloadfile}
                infocallback={infoCallback}
                closurecallback={closureCallback}
                
                />
              </div>
                    
              <Documentviewer fileurl={props.fileurl}/>

            {showfiledetail?
            <>
            <div className='absolute right-0 top-0 w-full md:w-[300px] h-full pt-32 px-4 border-l bg-white'>
              <div className='flex items-center gap-2 relative'>
                <img src={FILE_ICONS[props.status.filedata.filename.toLocaleLowerCase().split('.')[1]]} className='w-8 h-8'/>
                <p className='text-xs font-semibold font-poppins'>{props.status.filedata.filename}</p>

                <button className='absolute right-0 z-50 p-2 hover:bg-gray-200 transition-colors rounded-md' onClick={()=>setfiledetail(false)}>
                  <XMarkIcon className='w-4 h-4'/>
                </button>
              </div>
              <table class="w-full mt-6 text-[13px] text-gray-500"> 
                <tbody class="w-full flex flex-col font-poppins font-normal gap-4">
                    <tr class="flex justify-between w-full">
                        <td class="text-left font-medium">File Size:</td>
                        <td class="text-right">{formatBytes(props.status.filedata.filesize)}</td>
                    </tr>
                    <tr class="flex justify-between w-full">
                        <td class="text-left font-medium">File Sharing</td>
                        <td class="text-right">{props.status.filedata.filesharing?"Public":"Private"}</td>
                    </tr>
                    <tr class="flex justify-between w-full">
                        <td class="text-left font-medium">Favourite:</td>
                        <td class="text-right">{props.status.filedata.isFavourite?"Yes":"No"}</td>
                    </tr>
                    <tr class="flex justify-between w-full">
                        <td class="text-left font-medium">MGSecure:</td>
                        <td class="text-right">{props.status.filedata.isMgsecure?"Yes":"No"}</td>
                    </tr>
                    <tr class="flex justify-between w-full">
                        <td class="text-left font-medium">Date Added:</td>
                        <td class="text-right">{new Date(props.status.filedata.date_created).toDateString()}</td>
                    </tr>

                </tbody>
            </table>
            </div>
            </>
            :<></>
            }
            </div>

        </section>
  )
}

export default Filepreview
