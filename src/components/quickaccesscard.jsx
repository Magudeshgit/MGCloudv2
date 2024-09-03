import React from 'react'
import { Link } from 'react-router-dom'

const Qacard = (props) => {
  return (
    <Link to={props.link}>
    <div className={`${props.bg} flex shadow-sm cursor-pointer rounded-2xl bg-opacity-15 p-4 items-center gap-4`}>
          <div className={`${props.fg} rounded-full p-4`}>
            <img src={props.img} alt="Card Image" />
          </div>
          <div>
            <p className='font-bold text-base'>{props.cardtitle}</p>
            <p className='font-light text-xs opacity-70 font-poppins'>{props.carddescription}</p>
          </div>
    </div>
    </Link>
  )
}

export default Qacard