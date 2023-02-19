import React from 'react'
import Link from 'next/link'
import Layout from '@/components/layouts/Layout'
export default function NotFound() {
    return (
        <Layout title='Page Not Found'>
            <div className='container mx-auto mt-12 text-center'>
                <div className='text-5xl uppercase mb-10 text-white'>Sorry! Page Not Found</div>
                <Link className='button' href='/'>Go Home</Link>
            </div>
        </Layout>
    )
}
