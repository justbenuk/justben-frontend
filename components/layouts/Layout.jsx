import React, { Fragment } from 'react'
import Head from 'next/head'
import Header from '../header/Header'
import Footer from '../footer/Footer'
import bg from '@/assets/bg.jpg'
export default function Layout({ title, description, children }) {
    return (
        <Fragment>
            <Head>
                <title>{title ? title + ' | Just Ben UK | Freelance Developer' : 'Just Ben'}</title>
                <meta name="description" content={description ? description : 'Freelance Web Developer, Based In Tamworth'} />
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <div className='min-h-screen flex flex-col items-center justify-between ' style={{ backgroundImage: `url(${bg.src})`, height: '100%', width: '100%', backgroundSize: 'contain', backgroundPosition: 'center' }} >
                <Header />
                <main className='h-full container mx-auto px-6 lg:p-0' >{children}</main>
                <Footer />
            </div>
        </Fragment>
    )
}
