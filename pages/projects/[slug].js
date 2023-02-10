import React from 'react'
import qs from 'qs'
import { API_URL } from '@/config/index'
import Layout from '@/components/layouts/Layout'

export default function ProjectSingle( { project } ) {
    console.log( project )
    return (
        <Layout title={ project.title }>
            <div className='grid grid-cols-1 lg:grid-cols-4'>
                <div>Images</div>
                <div className='bg-white rounded shadow-xl col-span-3 p-6 text-xl'>
                    <p> <span className='uppercase font-bold'>Project Name: </span>{ project.title }</p>
                    <p> <span className='uppercase font-bold'>The Brief: </span>{ project.brief }</p>
                    <div> <span className='uppercase font-bold'>Description: </span><span dangerouslySetInnerHTML={ { __html: project.content } } /></div>
                </div>
            </div>
        </Layout >
    )
}
export async function getServerSideProps( { query } ) {

    const q = qs.stringify( {
        filters: {
            slug: {
                $eq: query.slug,
            }
        },
        populate: '*',
    } )

    const res = await fetch( `${API_URL}/api/projects/?${q}` )
    const project = await res.json()
    return {
        props: { project: project.data[ 0 ].attributes }
    }
}
