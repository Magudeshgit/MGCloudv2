import React from 'react'

// Statics
import folder from '../assets/images/folder2.svg'
import mgsecure from '../assets/images/mgsecure.svg'
import add from '../assets/images/add.svg'
import upload from '../assets/images/upload.svg'

// Components
import PageNav from '../components/pagenav'
import Uploadbtn from '../components/uploadbtn'
import Folderactions from '../components/folderactions'


const Folders = () => {
  return (
    <>
        <PageNav/>
        <section className='p-6 bg-gray-100 min-h-full'>
            <div className='flex w-full justify-between items-center'>
                <p className='font-bold text-xl'>My Folders</p>
                <div className='flex gap-2'>
                    <Uploadbtn/>
                    <button className='btn m-1 py-0 font-poppins text-gray-600 border border-gray-300'>
                        Create Folder
                        <img src={add} alt="add" className=''/>
                    </button>
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
               
            </tbody>
            </table>
        </div>
        </section>
    </>

  )
}

export default Folders
