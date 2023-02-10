import React from 'react'
import Layout from '@/components/layouts/Layout'
import Link from 'next/link'

export default function NotFound() {
    return (
        <Layout title='Page Not Found'>
            <div className='flex flex-col items-center justify-center'>
                <div className='text-5xl uppercase text-white mb-4'>Sorry! Page Not Found</div>
                <Link className='button-link' href='/'>Go Home</Link>
            </div>
        </Layout>
    )
}
