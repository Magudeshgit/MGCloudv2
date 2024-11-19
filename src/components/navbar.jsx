import {React, useRef, useState} from 'react'
import { Cog6ToothIcon, Bars3Icon, MagnifyingGlassIcon } from '@heroicons/react/24/outline'
import searchbtn from '../assets/images/searchbtn.svg'
import logo from '../assets/images/logo.svg'
import { Button } from '@headlessui/react'
import Uploadbtn from './uploadbtn'
import add from '../assets/images/add.svg'
import PageNav from './pagenav'
import { XMarkIcon } from '@heroicons/react/16/solid'

import { Link } from 'react-router-dom'

import files from '../assets/images/navigation/file.svg'
import folder from '../assets/images/navigation/folder.svg'
import share from '../assets/images/navigation/share.svg'
import favourite from '../assets/images/navigation/favourite.svg'
import mgsecure from '../assets/images/navigation/mgsecure.svg'
import trash from '../assets/images/navigation/trash.svg'
import profileeg from '../assets/images/profileeg.svg'
import status from '../assets/images/status.svg'
import UploadNotification from './uploadnotification'

import {DocumentIcon, FolderIcon, HeartIcon, ShareIcon, LockClosedIcon, TrashIcon} from '@heroicons/react/24/outline'

// The SideBar

const navigation = [
  { name: 'All Files', href: '/files', image: <DocumentIcon className='w-5 h-5 opacity-85'/>},
  { name: 'Folders', href: '/folders', image: <FolderIcon className='w-5 h-5 opacity-85'/>},
  { name: 'MGSecure', href: '/mgsecure',image: <LockClosedIcon className='w-5 h-5 opacity-85'/>},
  
  { name: 'Favourites', href: '/favourites', image: <HeartIcon className='w-5 h-5 opacity-85'/>},

  { name: 'Shared', href: '/integrations', image: <ShareIcon className='w-5 h-5 opacity-85'/>},
  { name: 'Trash', href: '/trash', image: <TrashIcon className='w-5 h-5 opacity-85'/>},
]

const Navbar = () => {
  const sidebar = useRef()
  const logoref = useRef()
  const searchref = useRef()
  const searchicoref = useRef()
  const xMark = useRef()

  const [notificationstatus, setnotificationstatus] = useState(false)

  function sidebarHandler()
  {
    sidebar.current.classList.toggle('active')
  }
  function showSearch(e)
  {
    
    logoref.current.classList.toggle("hidden")
    searchref.current.classList.toggle("hidden")
    xMark.current.classList.toggle("hidden")
    searchicoref.current.classList.toggle('hidden')
  }
  return (
    <>
    <div className='w-[100vw] bg-white shadow py-3 px-4 flex justify-between items-center gap-5 lg:gap-28'>
      <button className='lg:hidden p-1 hover:bg-gray-100 transition-all rounded-md' onClick={()=>{<PageNav sidebaropen={true}/>}}>
      <Bars3Icon className='w-6 h-6 opacity-65' onClick={sidebarHandler}/>
      </button>

      <div ref={logoref} className='logo'>
        <img src={logo} alt="logo" className='lg:w-52'/>
      </div>

      {/* Search Bar */}
      <div className='relative hidden md:block transition-all duration-700 w-full' ref={searchref}>
      <img src={searchbtn} className='absolute opacity-35 top-2 left-2 max-w-4'/>
      <input type="text" className='bg-gray-100 rounded-md border-none font-poppins text-xs w-full placeholder-gray-400 pl-8' placeholder='Search your files/folders'/>
      </div>

      <div className='gap-1 flex'>
        <button className='rounded-full p-2 hover:bg-gray-100  md:hidden' onClick={()=>showSearch()} ref={searchicoref}>
        <img src={searchbtn} className='max-w-5 opacity-75'/>
        </button>
        <button className='rounded-full p-2 hover:bg-gray-100 hidden' ref={xMark} onClick={()=>showSearch()}>
        <XMarkIcon className='w-5 h-5 opacity-65'/>
        </button>


        <div className='relative hidden md:block'>
          <button className='rounded-full p-2 hover:bg-gray-100' onClick={()=>setnotificationstatus(!notificationstatus)}>
            <img src={status} className='opacity-35 max-w-8'/>
          </button>

          {notificationstatus?<UploadNotification filecount={0} drawerdata={[]}/>:<></>}
        </div>

        <img src={profileeg} alt="profile" className='max-w-8' />
        
      </div>

    </div>
{/* Side Bar */}
<div id="default-sidebar" class="fixed top-18 left-[-224px] lg:left-0 w-56 bg-white z-50 sidebar h-screen transition-all duration-300 ease-in-out" aria-label="Sidebar" ref={sidebar}>
  <div class="h-full px-3 py-4 overflow-y-auto dark:bg-gray-800">
    <ul class="space-y-2 font-medium font-poppins">
      {navigation.map((element, index)=>
        <li key={index}>
          <Link to={element.href} class="flex gap-2 items-center p-2 text-sm text-gray-500 rounded-lg dark:text-white hover:bg-white hover:text-black group hover:invert transition-all duration-200">
              {element.image}
              {element.name}  
          </Link> 
        </li>
        )}
    </ul>
  </div>
</div>
</>
  )
}

export default Navbar