import React from 'react'
import Link from 'next/link'
import Image from 'next/image'

export default function Current( { current } ) {
  console.log( current )
  return (
    <div className=' pb-24'>
      <div className='container mx-auto px-6 lg:px-0 h-full'>
        <div className='bg-white/20 rounded-lg shadow-2xl'>
          <div className='flex flex-row justify-between items-center px-2 py-2'>
            <div className='flex flex-row gap-1'>
              <div className='bg-red-500 rounded-full h-[15px] w-[15px]'></div>
              <div className='bg-yellow-500 rounded-full h-[15px] w-[15px]'></div>
              <div className='bg-green-500 rounded-full h-[15px] w-[15px]'></div>
            </div>
            <div className='uppercase font-bold text-white'>Current Project</div>
          </div>
          <div className='grid grid-cols-1 lg:grid-cols-2'>
            <div className='p-6 rounded-xl overflow-hidden'>
              <Image src={ current.attributes.desktop.data.attributes.formats.large.url } width={ 400 } height={ 400 } style={ { width: '100%', borderRadius: '15px' } } />
            </div>
            <div className='p-6 text-center'>
              <div className='p-6 bg-white rounded-xl h-full'>
                <h1 className='text-2xl uppercase font-bold'>{ current.attributes.title }</h1>
                <p className='text-sm'>{ current.attributes.brief }</p>
                <div className='py-2 text-xl' dangerouslySetInnerHTML={ { __html: current.attributes.content.slice( 0, 150 ) + '...' } } />
                <div className='mt-4'>
                  <Link className='button' href={ `/projects/${current.attributes.slug}` }>Case Study</Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div >
    </div >
  )
}
