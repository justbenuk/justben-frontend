//core
import React, { Fragment } from 'react'
import Head from 'next/head'
//components
import Header from '../header/Header'
import Footer from '../footer/Footer'
export default function Layout( { title, description, children } ) {
    return (
        <Fragment>
            <Head>
                <title>{ title ? title + ' - Freelance Developer' : 'Ben Andrews | Freelance Developer' }</title>
                <meta name="description" content={ description ? description : 'Freelance Web Developer, Based In Tamworth' } />
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <div className='min-h-screen flex flex-col justify-between bg-gradient-to-tr from-[#040111] via-[#3C074B] to-[#B1056F]'>
                <Header />
                <main className='container mx-auto px-6'>{ children }</main>
                <Footer />
            </div>
        </Fragment >
    )
}
