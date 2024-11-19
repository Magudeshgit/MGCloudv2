import React, { useState } from 'react'

import fileactions from '../assets/images/threedots.svg'
import download from '../assets/images/download.svg'
import move from '../assets/images/move.svg'
import copy from '../assets/images/copy.svg'
import trash from '../assets/images/trashred.svg'
import info from '../assets/images/info.svg'
import { Link } from 'react-router-dom'
import { Menu, MenuButton, MenuItem, MenuItems } from '@headlessui/react'
import { HeartIcon as Solidheart } from '@heroicons/react/20/solid'

import { XMarkIcon, ArrowDownTrayIcon, ArrowsPointingOutIcon, TrashIcon} from '@heroicons/react/16/solid'
import { InformationCircleIcon, HeartIcon } from '@heroicons/react/24/outline'

import { modifyFavouriteStatus, getFileDownloadURL, deleteObject } from '../mgc_helper'

import Alphafilepreview from './alphafilepreview'

const Fileactions = (props) => {
    // Available Props: Filedata, User UID, filestate, setsfilestate
    const  [showpreview, setshowpreview] = useState(false)
    function modifyFavourite()
    {
        modifyFavouriteStatus(props.file.id, props.userid, !props.file.isFavourite)
        .then(resp=>{
            if (resp.data.success)
            {
                let intermediatary = [...props.filestate.filedata]
                intermediatary.find(e=>e.id===props.file.id).isFavourite = !props.file.isFavourite

                props.setfilestate({filemeta: props.filestate.filemeta, filedata: intermediatary})
            }
        })
    }

    function downloadFile()
    {
        getFileDownloadURL(props.file.filename).then(e=>{
            window.location.href=e
        })
    }
    function deleteFile()
    {
      deleteObject(props.file.id, props.userid).then(resp=>{
        if (resp.data.success)
        {
          let intermediatary = [...props.filestate.filedata]
          console.log(props.file.id)
          intermediatary.splice(intermediatary.indexOf(intermediatary.find(e=>e.id===props.file.id)),1)
          props.setfilestate({filemeta: props.filestate.filemeta, filedata: intermediatary})
        }
      })
    }
  
  return (
    <>
    {showpreview?<Alphafilepreview file={props.file} show={showpreview} setshow={setshowpreview}/>:<></>}
    <Menu as="div" className="relative inline-block text-left">
    <div>
      <MenuButton className="inline-flex w-full justify-center gap-x-1.5 rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 ring-gray-300 hover:bg-gray-50">
           <img src={fileactions} alt="" />
      </MenuButton>
    </div>

    <MenuItems
      transition
      className="absolute z-50 right-0 mt-2 w-48 origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black/5 transition focus:outline-none data-[closed]:scale-95 data-[closed]:transform data-[closed]:opacity-0 data-[enter]:duration-100 data-[leave]:duration-75 data-[enter]:ease-out data-[leave]:ease-in"
    >
      <div className="py-1 font-poppins">
        <MenuItem>
            <button className='flex items-center gap-1 w-full  px-4 py-2 text-xs font-normal text-gray-700 data-[focus]:bg-gray-100 data-[focus]:text-gray-900 data-[focus]:outline-none' onClick={()=>modifyFavourite()}>
                {props.file.isFavourite?
                <>
                <Solidheart className='w-4 h-4'/>
                Favourite
                </>
                :
                <>
                <HeartIcon className='w-4 h-4'/>
                Add to Favourtie
                </>
                }
            </button>
        </MenuItem>
        <MenuItem>
            <button className='flex items-center gap-1 w-full  px-4 py-2 text-xs font-normal text-gray-700 data-[focus]:bg-gray-100 data-[focus]:text-gray-900 data-[focus]:outline-none' onClick={()=>downloadFile()}>
            <ArrowDownTrayIcon className='w-4 h-4'/>
            Download
            </button>
        </MenuItem>
        <MenuItem>
        <button className='flex items-center gap-1 w-full  px-4 py-2 text-xs font-normal text-gray-700 data-[focus]:bg-gray-100 data-[focus]:text-gray-900 data-[focus]:outline-none' onClick={()=>setshowpreview(!showpreview)}>
            <InformationCircleIcon className='w-4 h-4'/>
            Information
            </button>
        </MenuItem>
        <hr/>
        <MenuItem>
        <button className='flex items-center gap-1 w-full  px-4 py-2 text-xs font-normal text-red-500 data-[focus]:bg-gray-100 data-[focus]:text-red-700 data-[focus]:outline-none' onClick={()=>deleteFile()}>
            <TrashIcon className='w-4 h-4'/>
            Delete
            </button>
        </MenuItem>
      </div>
    </MenuItems>
  </Menu>
  </>
  )
}

export default Fileactions