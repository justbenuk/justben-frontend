import React from 'react'
import qs from 'qs'
import { API_URL } from '@/config/index'
import Layout from '@/components/layouts/Layout'
import Link from 'next/link'
import Image from 'next/image'
export default function ProjectSingle( { project } ) {
    console.log( project )
    return (
        <Layout title={ project.title }>
            <div className='container mx-auto mt-8 px-6 lg:px-0'>
                <div className='bg-white/20 rounded-lg shadow-2xl'>
                    <div className='flex flex-row justify-between items-center px-2 py-2'>
                        <div className='flex flex-row gap-1'>
                            <div className='bg-red-500 rounded-full h-[15px] w-[15px]'></div>
                            <div className='bg-yellow-500 rounded-full h-[15px] w-[15px]'></div>
                            <div className='bg-green-500 rounded-full h-[15px] w-[15px]'></div>
                        </div>
                        <div className='uppercase font-bold text-white'>{ project.title }</div>
                    </div>
                    <div className=''>
                        <div className='p-6 rounded-xl overflow-hidden'>
                            { project.desktop.data ?
                                <Image className='w-full h-[300px]' src={ project.desktop.data.attributes.formats.large.url } width={ 400 } height={ 400 } alt='preview' style={ { width: '100%', height: '500px' } } />
                                :
                                <div className='flex items-center justify-center h-[40%] w-full text-black'>Sorry! No Preview Available</div>
                            }
                        </div>
                        <div className='p-6 text-center'>
                            <div className='p-6 text-white text-xl' dangerouslySetInnerHTML={ { __html: project.content } } />
                            <div className='p-6 flex flex-col gap-4 items-center justify-center text-black'>
                                { project.github &&
                                    <Link className='px-8 py-2 text-center bg-yellow-300' href={ `${project.github}` } target={ '_blank' } noreferrer ><span></span> Github</Link>
                                }
                                { project.preview &&
                                    <Link className='px-8 py-2 text-center bg-green-300' href={ `${project.preview}` } target={ '_blank' }><span></span> Visit Site</Link>
                                }
                                <Link className='px-8 py-2 text-center bg-red-300' href='/contact'><span></span> Contact Me</Link>
                            </div>
                        </div>
                    </div>
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
