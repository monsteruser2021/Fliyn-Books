import React from 'react'
import Image from 'next/image'
import lib from '../assets/Banner/library.png'
import { FaRegStar } from 'react-icons/fa6';
import { MdDeliveryDining, MdLocalOffer, MdOutlinePayment } from 'react-icons/md';


const Store = () => {
  return (
      <div className='min-h-[550px] bg-gray-100 dark:bg-stone-950 text-black dark:text-gray-200 font-itim '>
        <div className='min-h-[550px] flex justify-center items-center backdrop-blur-xl py-12 sm:py-0'>
          <div data-aos="slide-up" className='container'>
            <div className='grid grid-cols-1 sm:grid-cols-2 gap-6 items-center'>
              {/*Image section*/}
              <div className=''>
                <Image
                src={lib}
                alt=''
                className='max-w-[400px] h-[350px] w-auto mx-auto shadow-black dark:shadow-white shadow-xl shadow-offset-x-[10rem] object-cover rounded-2xl'
                />
              </div>
              {/*Text*/}
              <div className='flex flex-col justify-center gap-6 sm:pt-0 mx-[1rem] '>
                <h1 className='text-3xl sm:text-4xl'>
                  Library at your fingertips
                </h1>
                <p className='text-sm tracking-wide leading-5 '>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni voluptas architecto porro earum doloribus aperiam minus cum rem eaque possimus?
                  <br/>
                </p>
                <div className='grid grid-cols-2 gap-4'>
                  <div className='flex items-center gap-4 '>
                    <FaRegStar className="text-4xl h-12 w-12 shadow-sm p-4 rounded-full dark:text-black bg-violet-100 dark:bg-violet-400"/>
                    <p>
                      Quality Books
                    </p>
                  </div>
                  <div className="flex items-center gap-4">
                    <MdDeliveryDining className="text-4xl h-12 w-12 shadow-sm p-4 rounded-full dark:text-black bg-orange-100 dark:bg-orange-400" />
                    <p>Fast Delivery</p>
                  </div>
                  <div className="flex items-center gap-4">
                    <MdOutlinePayment className="text-4xl h-12 w-12 shadow-sm p-4 rounded-full dark:text-black bg-green-100 dark:bg-green-400" />
                    <p>Easy Payment method</p>
                  </div>
                  <div className="flex items-center gap-4">
                    <MdLocalOffer className="text-4xl h-12 w-12 shadow-sm p-4 rounded-full dark:text-black bg-yellow-100 dark:bg-yellow-400" />
                    <p>Get Offers on Books</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
  )
}

export default Store