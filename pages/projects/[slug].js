import React from 'react'
import qs from 'qs'
import { API_URL } from '@/config/index'
import PageLayout from '@/components/layouts/PageLayout'
import Link from 'next/link'
import Image from 'next/image'
import PageTitle from '@/components/layouts/PageTitle'
export default function ProjectSingle( { project } ) {
    console.log( project )
    return (
        <PageLayout title={ project.title }>
            <PageTitle title={ project.title } description={ project.brief } />
            <div className='container mx-auto mt-8 px-6 lg:px-0'>
                <div className='grid grid-cols-1 lg:grid-cols-4 gap-8'>
                    <div className=' lg:col-span-3 bg-white text-black rounded shadow-2xl overflow-hidden'>
                        <div className='px-2 py-2 border-b text-xl uppercase font-bold bg-orange-500 text-white'>Description</div>
                        <div className='p-6' dangerouslySetInnerHTML={ { __html: project.content } } />
                    </div>
                    <div className=' bg-white lg:col-span-1 rounded overflow-hidden'>
                        <div className='px-2 py-2 border-b text-xl uppercase font-bold bg-orange-500'>Links</div>
                        <div className='p-6 flex flex-col gap-4 items-center justify-center text-black'>
                            { project.github &&
                                <Link className='w-full py-2 text-center bg-yellow-300' href={ `${project.github}` } target={ '_blank' } noreferrer ><span></span> Github</Link>
                            }
                            { project.preview &&
                                <Link className='w-full py-2 text-center bg-green-300' href={ `${project.preview}` } target={ '_blank' }><span></span> Visit Site</Link>
                            }
                            <Link className='w-full py-2 text-center bg-red-300' href='/contact'><span></span> Contact Me</Link>
                        </div>

                    </div>
                </div>
                <div className='grid grid-cols-2 md:grid-cols-5 lg:grid-cols-6 gap-8 mt-8'>
                    <div className='bg-white rounded overflow-hidden col-span-2 md:col-span-3 lg:col-span-3'>
                        <p className='border-b uppercase font-bold p-4 text-xl bg-orange-500'>Desktop View</p>
                        { project.desktop.data ?
                            <Image className='w-full h-[300px]' src={ 'https://stingray-app-gukxi.ondigitalocean.app/cp' + project.desktop.data.attributes.formats.large.url } width={ 400 } height={ 200 } alt='preview' />
                            :
                            <div className='flex items-center justify-center h-[40%] w-full text-black'>Sorry! No Preview Available</div>
                        }
                    </div>
                    <div className='bg-white rounded overflow-hidden col-span-2 md:col-span-2 lg:col-span-2' >
                        <p className='uppercase border-b p-4 font-bold text-xl bg-orange-500'>Tablet View</p>
                        { project.tablet.data ?
                            <Image className='w-full h-[300px]' src={ 'https://stingray-app-gukxi.ondigitalocean.app/cp' + project.tablet.data.attributes.formats.large.url } width={ 300 } height={ 200 } alt='preview' />
                            :
                            <div className='flex items-center justify-center h-[40%] w-full text-black'>Sorry! No Preview Available</div>
                        }
                    </div>
                    <div className='bg-white rounded overflow-hidden col-span-1 md:col-span-2 lg:col-span-1'>
                        <p className='uppercase font-bold p-4 border-b text-xl bg-orange-500'>Mobile View</p>
                        { project.mobile.data ?
                            <Image className='w-full h-[300px]' src={ 'https://stingray-app-gukxi.ondigitalocean.app/cp' + project.mobile.data.attributes.formats.medium.url } width={ 150 } height={ 200 } alt='preview' />
                            :
                            <div className='flex items-center justify-center h-[40%] w-full text-black'>Sorry! No Preview Available</div>
                        }
                    </div>
                </div>
            </div>
        </PageLayout >
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
