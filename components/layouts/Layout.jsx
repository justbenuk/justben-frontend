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
                <title>{ title ? title + ' | Just Ben UK | Freelance Developer' : 'Just Ben' }</title>
                <meta name="description" content={ description ? description : 'Freelance Web Developer, Based In Tamworth' } />
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <Header />
            <main className='text-white'>{ children }</main>
            <Footer />
        </Fragment>
    )
}
