import React from 'react'
import Image from 'next/image'
import Link from 'next/link'

//assets
import me from '@/assets/me.png'

export default function Hero() {
    return (
        <div className='bg-gray-800 shadow-xl h-full py-28'>
            <div className='w-2/3 mx-auto px-6 lg:px-0 h-full'>
                <div className='grid grid-cols-1 lg:grid-cols-2 h-full gap-4'>
                    <div className='flex flex-col justify-center h-full'>
                        <h1 className='text-5xl uppercase font-bold text-orange-500'>Hi, I'm Ben Andrews</h1>
                        <p className='text-2xl text-white'>I'm a self-taught freelance Full Stack Developer based in the midlands. Check out my current projects to learn more</p>
                        <div className='mt-4'>
                            <Link className='bg-orange-500 px-8 py-2 text-xl rounded shadow-xl font-bold uppercase' href='/projects'>Projects</Link>
                        </div>
                    </div>
                    <div className='lg:flex flex-col items-center justify-center hidden'>
                        <div className='rounded-full overflow-hidden bg-orange-500 p-6'>
                            <Image src={ me.src } alt='profile-pic' height={ 300 } width={ 300 } style={ { overflow: 'hidden', borderRadius: '100%' } } />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
