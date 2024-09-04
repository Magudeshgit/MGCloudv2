import React from 'react'

import fileactions from '../assets/images/threedots.svg'
import download from '../assets/images/download.svg'
import move from '../assets/images/move.svg'
import copy from '../assets/images/copy.svg'
import trash from '../assets/images/trashred.svg'
import info from '../assets/images/info.svg'
import { Link } from 'react-router-dom'

const Fileactions = () => {

  return (
    <details className="dropdown dropdown-left">
        <summary className="btn p-4 h-0 min-h-0 bg-white border-none shadow-none">
            <img src={fileactions} alt="fileactions" className='w-4'/>
        </summary>
        <ul className="menu dropdown-content bg-base-100 rounded-box z-[1] w-52 p-2 shadow">
            <li>
                <Link>
                    <img src={download} alt="download"  className='opacity-65'/>
                    Download
                </Link>
            </li>

            <li>
                <Link>
                    <img src={info} alt="info"  className='opacity-65'/>
                    Info
                </Link>
            </li>
            <hr/>
            <li>
                <Link className='text-red-500'>
                    <img src={trash} alt="copy"  className='opacity-65'/>
                    Delete
                </Link>
            </li>
        </ul>
    </details>
  )
}

export default Fileactions