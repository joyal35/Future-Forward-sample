import React, { useState } from 'react'
import down_img from '../../src/assets/Reimagined_Jump_to_Arrow.svg.svg'


function Home  () {

  const [visible, setVisible] = useState(true)
 
  const toggleVisible = () => {
      const scrolled = document.documentElement.scrollTop;
      if (scrolled > 0) {
          setVisible(false)
      }
      else if (scrolled <= 0) {
          setVisible(true)
      }
  };

  const scrollToBottom = () => {
      window.scrollTo({
          top: document.documentElement.scrollHeight,
          behavior: 'smooth'
      });
  };

  window.addEventListener('scroll', toggleVisible);
    return (
    <div>
        <div className='bg-hero h-[40rem] sm:bg-no-repeat bg-cover'>
            <h1 className='text-white text-5xl pt-60 pl-3 sm:pl-28 playfair-display'>Want to study abroad? You are <br /> at the right place!</h1>
            <button className='bg-red-700 text-white h-14 w-44 mt-9 rounded-3xl ml-3 sm:ml-32'>Get Started</button>
            <div className='bg-sky-950 bg-opacity-40 w-[58rem] h-[8rem] rounded-sm ml-[50rem] mt-16 hidden sm:block'>
                <h1 className='text-white text-3xl pt-2 pl-3 merriweather-regular'>How do I...</h1>
                <div className='flex flex-row gap-10 pt-3 pl-14'>
                <p className='text-white h-14 pl-3 pt-3 border-l-4 border-cyan-500 text-sm'>Get or renew a passport</p>
                <p className='text-white  pl-3 pt-4 border-l-4 border-cyan-500 text-sm'>Find unclaimed money from <br /> the government</p>
                <p className='text-white  pl-3 pt-4 border-l-4 border-cyan-500 text-sm'>Locate affordable rental <br /> housing</p>
                <p className='text-white  pl-3 pt-4 border-l-4 border-cyan-500 text-sm'>Get government benefits and <br /> financial assistance</p>
                </div>
            </div>
        </div>
        <div className='bg-sky-950 h-28'>
            <h1 className='text-white text-center pt-6 '>Jump to all topics and services</h1>
            <img onClick={scrollToBottom} className='flex items-center justify-center mx-auto cursor-pointer' src={down_img} alt="" />
        </div>
    </div>
  )
}

export default Home