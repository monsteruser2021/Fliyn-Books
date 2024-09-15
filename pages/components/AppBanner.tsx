import React from 'react'
import Image from 'next/image'
import PlayStoreImg from '../assets/Banner/play_store.png'
import AppStoreImg from '../assets/Banner/app_store.png'

const AppBanner = () => {
  return (
    <div
    className="bg-gray-100 dark:bg-stone-950 font-itim text-black dark:text-white py-10 "
    >
        <div className='container'>
            <div
            data-aos='fade-up'
            data-aos-duration='300' 
            className='space-y-6 max-w-xl mx-auto '>
                <h1 className='text-2xl text-center sm:text-4xl '>
                    Read books at your fingertips
                </h1>
                <div className='flex flex-wrap justify-center items-center gap-4 '>
                    <a href="#">
                        <Image
                        src={PlayStoreImg}
                        alt=''
                        className='max-w-[150px] sm:max-w-[120px] md:max-w-[200px] '
                        />
                    </a>
                    <a href="#">
                        <Image
                        src={AppStoreImg}
                        alt=''
                        className='max-w-[150px] sm:max-w-[120px] md:max-w-[200px] '
                        />
                    </a>
                </div>
            </div>
        </div>
    </div>
  )
}

export default AppBanner
