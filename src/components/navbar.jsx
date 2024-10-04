import {React, useRef} from 'react'
import { Cog6ToothIcon, Bars3Icon, MagnifyingGlassIcon } from '@heroicons/react/24/outline'
import searchbtn from '../assets/images/searchbtn.svg'
import logo from '../assets/images/logo.svg'
import { Button } from '@headlessui/react'
import Uploadbtn from './uploadbtn'
import add from '../assets/images/add.svg'
import PageNav from './pagenav'

import { Link } from 'react-router-dom'

import files from '../assets/images/navigation/file.svg'
import folder from '../assets/images/navigation/folder.svg'
import share from '../assets/images/navigation/share.svg'
import favourite from '../assets/images/navigation/favourite.svg'
import mgsecure from '../assets/images/navigation/mgsecure.svg'
import trash from '../assets/images/navigation/trash.svg'



const navigation = [
  { name: 'All Files', href: '/files', image: files},
  { name: 'Folders', href: '/folders', image: folder},
  { name: 'Favourites', href: '/favourites', image: favourite},

  { name: 'Shared', href: '/integrations', image: share},
  { name: 'MGSecure', href: '/mgsecure',image: mgsecure},
  { name: 'Trash', href: '/trash', image: trash},
]

const Navbar = () => {
  const sidebar = useRef()
  function sidebarHandler()
  {
    sidebar.current.classList.toggle('active')
  }
  return (
    <>
    <div className='w-[100vw] bg-white shadow py-2 px-4 flex justify-between items-center '>
      <button className='lg:hidden p-1 hover:bg-gray-100 transition-all rounded-md' onClick={()=>{<PageNav sidebaropen={true}/>}}>
      <Bars3Icon className='w-6 h-6 opacity-65' onClick={sidebarHandler}/>
      </button>

      <div>
        <img src={logo} alt="logo" />
      </div>


      <div className='items-center flex gap-4'>
        <label className='relative focus:border-none'>
          <img src={searchbtn} className='w-4 h-4 absolute top-[12px] left-[14px] opacity-65'/>

          <input type="text" className='border-2 border-gray-200 rounded-md pl-10 focus:border-black'/>
        </label>
          <button className='rounded-full p-1 hover:bg-gray-100'>
          <Cog6ToothIcon className='w-6 h-6 opacity-65'/>
          </button>
      </div>
    </div>

<div id="default-sidebar" class="fixed top-18 left-[-224px] lg:left-0 w-56 h-screen bg-white z-50 sidebar transition-all duration-300 ease-in-out" aria-label="Sidebar" ref={sidebar}>
  <div class="h-full px-3 py-4 overflow-y-auto shadow dark:bg-gray-800">
    <ul class="space-y-2 font-medium font-poppins">
      {navigation.map(element=>
        <li>
          <Link to={element.href} class="flex gap-2 items-center p-2 text-sm text-gray-500 rounded-lg dark:text-white hover:bg-white hover:text-black group hover:invert transition-all duration-200">
              <img src={element.image} alt="navicon" className='opacity-55'/>
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