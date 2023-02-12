import Layout from '@/components/layouts/Layout'
import { API_URL } from '@/config'
import qs from 'qs'

//components
import Hero from '@/components/hero/Hero'
import About from '@/components/about/About'
import Current from '@/components/current/Current'


export default function Home( { current } ) {
  return (
    <Layout>
      <Hero />
      <About />
      <Current current={ current } />
    </Layout >
  )
}

export async function getServerSideProps() {
  const query = qs.stringify( {
    filters: {
      current: {
        $eq: true,
      }
    },
    populate: '*'
  } )

  const res = await fetch( `${API_URL}/api/projects/?${query}` )
  const data = await res.json()

  return {
    props: { current: data.data[ 0 ].attributes }
  }
}


