import React from 'react'

import fileactions from '../assets/images/threedots.svg'
import fileico from '../assets/images/fileico.svg'
import date from '../assets/images/date.svg'
import cloud from '../assets/images/cloud.svg'

import { Link } from 'react-router-dom'

import { AdjustmentsHorizontalIcon, ArrowsUpDownIcon } from '@heroicons/react/24/outline'
const Sortoptions = (props) => {

  
    // if (!props.togglestate) return <></>
  return (
    <div className="dropdown dropdown-bottom dropdown-end bg-transparent">
    <div tabIndex={0} role="button" className="btn m-1 neutrabg-strict bg-red">
        <AdjustmentsHorizontalIcon className='w-4 h-4'/>
    </div>
    <ul className="menu dropdown-content bg-base-100 rounded-box z-[50] w-48 p-1 shadow">
            <div className='flex gap-2 ml-4 mt-4 mb-4'>
              <ArrowsUpDownIcon className='w-4 h-4'/>
              <p>Sort by</p>
            </div>
            <hr/>
            <li className='flex justify-center mt-3'>
              <div>
                    <img src={fileico} alt="download"  className='opacity-65'/>
                    <p className='font-normal'>File name</p>
              </div>
            </li>

            <li className='flex'>
            <div>
                    <img src={date} alt="download"  className='opacity-65'/>
                    <p className='font-normal'>Date added</p>
              </div>
            </li>
            <hr/>
            <li className='flex'>
            <div>
                    <img src={cloud} alt="download"  className='opacity-65'/>
                    <p className='font-normal'>File size</p>
              </div>
            </li>
        </ul>
    </div>
  )
}

export default Sortoptions