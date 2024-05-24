import React from 'react'
import Navbar from '../components/nav'
import arrow from '../assets/images/arrow.svg'
import pcview from '../assets/images/pcview.svg'

const Home = () => {
  return (
    <section className="p-6">
       <Navbar/>
       <main className="w-full flex flex-col items-center justify-center mt-12">
            <div>
                <p className="text-5xl font-bold text-center">Unleash the idea of security on a different Perception.</p>
                <p className="text-center text-slate-500 mt-4">The sneaky little place to hide your clingy little photos, <br/>Don’t worry we’ve got you covered</p>
            </div>
            <div className="flex mt-4">
                <button className=" flex gap-2 text-[20px] items-center py-2 px-16 bg-[#414141] hover:bg-black transition-colors rounded-md text-white">
                    Signup
                    <img src={arrow}/>
                </button>
            </div>
            <div className="mt-12">
                <img src={pcview} alt="" />
            </div>
       </main>
    </section>
  )
}

export default Home