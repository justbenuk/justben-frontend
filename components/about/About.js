import React from 'react'
import Link from 'next/link'

//icons
import { IoLogoJavascript } from 'react-icons/io'
import { SiStrapi } from 'react-icons/si'
import { TbBrandNextjs } from 'react-icons/tb'
import { FaReact, FaCss3Alt, FaHtml5, FaMobileAlt, FaDatabase } from 'react-icons/fa'

export default function About() {
    return (
        <div className='bg-gray-700 py-24'>
            <div className='w-2/3 mx-auto'>
                <div className='grid grid-cols-1 xl:grid-cols-2 gap-8'>
                    <div className='flex flex-wrap gap-4 py-12'>
                        <div className='border-2 border-orange-500 text-orange-500 text-xl h-[100px] w-[100px]'>
                            <div className='flex flex-col items-center justify-center h-full bg-gray-800'>
                                <IoLogoJavascript className='text-4xl' />
                            </div>
                        </div>
                        <div className='border-2 border-orange-500 text-orange-500 text-xl h-[100px] w-[100px]'>
                            <div className='flex flex-col items-center justify-center h-full bg-gray-800'>
                                <SiStrapi className='text-4xl' />
                            </div>
                        </div>
                        <div className='border-2 border-orange-500 text-orange-500 text-xl h-[100px] w-[100px]'>
                            <div className='flex flex-col items-center justify-center h-full bg-gray-800'>
                                <TbBrandNextjs className='text-4xl' />
                            </div>
                        </div>
                        <div className='border-2 border-orange-500 text-orange-500 text-xl h-[100px] w-[100px]'>
                            <div className='flex flex-col items-center justify-center h-full bg-gray-800'>
                                <FaReact className='text-4xl' />
                            </div>
                        </div>
                        <div className='border-2 border-orange-500 text-orange-500 text-xl h-[100px] w-[100px]'>
                            <div className='flex flex-col items-center justify-center h-full bg-gray-800'>
                                <FaCss3Alt className='text-4xl' />
                            </div>
                        </div>
                        <div className='border-2 border-orange-500 text-orange-500 text-xl h-[100px] w-[100px]'>
                            <div className='flex flex-col items-center justify-center h-full bg-gray-800'>
                                <FaHtml5 className='text-4xl' />
                            </div>
                        </div>
                        <div className='border-2 border-orange-500 text-orange-500 text-xl h-[100px] w-[100px]'>
                            <div className='flex flex-col items-center justify-center h-full bg-gray-800'>
                                <FaMobileAlt className='text-4xl' />
                            </div>
                        </div>
                        <div className='border-2 border-orange-500 text-orange-500 text-xl h-[100px] w-[100px]'>
                            <div className='flex flex-col items-center justify-center h-full bg-gray-800'>
                                <FaDatabase className='text-4xl' />
                            </div>
                        </div>
                    </div>
                    <div className='flex flex-col justify-center'>
                        <h1 className='text-orange-500 text-2xl uppercase font-bold py-2'>About Me</h1>
                        <p className='text-xl'>I'm a self-taught developer and I build web applications that are Mobile Responsive, Fast and Secure and personalised to your project.</p>
                        <p className='text-xl'>Take a look at my projects, If there's anything you like or would like to discuss your project feel free to get in touch</p>
                        <div className='mt-4'>
                            <Link className='bg-orange-500 px-8 py-2 text-xl rounded shadow-xl font-bold uppercase' href='/contact'>Contact Me</Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
