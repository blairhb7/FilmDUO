import Nav from '@/app/Components/nav'
import Link from 'next/link'
import React from 'react'

const Page = () => {
  return (
    <>
    <Nav/>
    <main className=" bg-[#141414] grid grid-cols-1 md:grid-cols-2 gap-3 p-6 h-screen w-screen overflow-hidden">
        <section dir="ltr" className=" flex justify-center items-center h-full overflow-hidden">
            <Link dir="ltr" href={'/'} className=' h-full p-3 flex justify-center items-center opacity-40 hover:opacity-100 duration-500 rounded-s-lg'>
                <video src={'/pexels-kindel-media-9875908 (2160p).mp4'} autoPlay loop muted playsInline className="LandingVid bg-cover rounded-s-lg scale-110  "></video>
                <h1 className=" text-white hover:-translate-y-3 duration-500 lg:text-6xl uppercase font-bold flex absolute">Real Estate</h1>
            </Link>
        </section>
        <section className=" flex justify-center items-center h-full overflow-hidden">
            <Link dir="ltr" href={'/'} className=' h-full p-3 flex justify-center items-center opacity-40 hover:opacity-100 duration-500 rounded-s-lg'>
                <video src={'/tates cookies.mp4'} autoPlay loop muted playsInline className="LandingVid bg-cover rounded-s-lg scale-110  "></video>
                <h1 className=" text-white hover:-translate-y-3 duration-500 lg:text-6xl uppercase font-bold flex absolute">advertisement</h1>
            </Link>
        </section>
    </main>
    </>
  )
}

export default Page