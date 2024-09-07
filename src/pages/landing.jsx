import React from 'react'
import Navbar from '../components/nav'
import arrow from '../assets/images/arrow.svg'
import pcview from '../assets/images/pcview.svg'
import caret from '../assets/images/caret.svg'
import { Link } from 'react-router-dom'

// Animation Dependencies
import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

const Home = () => {
  gsap.registerPlugin(ScrollTrigger)
  useGSAP(()=>{
    gsap.fromTo('.text1',
      {
        opacity: 0,
        y: 20
      },
      {
        opacity: 1,
        y: 0,
        delay: .2,
        duration: 1,
        scrollTrigger: 
        {
          trigger: '.textwrap'
        }
      }
    )
    gsap.fromTo('.text2',
      {
        opacity: 0,
      },
      {
        opacity: 1,
        duration: 1,
        delay: .2
      }
    )
    gsap.from('.button',
      {
        // width: '10%',
        // // height: '10%',
        // padding: 0,
        opacity: 0,
        delay: .2,
      }
    )
    gsap.to('.mimg',
      {
        scrollTrigger:
        {
          trigger: '.imgwrap',
          start: 'top center',
          scrub: 1,
          duration: 4,
          ease: 'power1.inOut' 
        },
        scale: 1.1,
      }
    ) 
    gsap.from('.featcard',
      {
        opacity: 0,
        stagger: .5,
        duration: 1,
        ease:  'power1.in',
        scrollTrigger: 
        {
          trigger: '.featsec',
          start: 'top center',
        }
      }
    )
    gsap.from('.sbmg',
      {
        y: 150,
        duration: 1.2,
        ease: 'power1.inout',
        scrollTrigger: 
        {
          trigger: '.sbmgsec',
          start: 'bottom bottom'
        }

      }
    )
    gsap.from('.sbmgtxt',
      {
        opacity: 0,
        delay: .25,
        duration: 4,
        scrollTrigger: 
        {
          trigger: '.sbmgsec',
          start: 'bottom bottom'
        }
      }
    )

    gsap.from('.bars',
      {
        // scale: 1.2,
        opacity: 0,
        duration: 1,
        ease: 'power3.in'
      }
    )
  })  

  return (
    <section className="relative max-w-[1440px] overflow-hidden ml-auto mr-auto">
      <section className="px-6 pt-6  max-w-full overflow-hidden relative">
       <Navbar/>
       <main className="w-full min-h-[100%] flex flex-col items-center justify-center mt-12">
            <div className='max-w-[80%] textwrap'>
                <p className="lg:text-6xl text-4xl font-bold text-center text1">Unleash the idea of security on a different Perception.</p>
                <p className="text-center text-slate-500 mt-4 text2">The sneaky little place to hide your clingy little photos, <br/>Don’t worry we’ve got you covered</p>
            </div>
            <div className="flex mt-4">
              <Link to="/signup">
                <button className="button flex gap-2 text-[15px] lg:text-[18px] items-center py-2 px-4 md:py-2 md:px-16 bg-[#282828] hover:bg-black transition-colors rounded-full text-white overflow-hidden">
                    <p className='btntext'>Create an account</p>
                    <img src={arrow}/>
                </button>
              </Link>
            </div>
            <div className="mt-12 imgwrap">
                <img src={pcview} alt="" className='mimg' />
            </div>
            <div className='w-[500px] h-[100%] rotate-[-35deg] bg-[#e5e5fd]  absolute top-[-220px] right-[-300px] -z-10 bars'></div>
            <div className='w-[500px] h-[100%] rotate-[35deg] bg-[#fdf9e5]  absolute top-[-220px] left-[-300px] -z-10 bars'></div>
       </main>
       </section>
       {/* Features Section */}
       <section className="px-6 min-w-full flex flex-col items-center justify-start mt-12">
          <div className="flex gap-12 flex-col justify-evenly items-center min-h-[100vh]">
            <div className='featsec flex gap-12 flex-col justify-center items-center'>
            <div className="featcard flex flex-col justify-center items-center lg:max-w-[50%] max-w-[90%]">
                <p className='text-3xl font-semibold text-center'>Redefining Security, with MGCloud</p>
                <p className='mt-2 font-lg text-slate-600 text-center'>Data is filtered through layers of robust encryption and stored in a remote object store data is filtered through stacks of robust encryption and stored in a remote object store ata is filtered through stacks of robust encryption and stored in a remote object store.</p>
            </div>

            <div className="featcard flex flex-col justify-center items-center lg:max-w-[50%] max-w-[90%]">
                <p className='text-3xl font-semibold text-center'>Store Memories, not data</p>
                <p className='mt-2 font-lg text-slate-600 text-center'>MGCloud is a personal space to store your data, a place that stands out from the other which offers maximum data security avialble today, and constantly upgraded its security infrastructure in order to provider maximum security</p>
            </div>

            <div className="featcard flex flex-col justify-center items-center lg:max-w-[50%] max-w-[90%]">
                <p className='text-3xl font-semibold text-center'>Pay as you go</p>
                <p className='mt-2 font-lg text-slate-600 text-center'>Use as much storage as you need, and pay only when you exceed our set limits Pay as much storage as you need, and pay only when you exceed our set limits Pay as much storage as you need, and pay only when you exceed our set limits </p>
            </div>
            </div>
            <div className='min-w-full sbmgsec min-h-[50vh] flex justify-between lg:gap-6 items-center mt-6 flex-wrap'>
              <div className='lg:max-w-[50%] min-w-full relative overflow-hidden'>
                <p className='text-2xl font-semibold sbmgtxt text-slate-700'>MGCloud</p>
                <p className='lg:text-7xl text-5xl font-bold sbmg'>Security <br/>Redefined.</p>
              </div>
              <div className='lg:max-w-[50%] w-full'>
                <p className='mt-2 text-lg text-slate-600 sbmgtxt'>We take strict security measures against data privacy of our customer, all your data is tightly encrypted with state-of-the-art cryptographic definitions to safely and securely handle your data, We strictly stand against data piracy and we do our best to keep our systems ransom free forever.</p>
                <Link to="/" className='flex items-end'>
                  <p className='mt-2 text-lg font-bold hover:underline text-black'>Learn more about what we do different</p>
                  <img src={caret} alt="" />
                </Link>
              </div>
            </div>
          </div>
       </section>
       {/* Pricing Section */}
       {/* <section className="px-4 pt-4 min-w-full min-h-[100vh] flex flex-col items-center justify-start">
         <p className='text-center text-5xl font-bold'>Plans & Pricing</p>
         <div className="w-[400px] h-[400px] p-8 border border-[#e5e5e5] rounded-3xl mt-6">
          <div>
          <p className='text-3xl font-semibold'>Service Plan</p>
          <p className='text-sm text-slate-500 text-left leading-tight font-normal'>A temporary trial plan currently in place to introduce users to MGCloud and its benefits</p>
          </div>
          <div className='mt-4'>
            <p className='text-xl font-semibold'>No Cost</p>
            <p className='text-md mt-1 text-slate-500 text-left leading-tight font-normal'>Explore MGCloud’s features as you wish for as long as you can. Now you can use MGCloud free-of-cost at its maximum and you can always upgrade to a plan when you feel like</p>
          </div>
          <div className='mt-4'>
          <p className='text-xl font-semibold'>Highlights</p>
          <ul className='list-disc pl-4'>
            <li className='text-base text-slate-600 mt-[5px]'>Unlimited file uploads</li>
            <li className='text-base text-slate-600 mt-[5px]'>Unlimited file storage</li>
            <li className='text-base text-slate-600 mt-[5px]'>MGRealm Support</li>
            <li className='text-base text-slate-600 mt-[5px]'>State of the art security features</li>
            <li className='text-base text-slate-600 mt-[5px]'>New Gen File Sharing Capabilities</li>
            <li className='text-base text-slate-600 mt-[5px]'>Organize and secure your file conveniently. </li>
          </ul>
          </div>
          <div className="cta">
            <Link to="/signup">
                  <button className="text-center flex text-base w-[100%] mt-4 justify-center items-center py-2 bg-[#414141] hover:bg-black transition-colors rounded-md text-white">
                    Create an account
                  </button> 
            </Link>
          </div>
         </div>
       </section> */}
       {/* Footer */}
       <section className='relative min-w-full gap-2 min-h-[50vh] bg-[#F8F8F8] px-6 py-6 pb-14 flex justify-between flex-wrap mt-12 lg:mt-0'>
        <div className="flex flex-col md:max-w-[50%]">
        <div>
        <p className='text-2xl font-semibold'>MGCloud</p>
        <p className='text-lg text-slate-600'>A simple and reliable cloud storage solution</p>
        </div>
        <div className='mt-6'>
          <p className='text-2xl font-bold'>We would like to hear from you</p>
          <p className='text-xl font-semibold'>Connect with us</p>
          <form action="#" className='flex flex-col gap-4 mt-4'>
            <input type="text" className='border-b-[1px] bg-transparent border-black' placeholder='Email'/>
            <input type="text" className='border-b-[1px] bg-transparent border-black' placeholder='Share your thoughts'/>
          </form>
        </div>
        </div>
        <div className='flex flex-col md:max-w-[50%] mt-12 lg:mt-0 lg:text-right'>
          <div>
          <p className='font-bold text-xl'>Magudesh K</p>
          <p className='text-lg text-slate-600'>This product is developed and maintained by</p>
          </div>
          <div className='mt-4'>
            <p className='font-semibold text-slate-600 text-xl'>Socials</p>
            <p className='text-slate-600'>LinkedIn</p>
            <p className='text-slate-600'>Instagram</p>
            <p className='text-slate-600'>X</p>

          </div>
        </div>
        <div className="legal flex w-[90%] justify-between absolute bottom-2">
          <div className='text-sm font-normal text-slate-600'>© 2024 Copyrights, All rights reserved</div>
          <div className='flex gap-4 text-sm font-normal text-slate-600'>
            <a href="#">Privacy Policy</a>
            <a href="#">Terms & Conditions</a>
            <a href="#">Support</a>
          </div>
        </div>
       </section>
    </section>
  )
}

export default Home