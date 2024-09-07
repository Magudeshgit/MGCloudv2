import React from 'react'

// Statics
import folder from '../assets/images/folder2.svg'
import document from '../assets/images/document.svg'
import audio from '../assets/images/audio.svg'
import picture from '../assets/images/picture.svg'
import otherfiles from '../assets/images/otherfile.svg'
import add from '../assets/images/add.svg'
import fileico from '../assets/images/fileico.svg'
import sharing from '../assets/images/share.svg'
import date from '../assets/images/date.svg'
import cloud from '../assets/images/cloud.svg'
import mgsecure from '../assets/images/mgsecure.svg'
import actions from '../assets/images/actions.svg'
import fileactions from '../assets/images/threedots.svg'

// Components
import PageNav from '../components/pagenav'
import Uploadbtn from '../components/uploadbtn'
import { Link } from 'react-router-dom'
import Favouriteactions from '../components/favouriteactions'


const Favourites = () => {
    console.log(window.location.pathname)
  return (
    <>
        <PageNav/>
        <section className='p-6 bg-gray-100 min-h-full'>
        <div className='flex w-full justify-between items-center'>
            <div>
                <p className='font-bold text-xl'>Favourite Files</p>
                <p className='font-medium text-gray-500 text-xs'>All you favourite files will appear here.</p>
            </div>
            </div>
        <div className="overflow-x-auto mt-5 bg-white rounded-md shadow-md">
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

                <tr className='hover:shadow-md'>
                <td className='flex items-end gap-1'>
                    <img src={document} alt="folder" className='opacity-85'/>
                    Resume.docx
                </td>
                <td className='text-gray-500'>Private</td>
                <td className='text-gray-500'>Aug, 16, 2024</td>
                <td className='text-gray-500'>14KB</td>
                <td className='text-gray-500'><Favouriteactions/></td>
                </tr>

                <tr>
                <td className='flex items-end gap-1'>
                    <img src={audio} alt="folder" className='opacity-85'/>
                    Thani Vazhi.mp4
                </td>
                <td className='text-gray-500'>Private</td>
                <td className='text-gray-500'>Aug, 16, 2024</td>
                <td className='text-gray-500'>7.2MB</td>
                </tr>

                <tr>
                <td className='flex items-end gap-1'>
                    <img src={picture} alt="folder" className='opacity-85'/>
                    Scenary.png
                </td>
                <td className='text-gray-500'>Public</td>
                <td className='text-gray-500'>Aug, 16, 2024</td>
                <td className='text-gray-500'>1.2MB</td>
                </tr>
               
            </tbody>
            </table>
        </div>
        </section>
    </>

  )
}

export default Favourites
