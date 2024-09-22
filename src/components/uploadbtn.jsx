import React, { useEffect, useRef, useState } from 'react'
import { UploadFiles } from '../r2_helper'

import add from '../assets/images/add.svg'
import mgsecure from '../assets/images/mgsecure.svg'
import folder from '../assets/images/folder2.svg'
import fileico from '../assets/images/fileico.svg'
import upload from '../assets/images/upload.svg'

import UploadNotification from './uploadnotification'

import { Link } from 'react-router-dom'



const Uploadbtn = () => {
    const [showstatus, Setshowstatus] = useState(
        {
            show: false,
            filecount: 0,
            files: [
            {
                filename: null,
                filesize: null,
                loaded: null,
                fileprogress: null,
                abortcontrol: null
            }
        ]
    })

    const [dropdown, setdropdown] = useState(false)

    useEffect(()=>{
        console.log(showstatus)
    }, [showstatus])
    const dropdownref = useRef(null)

    function filesupload() {
        const fileint = document.createElement('input')
        fileint.setAttribute('type', 'file')
        fileint.setAttribute('multiple', 'multiple')
        fileint.click()

        fileint.onchange = (e)=>{
            // console.log(e.target.files)
            UploadFiles(e.target.files, Setshowstatus)
        }
        dropdownref.current.removeAttribute('open')
    }

    function folderupload() {
        const fileint = document.createElement('input')
        fileint.setAttribute('type', 'file')
        fileint.setAttribute('webkitdirectory','webkitdirectory')
        fileint.setAttribute('mozdirectory','mozdirectory')
        fileint.click()

        fileint.onchange = (e)=>{
            // console.log(e.target.files)
            UploadFiles(e.target.files, Setshowstatus)
        }
        dropdownref.current.removeAttribute('open')
    }

  return (
    <>
    <div className='relative'>
    <button className='font-medium border border-gray-300 rounded-lg px-4 py-2 flex text-sm items-center text-gray-600 hover:bg-white hover:text-black hover:invert transition-all duration-300 ease-in-out'
            onClick={()=>setdropdown(!dropdown)}
    >
                    <p className='font-semibold'>Upload</p>
                    <img src={add} alt="add" className=''/>
    </button>
    {dropdown?<ul className="menu opacity-100 dropdown-content bg-base-100 rounded-box z-[1] w-52 p-2 shadow font-poppins absolute right-0 top-12 transition-all duration-300 ease-in-out">
        <li>
            <button onClick={filesupload}>
                <img src={fileico} className='opacity-65 w-4'/>
                File Upload
            </button>
        </li>
        <li>
            <button onClick={folderupload}>
                <img src={folder} className='opacity-65 w-4'/>
                Folder Upload
            </button>
        </li>
        <li>
            <Link to="/">
                <img src={mgsecure} className='opacity-65 w-4'/>
                MGSecure Upload
            </Link>
        </li>
    </ul>:<></>}
    </div>
    {showstatus.show?<UploadNotification filecount={showstatus.files.length} drawerdata={showstatus.files}/>:<></>}
    </>
  )
}

export default Uploadbtn