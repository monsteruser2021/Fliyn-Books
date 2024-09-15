import React from 'react'
import book1 from '../assets/Best/book1.png'
import Image from 'next/image'

const ImageList = [
    {
        id: 1,
        img: book1,
        title: "Lorem, ipsum dolor.",
        price: "1$"
    },
    {
        id: 2,
        img: book1,
        title: "Lorem, ipsum dolor.",
        price: "1$"
    },
    {
        id: 3,
        img: book1,
        title: "Lorem, ipsum dolor.",
        price: "1$"
    },
    {
        id: 4,
        img: book1,
        title: "Lorem, ipsum dolor.",
        price: "1$"
    },
    {
        id: 5,
        img: book1,
        title: "Lorem, ipsum dolor.",
        price: "1$"
    },
    {
        id: 6,
        img: book1,
        title: "Lorem, ipsum dolor.",
        price: "1$"
    },
    {
        id: 7,
        img: book1,
        title: "Lorem, ipsum dolor.",
        price: "1$"
    },
    {
        id: 8,
        img: book1,
        title: "Lorem, ipsum dolor.",
        price: "1$"
    },
]

const BestSellers = () => {
  return (
    <div className='bg-primary/20 dark:bg-stone-900 text-black dark:text-gray-200 font-itim '>
        <h1 className='text-6xl sm:5xl lg:7xl text-center pt-[3rem] pb-[1rem] '>Best Sellers</h1>
        <p className='text-md text-center text-stone-700 dark:text-gray-400 pb-[5rem] '>Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur, incidunt?</p>
        <div className='mb-100 mx-[1rem]'>
            <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-5 place-items-center'>
                {ImageList.map((data)=> (
                    <div 
                    data-aos='fade-up'
                    className='group' 
                    key={data.id}>
                        <div className='relative space-y-3'>
                            <Image
                            src={data.img}
                            alt=''
                            className='h-[180px] w-[180px] object-cover bg-gray-100 px-[0.5rem] py-[0.5rem] border-black dark:border-white border-[0px] rounded-3xl '
                            />
                            <div className='hidden top-[3.4rem] -translate-y-[4.1rem] w-[11rem] h-[11.2rem] group-hover:flex absolute text-center group-hover:backdrop-blur-md border-black border-[0px] rounded-3xl justify-center items-center'>
                                <button 
                                className='cursor-pointer hover:scale-105 duration-300 rounded-full bg-primary/40 dark:text-black py-[0.3rem] px-[1rem] border-[0px] border-black relative z-10'>
                                Add to cart
                                </button>
                            </div>
                        </div>
                        <div className='leading-7'>
                            <h2>{data.title}</h2>
                            <h2>{data.price}</h2>
                        </div>
                    </div>
                ))}
            </div>
        </div>
        <div className='grid place-items-center'>
            <button
            className='bg-primary/40 hover:scale-110 duration-200 text-black dark:text-white text-xl my-[3rem] py-2 px-4 rounded-full'>
                See all
            </button>
        </div>
    </div>
  )
}

export default BestSellers