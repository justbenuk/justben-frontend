import React from 'react'
import Link from 'next/link'
import PageLayout from '@/components/layouts/PageLayout'
import bg from '@/assets/bg.jpg'
export default function NotFound() {
    return (
        <PageLayout title='Page Not Found'>
            <div style={{ backgroundImage: `url('${bg.src}')`, width: '100%', backgroundSize: 'contain' }}>
                <div className='bg-gray-900/30 h-full'>
                    <div className='flex flex-col justify-center items-center h-full py-24 px-6 lg:px-0'>
                        <h1 className='text-5xl uppercase font-bold'>Page Not Found</h1>
                        <div className='border-b-4 border-yellow-300 w-[50px]'></div>
                        <p className='text-2xl w-2/3 text-center'>The page you are looking for doesnt exist</p>
                    </div>
                </div>
            </div>

            <div className='container mx-auto mt-12 text-center'>
                <div className='text-5xl uppercase mb-10'>Sorry! Page Not Found</div>
                <Link className='button-link' href='/'>Go Home</Link>
            </div>
        </PageLayout>
    )
}
