import Layout from '@/components/layouts/Layout'
import { API_URL } from '../config/index'
import Image from 'next/image'
import Link from 'next/link'

export default function SinglePage( { page } ) {
  const { title, content } = page.attributes
  console.log( page )
  return (
    <Layout>
      <div className='grid grid-cols-1 lg:grid-cols-2 gap-12 p-6'>
        <div className='bg-yellow-300 flex flex-row items-center justify-center h-full rounded'>
          <div className='rounded-full shadow-xl overflow-hidden'>
            <Image src={ 'http://127.0.0.1:1337' + page.attributes.image.data.attributes.formats.thumbnail.url } height={ 200 } width={ 200 } />
          </div>
        </div>
        <div>
          <h1 className='text-4xl'>{ title }</h1>
          <div className='text-lg mt-6 mb-6' dangerouslySetInnerHTML={ { __html: content } } />
          <Link href='/contact' className='bg-yellow-300 px-12 py-4 rounded text-black font-bold uppercase'>Contact Me</Link>
        </div>
      </div>
    </Layout>
  )
}

export async function getServerSideProps() {
  const res = await fetch( `${API_URL}/api/about?populate=image` )
  const data = await res.json()
  return {
    props: { page: data.data }
  }
}