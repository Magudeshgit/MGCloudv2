import React, { useEffect, useState } from 'react'
import status from '../assets/images/status.svg'
import { Dialog, DialogBackdrop, DialogPanel, DialogTitle, TransitionChild } from '@headlessui/react'
import { XMarkIcon } from '@heroicons/react/24/outline'

import FileUploading from './fileuploading'

const UploadNotification = (props) => {
    function closureHandler()
    {
      let intermediatary = props.show
      intermediatary = JSON.parse(JSON.stringify(intermediatary))

      intermediatary.show = false
      props.setshow(intermediatary)
    }
  return (
<>
{/* <div id="toast-undo" class="flex items-center w-full max-w-xs p-4 text-gray-500 bg-white rounded-lg shadow-md dark:text-gray-400 dark:bg-gray-800 absolute bottom-6 right-6" role="alert">
    <div class="text-xs font-medium font-poppins">
       {`${props.filecount} ${(props.file>1)?'Files':'File'} Uploading`}
    </div>
    <div class="flex items-center ms-auto space-x-2 rtl:space-x-reverse">
        <button class="text-sm font-medium text-blue-600 p-1.5 hover:bg-blue-100 rounded-lg dark:text-blue-500 dark:hover:bg-gray-700" onClick={()=>setOpen(true)}>View</button>
        <button type="button" class="ms-auto -mx-1.5 -my-1.5 bg-white text-gray-400 hover:text-gray-900 rounded-lg focus:ring-2 focus:ring-gray-300 p-1.5 hover:bg-gray-100 inline-flex items-center justify-center h-8 w-8 dark:text-gray-500 dark:hover:text-white dark:bg-gray-800 dark:hover:bg-gray-700" data-dismiss-target="#toast-undo" aria-label="Close" onClick={()=>setstatus(false)}>
          <span class="sr-only">Close</span>
          <svg class="w-3 h-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 14">
              <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"/>
          </svg>
        </button>
    </div>
</div> */}

<Dialog open={props.show} onClose={props.setshow} className="relative z-30">
      <DialogBackdrop
        transition
        className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity duration-500 ease-in-out data-[closed]:opacity-0"
      />

      <div className="fixed inset-0 overflow-hidden">
        <div className="absolute inset-0 overflow-hidden">
          <div className="pointer-events-none fixed inset-y-0 right-0 flex max-w-full pl-10">
            <DialogPanel
              transition
              className="pointer-events-auto relative w-screen max-w-md transform transition duration-500 ease-in-out data-[closed]:translate-x-full sm:duration-700"
            >
              <TransitionChild>
                <div className="absolute left-0 top-0 -ml-8 flex pr-2 pt-4 duration-500 ease-in-out data-[closed]:opacity-0 sm:-ml-10 sm:pr-4">
                  <button
                    type="button"
                    onClick={() => closureHandler()}
                    className="relative rounded-md text-gray-300 hover:text-white focus:outline-none focus:ring-2 focus:ring-white"
                  >
                    <span className="absolute -inset-2.5" />
                    <span className="sr-only">Close panel</span>
                    <XMarkIcon aria-hidden="true" className="h-6 w-6" />
                  </button>
                </div>
              </TransitionChild>
              <div className="flex h-full flex-col overflow-y-scroll bg-white py-6 shadow-xl">
                <div className="px-4 sm:px-6">
                  <DialogTitle className="text-base font-semibold leading-6 text-gray-900 items-center flex gap-1">
                  <img src={status} className='opacity-65 max-w-5'/>
                    Status bar
                  </DialogTitle>
                </div>

                <div className="relative mt-6 flex flex-col px-4 sm:px-6 gap-4">
                  {props.drawerdata.map(file=><FileUploading filename={file.filename} filesize={file.filesize} loaded={file.loaded} fileprogress={file.fileprogress} abortcontrol={file.abortcontrol}/>)}
                </div>
              </div>
            </DialogPanel>
          </div>
        </div>
      </div>
    </Dialog>

</>
  )
}

export default UploadNotification