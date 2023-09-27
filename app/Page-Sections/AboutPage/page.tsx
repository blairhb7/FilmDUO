import Nav from '@/app/Components/nav'
import React from 'react'

const page = () => {
  return (
    <>
    <Nav/>
    <main className="bg-[#141414] gap-2 p-5 grid grid-cols-1 lg:grid-cols-2 h-full lg:h-screen">
        <section className=" h-[500px] lg:h-full  flex justify-start items-end rounded-xl overflow-hidden">
            <h1 className=" text-white text-4xl lg:text-8xl z-40 absolute flex uppercase p-7">about</h1>
            <video src={'/pexels-kindel-media-7578550 (2160p).mp4'} autoPlay loop muted playsInline className="LandingVid bg-cover rounded-xl scale-110  "></video>
        </section>
        <section className=" grid grid-cols-1 lg:grid-cols-2 gap-3">
            <div className=" h-60 lg:h-full flex flex-col justify-center  border  border-[#efe7d271] rounded-xl">
                <h1 className=" uppercase text-white text-2xl px-2">Our Vision</h1>
                <p className=" text-sm flex p-3 font-thin">There are a thousand stories to be told, but none like yours.We prides ourselves with our authentic and humanistic approach to storytelling that brings you to life, ultimately inspiring prospects and sparking action.</p>
            </div>
            <div className=" h-60 lg:h-full bg-[url('/film.jpg')] bg-cover bg-center border border-[#efe7d271] rounded-xl"></div>
            <div className=" flex flex-col lg:flex-row gap-2 col-span-1 lg:col-span-2 w-full rounded-xl">
                <div className="  w-full px-3 rounded-xl flex flex-col justify-center  uppercase border border-[#efe7d271]">
                    <h1 className=" uppercase text-white  text-xl">Different</h1>
                    <p className=" text-xs flex p-3 font-thin">At FilmDUO we pride ourself on bringing a different perspective to make your vision come to life.</p>
                </div>
                <div className=" w-full px-3 rounded-xl flex flex-col justify-center  uppercase border border-[#efe7d271]">
                    <h1 className=" uppercase text-white text-xl">unique</h1>
                    <p className=" text-xs flex p-3 font-thin">Having a unique style is something we value very much at FilmDUO to help you standout from the crowed.</p>
                </div>
                <div className=" w-full px-3 rounded-xl flex flex-col justify-center uppercase border border-[#efe7d271]">
                    <h1 className=" uppercase text-white text-xl">Orginal</h1>
                    <p className=" text-xs flex p-3 font-thin">With orginal ideas, here at FilmDUO we like to mixed things up to create the best product on the market.</p>
                </div>
            </div>
            <div className=" h-60 lg:h-full bg-[url('/videoshoot.jpg')] bg-cover border  border-[#efe7d271] rounded-xl"></div>
            <div className=" h-60 lg:h-full flex flex-col justify-center  border border-[#efe7d271] rounded-xl">
                <h1 className=" uppercase text-white text-2xl px-2">Our Story</h1>
                <p className=" text-sm flex p-3 font-thin">Established in 2017, FilmDUO is a dynamic and innovative production company that thrives on the artistry of storytelling through the medium of film. Established with a passion for cinema and a commitment to excellence, FilmDUO is dedicated to crafting captivating narratives that engage, inspire, and entertain audiences worldwide. </p>
            </div>
        </section>
    </main>
    </>
  )
}

export default page