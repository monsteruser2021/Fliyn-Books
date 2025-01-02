import React from 'react';
//import DarkMode from './Darkmode';
import { FaAngleUp, FaSearch, FaShoppingCart } from 'react-icons/fa';
import DarkMode from './Darkmode';

const menu = [
    {
        id: 1,
        name: "Hogar",
        link: "/#",
    },
    {
        id: 2,
        name: "Mejores",
        link: "/#top",
    },
    {
        id: 3,
        name: "Nuevos",
        link: "/#services",
    },
    {
        id: 3,
        name: "Especiales",
        link: "/#services",
    }
];

const DropdownLinks = [
    {
        id: 1,
        name: "Libros en tendencia",
        link: "/#"
    },
    {
        id: 2,
        name: "Mas vendidos",
        link: "/#"
    },
    {
        id: 3,
        name: "Mejores",
        link: "/#"
    },
]

const navbar = () => {
  return (
    <div className='shadow-md bg-white dark:bg-stone-900 dark:text-white duration-200 relative z-40'>
        {/*Upper Nav*/}
        <div className='bg-primary/60 py-2'>
            <div className='container flex justify-between items-center'>
                <div className='w-[10] '>
                    <a href="#"
                    className='font-nerko text-2xl sm:text-3xl flex gap-2 mx-auto px-[1rem] '
                    >
                        Flyin&apos; Books
                    </a>
                </div>

                {/*search bar*/}
                <div className='flex justify-between items-center gap-4'>
                    <div className='relative group hidden sm:block'>
                        <input type="text"
                        placeholder='Busqueda'
                        className='w-[200px] sm:w-[200px] group-hover:w-[300px] transition-all duration-300 rounded-full border border-gray-400 px-2 py-1 focus:outline-none focus:border-1 focus:border-primary dark:border-white dark:bg-stone-900'
                        />
                        <FaSearch className='text-black dark:text-white group-hover:text-primary absolute w-[1.5rem] top-1/2 -translate-y-1/2 right-3'/>
                    </div>

                    {/*Order button*/}
                    <button
                    onClick={() => alert("Orden no disponible todavia")}
                    className='bg-stone-900 text-white py-1 px-4 rounded-full flex items-center gap-3 group'
                    >
                        <span className='font-lili group-hover:block hidden transition-all duration-200'>
                        Orden
                        </span>
                        <FaShoppingCart className=' text-white drop-shadow-sm cursor-pointer'
                        />
                    </button>

                    {/*Darkmode switch*/}
                    <div className='px-[1rem] '>
                        <DarkMode/>
                    </div>
                </div>
            </div>
        </div>
        {/*Lower Nav*/}
        <div 
        data-aos='zoom-in'
        className='flex justify-center'>
            <ul className='font-lili sm:flex hidden items-center gap-4'>
                {menu.map((data) => (
                    <li key={data.id}>
                        <a href={data.link}
                        className='inline-block px-4 py-1 hover:text-primary duration-200'
                        >{data.name}</a>
                    </li>
                ))}
                {/*Simple dropdown and links*/}
                <li className='group relative cursor-pointer'>
                    <a href="#" className='flex items-center gap-[2px] py-2'>
                        Tendencias
                        <span>
                        <FaAngleUp 
                        className='transition-all duration-200 group-hover:rotate-180 stroke-white'/>
                        </span>
                    </a>
                    <div className='absolute z-[9999] hidden group-hover:block w-[150px] rounded-md bg-white dark:bg-stone-900 p-2 text-black dark:text-gray-200'>
                        <ul>
                            {DropdownLinks.map((data) =>(
                                <li key={data.id}>
                                    <a href={data.link}
                                    className='inline-block w-full rounded-md p-2 hover:bg-primary/20 dark:hover:bg-primary/40 shadow-md'
                                    >{data.name}</a>
                                </li>
                            ))}
                        </ul>
                    </div>
                </li>
            </ul>
        </div>
    </div>
  );
};

export default navbar
