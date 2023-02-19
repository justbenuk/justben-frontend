import React from 'react'
import Link from 'next/link'
import Image from 'next/image'

export default function Card( { project } ) {
    return (
        <div className='rounded-xl shadow-xl overflow-hidden flex flex-col justify-between bg-white/20 text-black p-6'>
            <div className='flex flex-row justify-between items-center px-2 py-2'>
                <div className='flex flex-row gap-1'>
                    <div className='bg-red-500 rounded-full h-[15px] w-[15px]'></div>
                    <div className='bg-yellow-500 rounded-full h-[15px] w-[15px]'></div>
                    <div className='bg-green-500 rounded-full h-[15px] w-[15px]'></div>
                </div>
                <div className='uppercase font-bold text-white'>{ project.title }</div>
            </div>
            <div>
                <div className='p-6 rounded-xl overflow-hidden'>
                    <Image src={ project.desktop.data.attributes.formats.medium.url } width={ 700 } height={ 300 } alt='preview' />
                </div>
                <div className='p-6 text-lg text-center text-white'>{ project.brief }</div>
            </div>
            <div className='flex bg-gray-900 text-white py-2 text-center'>
                <Link className='w-full text-center uppercase font-bold' href={ `/projects/${project.slug}` }>Case Study</Link>
            </div>
        </div>
    )
}
