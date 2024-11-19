import React, { useState } from 'react'

import fileactions from '../assets/images/threedots.svg'
import download from '../assets/images/download.svg'
import move from '../assets/images/move.svg'
import copy from '../assets/images/copy.svg'
import trash from '../assets/images/trashred.svg'
import info from '../assets/images/info.svg'
import { Link } from 'react-router-dom'

import { XMarkIcon, ArrowDownTrayIcon, ArrowsPointingOutIcon, TrashIcon, HeartIcon as SolidHeart} from '@heroicons/react/16/solid'
import { InformationCircleIcon, HeartIcon } from '@heroicons/react/24/outline'


const Previewactions = (props) => {
    const [currstatus, setcurrstatus] = useState(true)
  
    // if (!props.togglestate) return <></>
  return (
    <div className="dropdown dropdown-bottom dropdown-end bg-white md:hidden">
    <div tabIndex={0} role="button" className="btn m-1 neutrabg-strict " onClick={()=>setcurrstatus(!currstatus)}>
        {currstatus?
        <img src={fileactions} alt="" />:
        <button>
        <XMarkIcon className='w-4 h-4'/>
        </button>
        }
    </div>
    
    {!currstatus?
    <ul className="menu dropdown-content bg-base-100 rounded-md z-[50] w-52 p-2 shadow bg-white">
            <li>
                <button onClick={()=>{setcurrstatus(!currstatus);props.favouritecallback();}}>
                    {props.favouritestatus?
                    <>
                    <SolidHeart className='w-4 h-4'/>
                    Favourite
                    </>
                    :
                    <>
                    <HeartIcon className='w-4 h-4'/>
                    Add to Favourite
                    </>
                    }
                </button>
            </li>

            <li>
                <button onClick={()=>{setcurrstatus(!currstatus);props.downloadcallback()}}>
                    <ArrowDownTrayIcon className='w-4 h-4'/>
                    Download
                </button>
            </li>
            <li>
                <button onClick={()=>{setcurrstatus(!currstatus);props.infocallback()}}>
                    <InformationCircleIcon className='w-4 h-4'/>
                    Information
                </button>
            </li>
            <hr/>
            <li>
                <button onClick={()=>props.closurecallback()}>
                    <XMarkIcon className='w-4 h-4'/>
                    Close
                </button>
            </li>
            <li>
                <button className='text-red-500'>
                    <TrashIcon className='w-4 h-4'/>
                    Delete
                </button>
            </li>
        </ul>:<></>
        }
    </div>
  )
}

export default Previewactions