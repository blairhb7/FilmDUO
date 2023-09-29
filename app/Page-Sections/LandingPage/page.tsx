import Nav from '@/app/Components/nav'
import Link from 'next/link'
import React from 'react'

const Page = () => {
  return (
    <>
    <Nav/>
    <main className="  lg:h-screen grid grid-cols-1 lg:grid-cols-4 w-screen gap-3 p-6   bg-[#141414] overflow-hidden">
        <section className=" lg:col-span-3 flex justify-end items-end rounded-xl h-[700px] lg:h-full overflow-hidden">
          <h1 className=" absolute  z-40 text-3xl flex-wrap xl:text-5xl p-10  text-white flex  font-extrabold uppercase">YOUR CINEMATIC VISION, OUR CREATIVE EXPERTISE.</h1>
            <video src={'/pexels-kindel-media-7578546 (2160p).mp4'} autoPlay loop muted playsInline className="LandingVid bg-cover rounded-xl scale-110  "></video>
          <div className=" bg-[#141414] flex absolute justify-center items-center gap-2 w-28 h-10  rounded-tl-lg ">
          <Link href={`https://www.instagram.com/filmduo/`}><img src="/instagram.png" alt="" className=" w-6 h-6" /></Link>
          <Link href={`https://www.youtube.com/@filmduo3423`}><img src="youtube.png" alt="" className=" w-6 h-6" /></Link>
          </div>
          
        </section>
        <section className=" grid grid-cols-1 gap-2 overflow-hidden">
            <div className="  rounded-xl flex">
            <Link href={'/'} className=' '>
              <video src={'/pexels-kindel-media-7578541 (2160p) (1).mp4'} autoPlay loop muted playsInline className="LandingVid bg-cover rounded-xl opacity-60 hover:opacity-100 duration-300"></video>
            </Link>
              <div className=" bg-[#141414] flex absolute justify-end items-center w-32 h-10  rounded-br-xl ">
                <h2 className="   flex text-sm uppercase px-1">Real Estate</h2>
                <img src="/arrow.png" alt="" className=" h-5 w-5 mx-1 border border-[#efe7d2] rounded-full" />
              </div>
            </div>
          <section className=" rounded-xl flex ">
          <Link href={'/'}>
            <video src={'/tates cookies.mp4'} autoPlay loop muted playsInline className="LandingVid bg-cover rounded-xl opacity-60 hover:opacity-100 duration-300"></video>
          </Link>
            <div className=" bg-[#141414] flex absolute justify-end items-center w-34 h-10  rounded-br-xl ">
              <h2 className="  font-light flex text-sm uppercase px-1">advertisement</h2>
              <img src="/arrow.png" alt="" className=" h-5 w-5 mx-1 border border-[#efe7d2] rounded-full" />

            </div>
          </section>
          <section className=" rounded-xl flex  ">
          <Link href={'/'}>
            <img src={'/phone.jpg'}  className="LandingVid bg-cover  rounded-xl opacity-60 hover:opacity-100 duration-300"></img>
          </Link>
            <div className=" bg-[#141414] flex absolute justify-end items-center w-32 h-10  rounded-br-xl ">
              <h2 className="  font-light flex text-sm uppercase px-1">Contact Us</h2>
              <img src="/arrow.png" alt="" className=" h-5 w-5 mx-1 border border-[#efe7d2]  rounded-full" />
            </div>
          </section>
        </section>
    </main>
    </>
  )
}

export default Page 