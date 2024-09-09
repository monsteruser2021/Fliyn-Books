import React from 'react';
import Image1 from '../../assets/Showcase/books.png';
import Image2 from '../../assets/Showcase/books2.png';
import Image3 from '../../assets/Showcase/sale.png';
import Image from 'next/image';
import Slider from 'react-slick';

const ImageList = [
    {
        id: 1,
        img: Image1,
        title: "Lorem ipsum dolor sit amet consectetur.",
        description: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Doloremque sit aliquid tempore dolore praesentium vel tenetur dolorem adipisci libero officia.",
    },
    {
        id: 2,
        img: Image2,
        title: "Lorem ipsum dolor sit amet consectetur.",
        description: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Doloremque sit aliquid tempore dolore praesentium vel tenetur dolorem adipisci libero officia.",
    },
    {
        id: 1,
        img: Image3,
        title: "Lorem ipsum dolor sit amet consectetur.",
        description: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Doloremque sit aliquid tempore dolore praesentium vel tenetur dolorem adipisci libero officia.",
    },
]

const Hero = () => {

    var settings = {
        dots: false,
        arrows: false,
        infinite: true,
        speed: 800,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 4000,
        cssEase: "ease-in-out",
        pauseOnHover: false,
        pauseOnFocus: true,
      };
    

  return (

    <div className='relative overflow-hidden min-h-[550px] sm:min-h-[650px] font-itim bg-gray-200 flex justify-center items-center dark:bg-stone-900 dark:text-white duration-200'>
        <div className='h-[700px] w-[700px] bg-primary/40 absolute -top-1/2 right-0 rounded-3xl rotate-45 -z[8]'></div>
        <div className='container pb-8 sm:pb-0'>
            <Slider {...settings}>
                {ImageList.map((data) => (
                    <div className='grid grid-cols-1 sm:grid-cols-2'>
                            <div className='flex flex-col justify-center gap-4 pt-12 sm:pt-0 text-center sm:text-left order-2 sm:order-1 relative z-10'>
                                <h1 className='text-5xl sm:text-6xl lg:text-7xl'>
                                {data.title}
                                </h1>
                                <p className='text-sm'>
                                    {data.description}
                                </p>
                                <div>
                                    <button
                                    className='bg-secondary/40 hover:scale-105 duration-200 text-black dark:text-white py-2 px-4 rounded-full '>
                                        Order Now
                                    </button>
                                </div>
                            </div>
                            <div className='order-1 sm:order-2'>
                                <div className='relative z-10'>
                                    <Image
                                    src={data.img}
                                    alt=''
                                    className='w-[300px] h-[300px] sm:h-[450px] sm:w-[450px] sm:scale-105 lg:scale-120 object-contain mx-auto'
                                    />
                                </div>
                            </div>
                    </div>
                ))}
                
            </Slider>
        </div>
    </div>
    
  )
}

export default Hero