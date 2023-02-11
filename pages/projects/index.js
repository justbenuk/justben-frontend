import React from 'react'
import { API_URL } from '@/config'
import qs from 'qs'
import Layout from '@/components/layouts/Layout'
import Card from '@/components/card/Card'
import Link from 'next/link'

export default function ProjectAll( { projects, number } ) {

    console.log(projects)
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
            <div className='py-12 flex flex-col items-center justify-center w-2/3 mx-auto text-center'>
                <h1 className='uppercase text-white text-4xl'>My Projects</h1>
                <p className='py-2 text-white text-lg'>Here are my projects, From themes to complete content management applications. If you have any questions or feedback. Please contact me</p>
            </div>
            <div className='grid grid-cols-1 lg:grid-cols-3 xl:grid-cols-4 gap-8'>
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

        </Layout>
    )
}

export async function getServerSideProps( { query: { page = 1 } } ) {
    const number = page
    const query = qs.stringify( {
        pagination: {
            page: number,
            pageSize: 4,
        }
    } )
    const res = await fetch( `${API_URL}/api/projects?_sort=createdAt:desc&${query}&populate=*` )
    const projects = await res.json()
    return {
        props: { projects: projects, number: number }
    }
}
