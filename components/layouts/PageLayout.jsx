import React, { Fragment } from 'react'
import Head from 'next/head'
import Header from '../header/Header'
import Footer from '../footer/Footer'
export default function PageLayout( { title, description, children } ) {
  return (
    <Fragment>
      <Head>
        <title>{ title ? title + ' | Just Ben UK | Freelance Developer' : 'Just Ben' }</title>
        <meta name="description" content={ description ? description : 'Freelance Web Developer, Based In Tamworth' } />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className='min-h-screen flex flex-col items-center justify-between '  >
        <Header />
        <main className='min-h-[100vh] w-full bg-gray-700 text-white' >{ children }</main>
        <Footer />
      </div>
    </Fragment>
  )
}