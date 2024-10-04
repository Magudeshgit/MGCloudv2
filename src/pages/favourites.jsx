import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { getUserFiles } from '../mgc_helper'

// Statics
import fileico from '../assets/images/fileico.svg'
import sharing from '../assets/images/share.svg'
import cloud from '../assets/images/cloud.svg'
import actions from '../assets/images/actions.svg'
import heartbadge from '../assets/images/heartbadge.png'

// Components
import PageNav from '../components/pagenav'
import Uploadbtn from '../components/uploadbtn'
import Fileactions from '../components/fileactions'
import Statusdrawer from '../components/statusdrawer'
import UploadNotification from '../components/uploadnotification'
import Navbar from '../components/navbar'

// Functional Components
import { useAuth } from '../authcontext'
import { FILE_ICONS } from '../fileconstants'



const Files = () => {
    const {user} = useAuth()
    const [filedata, setfiledata] = useState([])
    const [togglesopen, settogglesopen] = useState(false)
    useEffect(()=>{
        getUserFiles(user.uid).then(f=>setfiledata(f))
    },[])

  return (
    <section className='max-h-[100vh]'>
<Navbar/>
        <section className='p-6 gap-4 lg:ml-56 bg-[#F7F7F5]'>
        <div className='flex w-full justify-between items-center'>
            <div>
                <div className='flex items-center gap-1'>
                    <p className='font-bold text-xl'>Favourites</p>
                    {/* <img src={heartbadge} alt="heartbadge" className='w-5 h-5'/> */}
                </div>
                <p className='font-medium text-gray-500 text-xs'>You can browse through all your files.</p>
            </div>
                <Uploadbtn/>
                {/* <button className='font-medium border border-gray-300 rounded-lg px-4 py-2 flex text-sm items-center text-gray-600 hover:bg-white hover:text-black hover:invert transition-all'>
                    <p className='font-semibold'>Upload</p>
                    <img src={add} alt="add" className=''/>
                </button> */}
            </div>
        <div className="overflow-x-auto mt-5 bg-white max-h-[70vh] rounded-md shadow-md">
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
                    <th className='hidden lg:table-cell'>
                        <div className='flex gap-1'>
                        <img src={sharing} className='w-4 opacity-65'/>
                        Sharing
                        </div>
                    </th>
                    <th className='hidden lg:table-cell'>
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
                {filedata.map(file=>file.isFavourite?(
                    <tr className='hover:shadow-md'>
                    <td className='flex items-center gap-2'>

                        <img src={FILE_ICONS[file.filename.toLocaleLowerCase().split('.')[1]] || FILE_ICONS['unknown']} alt="folder" className='opacity-65 min-w-10 min-h-10'/>
                        
                        <div className='flex flex-col'>
                        <div className='flex gap-2'>
                            <p className='font-poppins text-sm font-medium text-gray-700'>{file.filename}</p>
                            <img src={heartbadge} className='w-4 h-4'/>
                        </div>
                        <p className='font-poppins text-xs text-gray-500'>{new Date(file.date_created.slice(0,10)).toDateString()}</p>  
                        </div>
                    </td>
                    <td className='text-gray-500 hidden lg:table-cell'>
                        <p className='font-poppins text-sm'>{file.isShared?"Public":"Private"}</p>  
                    </td>
                    {/* <td className='text-gray-500'>
                        <p className='font-poppins text-sm'>{file.date_created.slice(0,10)}</p>  
                    </td> */}
                    <td className='text-gray-500 hidden lg:table-cell'>
                        <p className='font-poppins text-sm'>{file.filesize}</p>  
                    </td>

                    <td className='text-gray-500'>
                        <Fileactions/>
                        {/* <img src={fileactions} alt="fileactions" className='w-4'/> */}
                    </td>
                    </tr>
                ):<></>)}
               
            </tbody>
            </table>
        </div>
        </section>
    </section>
  )
}

export default Files
