import React, {useState, useEffect} from 'react'
import { getUserDirectories } from '../mgc_helper'
import { useAuth } from '../authcontext'
// Statics
import folder from '../assets/images/folder2.svg'
import mgsecure from '../assets/images/mgsecure.svg'
import add from '../assets/images/add.svg'
import upload from '../assets/images/upload.svg'
import { FolderIcon } from '@heroicons/react/20/solid'
// Components
import PageNav from '../components/pagenav'
import Uploadbtn from '../components/uploadbtn'
import Folderactions from '../components/folderactions'
import T1 from '../components/t1'


const Folders = () => {
    const {user} = useAuth()
    const [filedata, setfiledata] = useState([])
    useEffect(()=>{
        getUserDirectories(user.uid).then(f=>setfiledata(f))
        console.log(filedata)
    },[])
  return (
    <>
        <T1/>
        <PageNav/>
        <section className='p-6 gap-4 ml-56'>
            <div className='flex w-full justify-between items-center'>
                <p className='font-bold text-xl'>My Folders</p>
                <div className='flex gap-2'>
                    <Uploadbtn/>
                    {/* <button className='btn m-1 py-0 font-poppins text-gray-600 border border-gray-300'>
                        Create Folder
                        <img src={add} alt="add" className=''/>
                    </button> */}
                </div>
            </div>
        <div className="overflow-x-auto mt-5 bg-white rounded-md shadow-md">
            <table className="table">
            {/* head */}
            <thead>
                <tr>
                <th>Folder Name</th>
                <th>Sharing</th>
                <th>Date Created</th>
                </tr>
            </thead>
            <tbody >

                <tr>
                <td className='flex items-end gap-1 font-semibold'>
                    <img src={mgsecure} alt="folder" />
                    MGSecure
                </td>
                <td className='text-gray-500'>Private</td>
                <td className='text-gray-500'>12, July, 2024</td>
                <td className='text-gray-500'><Folderactions/></td>
                </tr>

                <tr>
                <td className='flex items-end gap-1 font-semibold'>
                    <img src={folder} alt="folder" />
                    Documents
                </td>
                <td className='text-gray-500'>Private</td>
                <td className='text-gray-500'>12, July, 2024</td>
                </tr>

                <tr>
                <td className='flex items-end gap-1 font-semibold'>
                    <img src={folder} alt="folder" />
                    Pictures
                </td>
                <td className='text-gray-500'>Private</td>
                <td className='text-gray-500'>12, July, 2024</td>
                </tr>

                <tr>
                <td className='flex items-end gap-1 font-semibold'>
                    <img src={folder} alt="folder" />
                    Audio
                </td>
                <td className='text-gray-500'>Private</td>
                <td className='text-gray-500'>12, July, 2024</td>
                </tr>
                {console.log(filedata)}
                {filedata.map(file=>(
                    <tr className='hover:shadow-md'>
                    <td className='flex items-end gap-1'>
                        {/* <img src={document} alt="folder" className='opacity-85'/> */}
                        <FolderIcon className='w-4 h-4'/>
                        {file.dirName}
                    </td>
                    <td className='text-gray-500'>Private</td>
                    <td className='text-gray-500'>{file.createdOn}</td>
                    <td className='text-gray-500'>{file.diskSize}</td>
                    <td className='text-gray-500'>  
                        <Folderactions/>  
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

export default Folders
