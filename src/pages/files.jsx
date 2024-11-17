import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { getUserFiles, getFileURL } from '../mgc_helper'
import { ArrowsUpDownIcon, AdjustmentsHorizontalIcon } from '@heroicons/react/24/outline'

// Statics
import fileico from '../assets/images/fileico.svg'
import sharing from '../assets/images/share.svg'
import cloud from '../assets/images/cloud.svg'
import actions from '../assets/images/actions.svg'
import date from '../assets/images/date.svg'

// Components
import Uploadbtn from '../components/uploadbtn'
import Fileactions from '../components/fileactions'
import Navbar from '../components/navbar'
import Sortoptions from '../components/sortoptions'
import Filepreview from '../components/filepreview'
import Previewactions from '../components/previewactions'

// Functional Components
import { useAuth } from '../authcontext'
import { FILE_ICONS } from '../fileconstants'
import { alphabeticalSorter, dateSorter, formatBytes, sizeSorter } from '../formatters'



const Files = () => {
    const {user} = useAuth()
    const [filedata, setfiledata] = useState({
        filemeta: {
            alphasorted: false,
            datesorted: false,
            sizesorted: false
        },
        filedata: []
    })
    const [statuspreview, setstatuspreview] = useState({
        show: false,
        fileurl: null,
        filename: null,
        isFavourite: null,
        filesharing: null
    })
    useEffect(()=>{
        getUserFiles(user.uid).then(f=>{
            // alphabeticalSorter(f)
            let temp = filedata.filemeta
            setfiledata({filemeta: temp, filedata: f})
            console.log("Non Updated", f)
        })
    },[])

    function sorthandler(type){
        let op;
        let temp = filedata.filemeta
        if (type === 'alpha')
        {
            op = alphabeticalSorter(filedata.filedata, filedata.filemeta.alphasorted)
            temp.alphasorted = !temp.alphasorted
        }
        else if (type === 'date')
        {
            op = dateSorter(filedata.filedata, filedata.filemeta.datesorted)
            temp.datesorted = !temp.datesorted
        }
        else 
        {
            op = sizeSorter(filedata.filedata, filedata.filemeta.sizesorted)
            temp.sizesorted = !temp.sizesorted
        }

        setfiledata({filemeta: temp, filedata: op})
    }

    function previewhandler(file){
 
        getFileURL(file.filename).then(url=>{
            setstatuspreview({
                show: true,
                userid:user.uid,
                fileurl: url,
                filedata: file
            })
        })
    }
  
    return (
    <section className='relative w-full bg-[#F7F7F5] h-[90vh]'>
        <Navbar/>
        {statuspreview.show?<Filepreview status={statuspreview} setshow={setstatuspreview} fileurl={statuspreview.fileurl}/>:<></>}
        <section className='p-6 gap-4 lg:ml-56 bg-[#F7F7F5] h-[100%]'>
        <div className='flex w-full justify-between items-center'>
            <div>
                <p className='font-bold text-xl'>All Files</p>
                <p className='font-medium text-gray-500 text-xs'>You can browse through all your files.</p>
            </div>
                <Uploadbtn fileupdate={setfiledata}/>
            </div>
        <div className="overflow-x-auto mt-5 bg-white min-h-[50vh] rounded-md shadow-md">
            <table className="table">
            {/* head */}
            <thead className='min-w-[100%]'>
                <tr>
                        <th className='hover:bg-gray-100 transition-colors cursor-pointer flex justify-between' onClick={()=>sorthandler('alpha')}>
                            <div className='flex gap-1 items-center'>
                            <img src={fileico} className='w-4 opacity-65'/>
                            File name
                            </div>
                            <div className='p-1 hover:bg-gray-100 rounded-md hidden md:block'>
                                <ArrowsUpDownIcon className='w-4 h-4 opacity-65'/>
                            </div>
                        </th>
                    <th className='hidden lg:table-cell hover:bg-gray-100 transition-colors cursor-pointer' onClick={()=>sorthandler('date')}>
                        <div className='flex justify-between'>
                            <div className='flex gap-1 items-center'>
                            <img src={date} className='w-4 opacity-65'/>
                            Date Added
                            </div>

                            <div className='p-1 hover:bg-gray-100 rounded-md '>
                                    <ArrowsUpDownIcon className='w-4 h-4 opacity-65'/>
                            </div>
                        </div>
                    </th>
                    <th className='hidden lg:table-cell hover:bg-gray-100 transition-colors cursor-pointer' onClick={()=>sorthandler()}>
                        <div className='flex justify-between'>
                            <div className='flex gap-1 items-center'>
                                <img src={cloud} className='w-4 opacity-65'/>
                                Size
                            </div>
                            <div className='p-1 hover:bg-gray-100 rounded-md '>
                                    <ArrowsUpDownIcon className='w-4 h-4 opacity-65'/>
                            </div>
                        </div>
                    </th>

                    <th className=''>
                        <div className='flex gap-1 justify-center'>
                        <img src={actions} className='w-4 opacity-65 hidden  md:block'/>
                        <div className='md:hidden'>
                            <Sortoptions/>
                        </div>
                        <p className='hidden md:block'>
                        Actions
                        </p>
                        </div>
                    </th>
                </tr>
            </thead>
            <tbody>
                {filedata.filedata.map(file=>(
                    <tr className='hover:shadow-md transition-all duration-300 cursor-pointer' key={file.id}>
                    <td className='flex items-center gap-2 hover:bg-gray-100 transition-all h-full rounded-md' onClick={()=>previewhandler(file)}>
                        <img src={FILE_ICONS[file.filename.toLocaleLowerCase().split('.')[1]] || FILE_ICONS['unknown']} alt="folder" className='opacity-65 min-w-10 min-h-10'/>
                        
                        <div className='flex flex-col'>
                        <p className='font-poppins text-sm font-medium text-gray-700'>{file.filename}</p>
                        <p className='font-poppins text-xs text-gray-500'>{file.isShared?"Public":"Private"}</p>  
                        </div>
                    </td>
                    <td className='text-gray-500 hidden lg:table-cell'>
                        <p className='font-poppins text-sm'>{new Date(file.date_created.slice(0,10)).toDateString()}</p>  
                    </td>
                    {/* <td className='text-gray-500'>
                        <p className='font-poppins text-sm'>{file.date_created.slice(0,10)}</p>  
                    </td> */}
                    <td className='text-gray-500 hidden lg:table-cell'>
                        <p className='font-poppins text-sm'>{formatBytes(file.filesize)}</p>  
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
    </section>
  )
}

export default Files
