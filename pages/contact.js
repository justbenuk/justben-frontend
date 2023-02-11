import PageLayout from "@/components/layouts/PageLayout";
import me from '@/assets/me.png'
import Image from "next/image";
export default function ContactPage() {
  return (
    <PageLayout>
      <div className="container mx-auto mt-10">
        <div className='flex flex-row items-center justify-center w-full'>
          <div className="rounded-full overflow-hidden bg-yellow-300 p-6">
            <Image src={me.src} alt='profile-pic' height={200} width={200} className='rounded-full' />
          </div>
        </div>
        <div className='text-2xl text-center mt-4 w-2/3 mx-auto'>If you would like me to take a look at your project, you can call me on <span className="font-bold uppercase"> 07916 019 809 </span> or email me at <span className="font-bold uppercase">justbenuk@gmail.com</span></div>
      </div >
    </PageLayout >
  )
}
