import React, { useState } from 'react'
import { API_URL } from '@/config'
import qs from 'qs'
import Link from 'next/link'

//components
import Layout from '@/components/layouts/Layout'
import Card from '@/components/card/Card'
import Current from '@/components/current/Current'

export default function ProjectAll( { projects, number } ) {

    const allProjects = projects.data

    //handle the pagination logic
    let nextpage = 0
    let prevpage = 0

    if ( parseInt( number ) >= parseInt( projects.meta.pagination.pageCount ) ) {
        nextpage = parseInt( projects.meta.pagination.pageCount )
    } else {
        nextpage = parseInt( number ) + 1
    }
    if ( parseInt( number ) <= 1 ) {
        prevpage = 1
    } else {
        prevpage = parseInt( number ) - 1
    }

    return (
        <Layout title='Projects' description='All projects created by Just Ben UK'>
            { allProjects.filter( ( item ) => item.attributes.current === true ).map( current => (
                <Current current={ current } />
            ) ) }
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8'>
                { projects.data.map( ( project ) => (
                    <Card key={ project.id } project={ project.attributes } />
                ) ) }
            </div>
            { parseInt( projects.meta.pagination.pageCount ) > 1 && (
                <div className='flex flex-row justify-between mt-10'>
                    <Link className='button-link' href={ `/projects?page=${prevpage}` }>Prev Page</Link>
                    <Link className='button-link' href={ `/projects?page=${nextpage}` }>Next Page</Link>
                </div>
            ) }
        </Layout >
    )
}

export async function getServerSideProps( { query: { page = 1 } } ) {
    const number = page
    const query = qs.stringify( {
        pagination: {
            page: number,
            pageSize: 4,
        },
        sort: [
            'createdAt:desc'
        ],
        populate: '*'
    } )
    const res = await fetch( `${API_URL}/api/projects/?${query}` )
    const projects = await res.json()
    return {
        props: { projects: projects, number: number }
    }
}
