import React from 'react'

import fileactions from '../assets/images/threedots.svg'
import download from '../assets/images/download.svg'
import move from '../assets/images/move.svg'
import copy from '../assets/images/copy.svg'
import trash from '../assets/images/trashred.svg'
import info from '../assets/images/info.svg'
import { Link } from 'react-router-dom'

import { XMarkIcon, ArrowDownTrayIcon, ArrowsPointingOutIcon, TrashIcon} from '@heroicons/react/16/solid'
import { InformationCircleIcon, HeartIcon } from '@heroicons/react/24/outline'

const Fileactions = (props) => {

  
    // if (!props.togglestate) return <></>
  return (
    <div className="dropdown dropdown-bottom dropdown-end bg-white">
    <div tabIndex={0} role="button" className="btn m-1 neutrabg-strict">
        <img src={fileactions} alt="" />
    </div>
    <ul className="menu dropdown-content bg-base-100 rounded-md z-[50] w-52 p-2 shadow">
            <li>
                <button>
                    <HeartIcon className='w-4 h-4'/>
                    Add to Favourite
                </button>
            </li>

            <li>
                <Link>
                    <ArrowDownTrayIcon className='w-4 h-4'/>
                    Download
                </Link>
            </li>
            <li>
                <Link>
                    <InformationCircleIcon className='w-4 h-4'/>
                    Information
                </Link>
            </li>
            <hr/>
            <li>
                <Link className='text-red-500'>
                    <TrashIcon className='w-4 h-4'/>
                    Delete
                </Link>
            </li>
        </ul>
    </div>
  )
}

export default Fileactions