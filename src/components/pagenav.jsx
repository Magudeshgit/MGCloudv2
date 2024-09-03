import { Disclosure, DisclosureButton, DisclosurePanel, Menu, MenuButton, MenuItem, MenuItems } from '@headlessui/react'
import { Bars3Icon, BellIcon, XMarkIcon,  Cog6ToothIcon, CogIcon} from '@heroicons/react/24/outline'
import { Link } from 'react-router-dom'
import { useEffect, useState } from 'react'

import logo from  '../assets/images/logo.svg'

const navigation = [
  { name: 'All Files', href: '/files'},
  { name: 'Folders', href: '/folders'},
  { name: 'Favourites', href: '/favourites'},
  { name: 'MGSecure', href: '/mgsecure'},
  { name: 'Trash', href: '/trash'},
]

function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

export default function PageNav() {
  const [current_path, setcurrent_path] = useState('')
  useEffect(()=>{
    setcurrent_path(window.location.pathname)
  })
  return (
    <Disclosure as="nav" className="bg-white font-poppins">
      <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8 shadow-md">
        <div className="relative flex h-16 items-center justify-between">
          <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
            {/* Mobile menu button*/}
            <DisclosureButton className="group relative inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-100 hover:text-black focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white">
              <span className="absolute -inset-0.5" />
              <span className="sr-only">Open main menu</span>
              <Bars3Icon aria-hidden="true" className="block h-6 w-6 group-data-[open]:hidden" />
              <XMarkIcon aria-hidden="true" className="hidden h-6 w-6 group-data-[open]:block" />
            </DisclosureButton>
          </div>
          <div className="flex flex-1 items-center justify-center sm:items-stretch sm:justify-start">
            <Link to="/home">
              <div className="flex flex-shrink-0 items-center">
                {/* <p className='font-bold font-poppins text-xl'>MGCloud</p> */}
                <img src={logo} alt="logo" />
              </div>
            </Link>
            <div className="hidden sm:ml-16 sm:block">
              <div className="flex space-x-4">
                {navigation.map((item) => (
                  <Link
                    key={item.name}
                    to={item.href}
                    aria-current={item.current ? 'page' : undefined}
                    className={classNames(
                      (current_path === item.href) ? 'bg-gray-100 text-black' : 'text-gray-600 hover:bg-gray-100 hover:text-black',
                      'rounded-md px-3 py-2 text-sm font-medium',
                    )}
                  >
                    {item.name}
                  </Link>
                ))}
              </div>
            </div>
          </div>
          <div className="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">


            {/* Profile dropdown */}
            <Menu as="div" className="relative ml-4 outline-none">
              <div>
                <MenuButton className="outline-none relative flex p-1 rounded-full bg-gray-100 text-gray-400 hover:text-gray-700  text-sm focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800">
                  <CogIcon className='h-6 w-6 outline-none' aria-hidden="true"/>
                </MenuButton>
              </div>
              <MenuItems
                transition
                className="absolute right-0 z-10 mt-2 w-48 origin-top-right rounded-md bg-white py-1 shadow-lg ring-1 ring-black ring-opacity-5 transition focus:outline-none data-[closed]:scale-95 data-[closed]:transform data-[closed]:opacity-0 data-[enter]:duration-100 data-[leave]:duration-75 data-[enter]:ease-out data-[leave]:ease-in"
              >
                <MenuItem>
                  <a href="#" className="block px-4 py-2 text-sm text-gray-700 data-[focus]:bg-gray-100">
                    Your Profile
                  </a>
                </MenuItem>
                <MenuItem>
                  <a href="#" className="block px-4 py-2 text-sm text-gray-700 data-[focus]:bg-gray-100">
                    Settings
                  </a>
                </MenuItem>
                <MenuItem>
                  <a href="#" className="block px-4 py-2 text-sm text-gray-700 data-[focus]:bg-gray-100">
                    Sign out
                  </a>
                </MenuItem>
              </MenuItems>
            </Menu>
          </div>
        </div>
      </div>

      <DisclosurePanel className="sm:hidden">
        <div className="space-y-1 px-2 pb-3 pt-2">
          {navigation.map((item) => (
            <Link
              key={item.name}
              as="a"
              to={item.href}
              className={classNames(
                (current_path === item.href) ? 'bg-gray-100 text-black' : 'text-gray-800 hover:bg-gray-100 hover:text-black',
                'block rounded-md px-3 py-2 text-base font-medium',
              )}
            >
              {item.name}
            </Link>
          ))}
        </div>
      </DisclosurePanel>
    </Disclosure>
  )
}
