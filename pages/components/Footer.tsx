import React from 'react'
import { FaFacebook, FaTwitter, FaInstagram } from 'react-icons/fa'

const Footer = () => {
  return (
    <div className='min-h-[100px] md:min-h-[100px] bg-gray-100 dark:bg-stone-950 text-black dark:text-gray-200 font-itim '>
      <div className='flex justify-between items-center mx-auto px-[1rem] md:px-[4rem] pt-[1rem] md:pt-[2rem] pb-[2rem] '>
        <div className='flex items-center '>
            <a href="#"
            className='font-nerko text-2xl sm:text-3xl '
            >
                Flyin&apos; Books
            </a>
        </div>
        <div className='text-2xl gap-[1rem] flex items-end '>
          <FaFacebook/>
          <FaTwitter/>
          <FaInstagram/>
        </div>
      </div>
      <div className='text-center pb-[1rem] '>
        <p>Flyin&apos; Books All Rights reserved.</p>
      </div>
    </div>
  )
}

export default Footer
