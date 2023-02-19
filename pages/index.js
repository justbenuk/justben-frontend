import React from 'react'
import Link from 'next/link'

//components
import Layout from '@/components/layouts/Layout'

export default function HomePage() {
  return (
    <Layout title='Ben Andrews' description='Freelance Web Developer based in Tamworth'>
      <div className='flex flex-col items-center justify-center text-white'>
        <h1 className='text-6xl'>Hi, I'm Ben Andrews</h1>
        <p className='lg:w-2/3 text-center text-xl mt-4'>I'm a self-taught Freelance Web Developer and I build Web Applications using Javascript. Take a look at my projects, where I show all of my current projects, code snippets and ideas.</p>
        <Link href='/projects' className='button'>Projects</Link>
      </div>
    </Layout>
  )
}
