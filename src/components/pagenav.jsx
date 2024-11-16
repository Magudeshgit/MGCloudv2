import { Disclosure, DisclosureButton, DisclosurePanel, Menu, MenuButton, MenuItem, MenuItems } from '@headlessui/react'
import { Bars3Icon, BellIcon, XMarkIcon,  Cog6ToothIcon, CogIcon} from '@heroicons/react/24/outline'
import { Link } from 'react-router-dom'
import { useEffect, useState } from 'react'

import logo from  '../assets/images/logo.svg'
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

export default function PageNav(props) {
  const [current_path, setcurrent_path] = useState('')
  const sidebar = document.querySelector('#default-sidebar')
  if (props.sidebaropen)
  {
    sidebar.style.left = 0
  }
  useEffect(()=>{
    setcurrent_path(window.location.pathname)
  })
  return (
  
  <>



</>
  )
}
