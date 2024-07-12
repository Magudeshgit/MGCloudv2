import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <nav className='flex items-center justify-between'>
    <div className="logo">
        <p className="text-xl font-sfprodisplay font-semibold">MGCloud</p>
    </div>

    <div className='lg:flex gap-6 text-center hidden'>
      <Link to="/signup"><p className='text-[14px] text-slate-500'>Overview</p> </Link>
      <Link to="/signup"><p className='text-[14px] text-slate-500'>Blog</p></Link>
      <Link to="/signup"><p className='text-[14px] text-slate-500'>Support</p></Link>
    </div>

    <div className="flex gap-2">
        <Link to="/signup"><button className="px-6 py-1 border-[1.5px] border-solid border-[#D9D9D9] rounded-3xl hover:bg-black hover:text-white text-slate-600 transition-colors"><p className='text-xs'>Signup</p></button></Link>
        <Link to="/signin"><button className="px-6 py-1 border-[1.5px] border-solid border-[#D9D9D9] rounded-3xl hover:bg-black hover:text-white text-slate-600 transition-colors"><p className='text-xs'>Signin</p></button></Link>
    </div>
    </nav>
  )
}

export default Navbar