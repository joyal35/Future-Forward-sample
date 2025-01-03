import React from 'react'
import logo from '../../src/assets/Group 5080.svg'
import map_icon from '../../src/assets/Frame.svg'
import right_img from "../../src/assets/Vector.png";
import social_icon from "../../src/assets/icons.svg";


function Footer()   {
  return (
    <div>
    <div className='flex flex-row justify-between mt-28 md:mx-96'>
      <div className='flex flex-col sm:flex-row sm:gap-20  ml-10'>
        <ul className='flex flex-col gap-3 underline'>
            <li>Home</li>
            <li>US citizen service</li>
            <li>Our relationship</li>
            <li>Education & Culture</li>
            <li>Embassy & Counsulates</li>
            <li>News & Events</li>
        </ul>
        <ul className='flex flex-col gap-3 underline'>
            <li>Contact us</li>
            <li>About us</li>
        </ul>
      </div>
      <div>
        <img className='w-40 ml-5 sm:w-60' src={logo} alt="" />
        <div className='flex gap-5 mt-8'>
            <img src={map_icon} alt="" />
            <p>8425 Pulsar Pl, Suite 280 <br /> Columbus, OH 43240</p>
        </div>
        <div className='flex gap-2 mt-40'>
            <img className='size-8 mt-2' src={right_img} alt="" />
            <div>
        <p className="text-sky-950 text-sm sm:text-base">
              Have Any Questions?
            </p>
            <p className="text-sky-950 text-sm font-medium sm:text-base">1800-987-6543</p>
            </div>
        </div>
      </div>
    </div>
    <div className="flex mt-6">
        <div className="border-2 border-blue-950 w-[30%]"></div>
        <div className="border-2 border-rose-700 w-[70%] "></div>
      </div>
      <div className='flex justify-between sm:mx-96 mt-8 h-14'>
        <p className='text-xs'>© 2024 futureforwordedu. All rights reserved.</p>
        <img className='h-4 sm:h-8' src={social_icon} alt="" />
      </div>
    </div>
  )
}


export default Footer