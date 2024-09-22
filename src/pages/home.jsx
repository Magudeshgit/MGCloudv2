import {useEffect} from 'react'
import { useAuth } from '../authcontext'
import { Link, useNavigate } from 'react-router-dom'

import { Button } from '@headlessui/react'
// Components
import PageNav from '../components/pagenav'
import Qacard from '../components/quickaccesscard'
import Sorting from '../components/sorting'
import Sortoptions from '../components/sortoptions'
import Loader from '../components/loader'
import Fileactions from '../components/fileactions'
import Uploadbtn from '../components/uploadbtn'

import { ArrowRightIcon } from '@heroicons/react/24/outline'
import shared from '../assets/images/shared.svg'
import fileactions from '../assets/images/threedots.svg'

import ppt from '../assets/images/ppt.svg'
import T1 from '../components/t1'
import add from '../assets/images/add.svg'

const Test = () => {
  const {user, loading} = useAuth()
  console.log(loading, user)
  // if (loading) return <Loader/>
  return (
    <>
    <T1/>
    <PageNav/>
    <section className='p-6 gap-4 ml-56'>
      <section className='p-6 border border-gray-200 rounded-lg min-w-full'>
        <div className='flex justify-between items-center'>
        <p className='font-bold text-2xl'>Recent Files</p>
        </div>
        <div className="mt-5 flex flex-col gap-2">
              <div className='bg-[#fff] shadow rounded-md border w-full p-6 flex justify-between items-center'>
                <div className='flex items-center gap-2'>
                  <img src={ppt} className='opacity-65 w-12 h-12'/>
                  <div className='flex flex-col'>
                    <p className='text-base font-bold'>Presentation.pptx</p>
                    <p className='text-xs text-gray-500'>19, Sept, 2024</p>
                    <div className='flex gap-1 items-center mt-1'>
                      <img src={shared} alt="" className='w-4 h-4 opacity-65'/>
                      <p className='text-xs text-gray-500'>Shared</p>
                    </div>
                  </div>
                </div>
                <div>
                  <Fileactions/>
                </div>
              </div>

              <div className='bg-[#fff] shadow rounded-md border w-full p-6 flex justify-between items-center'>
                <div className='flex items-center gap-2'>
                  <img src={ppt} className='opacity-65 w-12 h-12'/>
                  <div className='flex flex-col'>
                    <p className='text-base font-bold'>Presentation.pptx</p>
                    <p className='text-xs text-gray-500'>19, Sept, 2024</p>
                    <div className='flex gap-1 items-center mt-1'>
                      <img src={shared} alt="" className='w-4 h-4 opacity-65'/>
                      <p className='text-xs text-gray-500'>Shared</p>
                    </div>
                  </div>
                </div>
                <div>
                  <Fileactions/>
                </div>
              </div>
        </div>
      </section>

      {/* <section className='lg:col-start-5 col-span-full lg:row-start-1 lg:row-span-2 lg:col-span-2 p-6 border border-gray-200 rounded-lg min-w-full'>
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
      </section> */}

    </section>
    </>
  )
}   

export default Test