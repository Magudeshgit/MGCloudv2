import React, {useState} from 'react'

import T1 from '../components/t1'
import PageNav from '../components/pagenav'
import Loader from '../components/loader'

// Static
import gdrivelogo from '../assets/images/gdrive.png'
import onedrivelogo from '../assets/images/onedrive.svg'
import dropboxlogo from '../assets/images/dropbox.svg'

import { getOauthUrl } from '../mgc_helper'



const Integrations = () => {
  const [loading, setLoading] = useState(false)
  function InitiateOauth() {
        setLoading(true)
        getOauthUrl().then((url)=>{
            setLoading(false)
            window.location.assign(url.authurl)
        })
  }
  return (
    <>
        <T1/>
        <PageNav/>
        <section className='p-6 gap-4 ml-56'>
            <p className='text-2xl font-bold'>Integrations</p>
            <p className='text-sm text-gray-500 font-light'>Integrate your cloud storages and manage them from one place.</p>
            <div className='p-4 rounded-lg border mt-6'>
                <div className='flex justify-between font-poppins items-center border-b pt-2 pb-6'>
                    <div className='flex items-center gap-4'>
                        <img src={gdrivelogo} className='w-14 h-14' />
                        <div className='flex flex-col'>
                            <p className='font-semibold '>Google Drive</p>
                            <p className='text-sm text-gray-500'>Lorem ipsum dolor sit amet consectetur, adipisicing elit.</p>
                        </div>
                    </div>
                    <div>
                        <button className='px-6 py-1 border rounded-md bg-[#F0F0F0] hover:bg-[#e6e6e6] font-medium text-xs transition-all duration-200'
                                onClick={()=>InitiateOauth()}
                        >
                            {loading?<Loader/>:"Integrate"}
                        </button>
                    </div>
                </div>

                <div className='flex justify-between font-poppins items-center border-b py-6'>
                    <div className='flex items-center gap-4'>
                        <img src={onedrivelogo} className='w-14 h-14' />
                        <div className='flex flex-col'>
                            <p className='font-semibold '>Microsoft OneDrive</p>
                            <p className='text-sm text-gray-500'>Lorem ipsum dolor sit amet consectetur, adipisicing elit.</p>
                        </div>
                    </div>
                    <div>
                        <button 
                            className='px-6 py-1 border rounded-md bg-[#F0F0F0] hover:bg-[#e6e6e6] font-medium text-xs transition-all duration-200'
                            onClick={()=>InitiateOauth()}
                        >
                            Integrate
                        </button>
                    </div>
                </div>

                <div className='flex justify-between font-poppins items-center border-b py-6'>
                    <div className='flex items-center gap-4'>
                        <img src={dropboxlogo} className='w-14 h-14' />
                        <div className='flex flex-col'>
                            <p className='font-semibold '>DropBox</p>
                            <p className='text-sm text-gray-500'>Lorem ipsum dolor sit amet consectetur, adipisicing elit.</p>
                        </div>
                    </div>
                    <div>
                        <button className='px-6 py-1 border rounded-md bg-[#F0F0F0] hover:bg-[#e6e6e6] font-medium text-xs transition-all duration-200'>
                            Integrate
                        </button>
                    </div>
                </div>

            </div>
        </section>
    </>
  )
}

export default Integrations

