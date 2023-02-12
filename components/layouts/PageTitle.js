import React from 'react'

export default function PageTitle( { title, description } ) {
  return (
    <div className='bg-gray-800'>
      <div className='flex flex-col justify-center items-center h-full py-24 px-6 lg:px-0'>
        <h1 className='text-5xl uppercase font-bold text-orange-500'>{ title }</h1>
        <p className='text-2xl w-2/3 text-center'>{ description }</p>
      </div>
    </div>
  )
}
