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
    <details className="dropdown dropdown-end" ref={dropdownref}>
    <summary className="btn m-1 py-0 font-poppins text-gray-600 border border-gray-300  ">
        Upload
        <img src={upload} alt="add" className=''/>
    </summary>
    <ul className="menu dropdown-content bg-base-100 rounded-box z-[1] w-52 p-2 shadow font-poppins">
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
    </ul>
    </details>
    {showstatus.show?<UploadNotification filecount={showstatus.files.length} drawerdata={showstatus.files}/>:<></>}
    </>
  )
}

export default Uploadbtn