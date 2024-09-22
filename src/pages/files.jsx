import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { getUserFiles } from '../mgc_helper'

// Statics
import folder from '../assets/images/folder2.svg'
import document from '../assets/images/document.svg'
import audio from '../assets/images/audio.svg'
import picture from '../assets/images/picture.svg'
import otherfiles from '../assets/images/otherfile.svg'
import add from '../assets/images/add.svg'
import fileico from '../assets/images/fileico.svg'
import fileico2 from '../assets/images/fileico2.svg'
import sharing from '../assets/images/share.svg'
import date from '../assets/images/date.svg'
import cloud from '../assets/images/cloud.svg'
import mgsecure from '../assets/images/mgsecure.svg'
import actions from '../assets/images/actions.svg'
import fileactions from '../assets/images/threedots.svg'

// Components
import PageNav from '../components/pagenav'
import Uploadbtn from '../components/uploadbtn'
import Fileactions from '../components/fileactions'
import Statusdrawer from '../components/statusdrawer'
import UploadNotification from '../components/uploadnotification'
import T1 from '../components/t1'

// Functional Components
import { useAuth } from '../authcontext'



const Files = () => {
    const {user} = useAuth()
    const [filedata, setfiledata] = useState([])
    useEffect(()=>{
        getUserFiles(user.uid).then(f=>setfiledata(f))
    },[])
  return (
    <>
         <T1/>
        <PageNav/>
        <section className='p-6 gap-4 ml-56 bg-[#F7F7F5]'>
        <div className='flex w-full justify-between items-center'>
            <div>
                <p className='font-bold text-xl'>All Files</p>
                <p className='font-medium text-gray-500 text-xs'>You can browse through all your files.</p>
            </div>
                <Uploadbtn/>
                {/* <button className='font-medium border border-gray-300 rounded-lg px-4 py-2 flex text-sm items-center text-gray-600 hover:bg-white hover:text-black hover:invert transition-all'>
                    <p className='font-semibold'>Upload</p>
                    <img src={add} alt="add" className=''/>
                </button> */}
            </div>
        <div className="overflow-x-auto mt-5 bg-white min-h-[70vh] rounded-md shadow-md">
            <table className="table">
            {/* head */}
            <thead className='min-w-[100%]'>
                <tr>
                    <th>
                        <div className='flex gap-1'>
                        <img src={fileico} className='w-4 opacity-65'/>
                        File name
                        </div>
                    </th>
                    <th>
                        <div className='flex gap-1'>
                        <img src={sharing} className='w-4 opacity-65'/>
                        Sharing
                        </div>
                    </th>
                    <th>
                        <div className='flex gap-1'>
                        <img src={date} className='w-4 opacity-65'/>
                        Date added
                        </div>
                    </th>
                    <th>
                        <div className='flex gap-1'>
                        <img src={cloud} className='w-4 opacity-65'/>
                        Size
                        </div>
                    </th>

                    <th>
                        <div className='flex gap-1'>
                        <img src={actions} className='w-4 opacity-65'/>
                        Actions
                        </div>
                    </th>
                </tr>
            </thead>
            <tbody >
                {console.log(filedata)}
                {filedata.map(file=>(
                    <tr className='hover:shadow-md'>
                    <td className='flex items-center gap-2'>
                        <img src={fileico2} alt="folder" className='opacity-65 min-w-10 min-h-10'/>
                        <div className='flex flex-col'>
                        <p className='font-poppins text-base font-medium text-gray-700'>{file.filename}</p>
                        <p className='font-poppins text-xs text-gray-500'>{file.filesize}</p>  
                        </div>
                    </td>
                    <td className='text-gray-500'>
                        <p className='font-poppins text-sm'>{file.isShared?"Public":"Private"}</p>  
                    </td>
                    <td className='text-gray-500'>
                        <p className='font-poppins text-sm'>{file.date_created}</p>  
                    </td>
                    <td className='text-gray-500'>
                        <p className='font-poppins text-sm'>{file.filesize}</p>  
                    </td>

                    <td className='text-gray-500'>
                        <Fileactions/>
                        {/* <img src={fileactions} alt="fileactions" className='w-4'/> */}
                    </td>
                    </tr>
                ))}
               
            </tbody>
            </table>
        </div>
        </section>
    </>

  )
}

export default Files
