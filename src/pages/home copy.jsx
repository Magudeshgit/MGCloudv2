import {useEffect} from 'react'
import { useAuth } from '../authcontext'
import { useNavigate } from 'react-router-dom'

// Components
import PageNav from '../components/pagenav'
import Qacard from '../components/quickaccesscard'

import fav from '../assets/images/fav.svg'
import lock from '../assets/images/lock.svg'
import folder from '../assets/images/folder.svg'
import trash from '../assets/images/trash.svg'

const Test = () => {
  const {user} = useAuth()
  const navigate = useNavigate()

  return (
    <>
    <PageNav/>
    <section className='p-6 grid grid-cols-6 gap-4 mt-6 font-poppins'>

      <section className='lg:col-span-4 col-span-full bg-white p-6 border border-gray-200 rounded-lg min-w-full'>
        <p className='text-xl font-bold font-poppins'>Quick Access</p>
        {/* Card */}
        <section className='mt-6 flex gap-4'>
          <Qacard img={fav} cardtitle="Favourites" carddescription="All starred files" bg="lightblue" fg="blue" link="/favourites"/>
          <Qacard img={folder} cardtitle="Folders" carddescription="Access you folders" bg="lightpink" fg="pink" link="/folders"/>
          <Qacard img={lock} cardtitle="MGSecure" carddescription="Private file storage" bg="lightyellow" fg="yellow" link="/mgsecure"/>
          <Qacard img={trash} cardtitle="Trash" carddescription="Restore your files" bg="lightgray" fg="gray" link="/trash"/>
        </section>
      </section>

      <section className='lg:col-span-4 col-span-full p-6 border border-gray-200 rounded-lg min-w-full'>
        <p className='font-bold text-xl'>Recent Files</p>

        <div className="overflow-x-auto mt-5">
    <table className="table">
      {/* head */}
      <thead>
        <tr>
          <th>File name</th>
          <th>Sharing</th>
          <th>Date added</th>
          <th>Size</th>
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