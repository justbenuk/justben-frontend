import React from 'react'
import Link from 'next/link'
import bg from '@/assets/bg.svg';

//components
import Header from '../header/Header';


export default function Hero() {
    return (
        <div className='h-full w-full' style={ { backgroundImage: `url('${bg.src}')`, height: '80vh', width: '100%', backgroundRepeat: 'no-repeat', backgroundSize: 'cover' } }>

            <Header />
            <div className='flex flex-col items-center justify-center h-[80%]'>
                <h1 className='text-4xl lg:text-7xl uppercase font-bold'>Hi, I'm Ben Andrews</h1>
                <p className='py-2 mb-8 text-2xl font-bold'>A Freelance Javascript Developer</p>
                <div>
                    <Link className='bg-purple-500 px-8 py-4 rounded text-white font-bold uppercase' href='/projects'>My Projects</Link>
                </div>
            </div>
        </div >
    )
}
