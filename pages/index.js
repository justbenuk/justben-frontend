import Layout from '@/components/layouts/Layout'
import Link from 'next/link'


export default function Home() {
  return (
    <Layout>
      <div className='flex flex-col items-center justify-center h-full'>
        <h1 className='text-5xl font-bold uppercase text-center'>Freelance Full Stack Developer</h1>
        <p className='mt-4 lg:w-2/3 text-xl text-center mb-8'>Im a self-taught developer and wanted to show my work. This portfolio is a record of the work I have done and a record of my progression as a Full Stack Developer. If you have any questions or a project you need help on. Contact me or check out my current projects below.</p>
        <Link href='/projects' className='button-link'>Projects</Link>
      </div>
    </Layout >
  )
}

