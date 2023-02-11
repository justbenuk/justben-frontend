import React from 'react'
import qs from 'qs'
import { API_URL } from '@/config/index'
import PageLayout from '@/components/layouts/PageLayout'
import bg from '@/assets/bg.jpg'
import Link from 'next/link'
import Image from 'next/image'
export default function ProjectSingle({ project }) {
    console.log(project)
    return (
        <PageLayout title={project.title}>
            <div style={{ backgroundImage: `url('${bg.src}')`, width: '100%', backgroundSize: 'contain' }}>
                <div className='bg-gray-900/30 h-full'>
                    <div className='flex flex-col justify-center items-center h-full py-24 px-6 lg:px-0'>
                        <h1 className='text-5xl uppercase font-bold'>{project.title}</h1>
                        <div className='border-b-4 border-yellow-300 w-[50px]'></div>
                        <p className='text-2xl w-2/3 text-center'>{project.brief}</p>
                    </div>
                </div>
            </div>
            <div className='container mx-auto mt-8 px-6 lg:px-0'>
                <div className='grid grid-cols-1 lg:grid-cols-4 gap-8'>
                    <div className='border lg:col-span-3'>
                        <div className='px-2 py-2 border-b text-xl uppercase font-bold'>Description</div>
                        <div className='p-6' dangerouslySetInnerHTML={{ __html: project.content }} />
                    </div>
                    <div className='border lg:col-span-1'>
                        <div className='px-2 py-2 border-b text-xl uppercase font-bold'>Links</div>
                        <div className='p-6 flex flex-col gap-4 items-center justify-center'>
                            {project.github &&
                                <Link className='w-full py-2 text-center bg-yellow-300' href={`${project.github}`} target={'_blank'} noreferrer ><span></span> Github</Link>
                            }
                            {project.preview &&
                                <Link className='w-full py-2 text-center bg-green-300' href={`${project.preview}`} target={'_blank'}><span></span> Visit Site</Link>
                            }
                            <Link className='w-full py-2 text-center bg-red-300' href='/contact'><span></span> Contact Me</Link>
                        </div>

                    </div>
                </div>
                <div className='grid grid-cols-2 md:grid-cols-5 lg:grid-cols-6 gap-8 mt-8'>
                    <div className='border-2 col-span-2 md:col-span-3 lg:col-span-3'>
                        <p className='border-b uppercase font-bold p-4 text-xl'>Desktop View</p>
                        {project.desktop.data ?
                            <Image className='w-full h-[300px]' src={'https://stingray-app-gukxi.ondigitalocean.app/cp' + project.desktop.data.attributes.formats.large.url} width={400} height={200} alt='preview' />
                            :
                            <div className='flex items-center justify-center h-[40%] w-full'>Sorry! No Preview Available</div>
                        }
                    </div>
                    <div className='border-2 col-span-2 md:col-span-2 lg:col-span-2' >
                        <p className='uppercase border-b p-4 font-bold text-xl'>Tablet View</p>
                        {project.tablet.data ?
                            <Image className='w-full h-[300px]' src={'https://stingray-app-gukxi.ondigitalocean.app/cp' + project.tablet.data.attributes.formats.large.url} width={300} height={200} alt='preview' />
                            :
                            <div className='flex items-center justify-center h-[40%] w-full'>Sorry! No Preview Available</div>
                        }
                    </div>
                    <div className='border-2 col-span-1 md:col-span-2 lg:col-span-1'>
                        <p className='uppercase font-bold p-4 border-b text-xl'>Mobile View</p>
                        {project.mobile.data ?
                            <Image className='w-full h-[300px]' src={'https://stingray-app-gukxi.ondigitalocean.app/cp' + project.mobile.data.attributes.formats.medium.url} width={150} height={200} alt='preview' />
                            :
                            <div className='flex items-center justify-center h-[40%] w-full'>Sorry! No Preview Available</div>
                        }
                    </div>
                </div>
            </div>
        </PageLayout >
    )
}
export async function getServerSideProps({ query }) {

    const q = qs.stringify({
        filters: {
            slug: {
                $eq: query.slug,
            }
        },
        populate: '*',
    })

    const res = await fetch(`${API_URL}/api/projects/?${q}`)
    const project = await res.json()
    return {
        props: { project: project.data[0].attributes }
    }
}
