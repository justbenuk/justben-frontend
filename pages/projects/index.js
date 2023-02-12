import React from 'react'
import { API_URL } from '@/config'
import qs from 'qs'
import Card from '@/components/card/Card'
import Link from 'next/link'
import PageLayout from '@/components/layouts/PageLayout'
import bg from '@/assets/bg.jpg'
import PageTitle from '@/components/layouts/PageTitle'
export default function ProjectAll( { projects, number } ) {

    console.log( projects )
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
        <PageLayout title='Projects' description='All projects created by Just Ben UK'>
            <PageTitle title='My Projects' description='Here are my projects, From themes to complete content management applications. If you have any questions or feedback. Please contact me' />
            <div className='container mx-auto px-6 lg:px-0 mt-12'>
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
            </div>
        </PageLayout>
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
