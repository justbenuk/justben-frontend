import React, { useState } from 'react'
import Link from 'next/link';
import Image from 'next/image';

//assets
import { FaBars, FaRegWindowClose } from 'react-icons/fa'
import me from '@/assets/newme.png'

export default function Header() {
    const [ navbarOpen, setNavbarOpen ] = useState( false );
    return (
        <header className='px-6 py-4 flex flex-row justify-between items-center w-full font-semibold'>
            <h1 className='text-xl text-white border p-2'>JBUK</h1>
            <nav>
                <FaBars className='text-xl text-white' onClick={ () => setNavbarOpen( !navbarOpen ) } />
                { navbarOpen && (
                    <div className='absolute top-0 right-0 w-full md:w-2/4 lg:w-1/4 h-full bg-gray-900 text-white shadow-2xl'>
                        <button className='flex flex-row justify-end w-full p-6'><FaRegWindowClose className='text-2xl' onClick={ () => setNavbarOpen( !navbarOpen ) } /></button>
                        <ul className='p-6'>
                            <Link href='/' onClick={ () => setNavbarOpen( !navbarOpen ) }>
                                <li className='navlink'>
                                    Home
                                </li>
                            </Link>
                            <Link href='/projects' onClick={ () => setNavbarOpen( !navbarOpen ) }>
                                <li className='navlink'>
                                    Projects
                                </li>
                            </Link>
                            <Link href='/contact' onClick={ () => setNavbarOpen( !navbarOpen ) }>
                                <li className='navlink'>
                                    Contact
                                </li>
                            </Link>
                        </ul>
                    </div>
                ) }

            </nav>
        </header >
    )
}
