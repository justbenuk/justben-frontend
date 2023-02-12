import React from 'react'
import Link from 'next/link'
import Image from 'next/image'


//assets
import me from '@/assets/me.png'

export default function Current( { current } ) {

  return (
    <div className='bg-gray-800 shadow-xl h-full pb-24'>
      <div className='w-2/3 mx-auto px-6 lg:px-0 h-full'>
        <div className='text-center py-16'>
          <h1 className='text-3xl text-orange-500 uppercase font-bold'>Current Project</h1>
        </div>
        <div className='grid grid-cols-1 lg:grid-cols-2 h-full gap-4'>
          <div className='flex flex-col justify-center h-full'>
            <h1 className='text-4xl uppercase font-bold text-white'>{ current.title }</h1>
            <p className='text-2xl text-white'>{ current.brief }</p>
            <div className='mt-4'>
              <Link className='bg-orange-500 px-8 py-2 text-xl rounded shadow-xl font-bold uppercase' href={ `/projects/${current.slug}` }>Case Study</Link>
            </div>
          </div>
          <div className='flex flex-col items-center justify-center'>
            <div className='bg-orange-500 pl-4 pb-4'>
              <Image src={ 'https://stingray-app-gukxi.ondigitalocean.app/cp' + current.desktop.data.attributes.formats.large.url } alt='profile-pic' height={ 500 } width={ 500 } />
            </div>
          </div>
        </div>
      </div >
    </div >
  )
}
