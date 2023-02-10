import React, { useState } from 'react'
import Image from 'next/image'
import me from '@/assets/me.png'
import Link from 'next/link';
import { FaBars } from 'react-icons/fa'
export default function Header() {
    const [ navbarOpen, setNavbarOpen ] = useState( false );
    return (
        <header className='w-full text-white' >
            <nav className="flex flex-wrap items-center justify-between px-2 py-3 w-full">
                <div className="px-4 mx-auto flex flex-wrap items-center justify-between w-full">
                    <div className="w-full relative flex justify-between lg:w-auto lg:static lg:block lg:justify-start">
                        <Link
                            className="text-lg font-bold leading-relaxed inline-block mr-4 py-2 whitespace-nowrap uppercase"
                            href="/"
                        >
                            <span className='flex flex-row gap-6 items-center'>
                                <div className='rounded-full overflow-hidden'><Image src={ me } height={ 50 } width={ 50 } alt='profile pic' /></div>
                                <p>Ben Andrews</p>
                            </span>
                        </Link>
                        <button
                            className=" cursor-pointer text-xl leading-none px-3 py-1 border border-solid border-transparent rounded bg-transparent block lg:hidden outline-none focus:outline-none"
                            type="button"
                            onClick={ () => setNavbarOpen( !navbarOpen ) }
                        >
                            <FaBars />
                        </button>
                    </div>
                    <div
                        className={
                            "lg:flex flex-grow items-center" +
                            ( navbarOpen ? " flex" : " hidden" )
                        }
                        id="example-navbar-danger"
                    >
                        <ul className="flex flex-col lg:flex-row list-none lg:ml-auto">
                            <li className="nav-item">
                                <Link
                                    className="px-4 py-2 flex items-center text-lg uppercase font-bold leading-snug  hover:opacity-75"
                                    href="/projects"
                                >
                                    Projects
                                </Link>
                            </li>
                            <li className="nav-item">
                                <Link
                                    className="px-4 py-2 flex items-center text-lg uppercase font-bold leading-snug  hover:opacity-75"
                                    href="/contact"
                                >
                                    Contact
                                </Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </header >
    )
}
