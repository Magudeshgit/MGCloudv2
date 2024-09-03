import {useEffect} from 'react'
import { useAuth } from '../authcontext'
import { Link, useNavigate } from 'react-router-dom'

import { Button } from '@headlessui/react'
// Components
import PageNav from '../components/pagenav'
import Qacard from '../components/quickaccesscard'
import Sorting from '../components/sorting'
import Sortoptions from '../components/sortoptions'

import { ArrowRightIcon } from '@heroicons/react/24/outline'

import fav from '../assets/images/fav.svg'
import lock from '../assets/images/lock.svg'
import folder from '../assets/images/folder.svg'
import trash from '../assets/images/trash.svg'

import fileico from '../assets/images/fileico.svg'
import sharing from '../assets/images/share.svg'
import date from '../assets/images/date.svg'
import mgsecure from '../assets/images/mgsecure.svg'
import actions from '../assets/images/actions.svg'
import fileactions from '../assets/images/threedots.svg'
import cloud from '../assets/images/cloud.svg'

const Test = () => {
  const {user} = useAuth()
  const navigate = useNavigate()
  console.log(import.meta.env.VITE_CLOUD_API_ENDPOINT)
  return (
    <>
    {!user.isAuthenticated?navigate('/home'):console.log()}
    <PageNav/>
    <section className='p-6 grid grid-cols-6 gap-4 mt-6 font-poppins'>

      <section className='lg:col-span-4 col-span-full p-6 border border-gray-200 rounded-lg min-w-full'>
        <div className='flex justify-between items-center'>
        <p className='font-bold text-2xl'>Recent Files</p>
        <div className='flex gap-4'>
          {/* <Sorting/>
          <Sortoptions/> */}
          <Link to="/files">
            <Button to className='p-2 flex items-center gap-2 bg-gray-100 rounded-md'>
              <p className='text-xs font-poppins font-medium'>All Files</p>
              <ArrowRightIcon className='w-4 h-4'/>
            </Button>
          </Link>
        </div>
        </div>
        <div className="overflow-x-auto mt-5">
    <table className="table">
      {/* head */}
      <thead>
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
      <tbody>
        {/* row 1 */}
        <tr>
          <td>Cy Ganderton</td>
          <td>Quality Control Specialist</td>
          <td>Blue</td>
        </tr>
        {/* row 2 */}
        <tr>
          <td>Hart Hagerty</td>
          <td>Desktop Support Technician</td>
          <td>Purple</td>
        </tr>
        {/* row 3 */}
        <tr>
          <td>Brice Swyre</td>
          <td>Tax Accountant</td>
          <td>Red</td>
        </tr>
      </tbody>
    </table>
  </div>
      </section>

      {/* Statistics */}

      <section className='lg:col-start-5 col-span-full lg:row-start-1 lg:row-span-2 lg:col-span-2 p-6 border border-gray-200 rounded-lg min-w-full'>
        <p className='font-bold text-xl'>Usage</p>
        <div className='flex flex-col mt-6'>
          <div>
            <p className='font-semibold opacity-80 text-sm'>Photos</p>
            <progress className="progress progress-primary w-full" value={0} max="100"></progress>
          </div>

          <div>
            <p className='font-semibold opacity-80 text-sm'>Videos</p>
            <progress className="progress progress-secondary w-full" value={0} max="100"></progress>
          </div>

          <div>
            <p className='font-semibold opacity-80 text-sm'>Documents</p>
            <progress className="progress progress-accent w-full" value={0} max="100"></progress>
          </div>

          <div>
            <p className='font-semibold opacity-80 text-sm'>Other</p>
            <progress className="progress progress-info w-full" value={0} max="100"></progress>
          </div>
        </div>
      </section>

    </section>
    </>
  )
}   

export default Test