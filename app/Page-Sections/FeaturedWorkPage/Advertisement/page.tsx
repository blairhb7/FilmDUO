'use client'
import Nav from '@/app/Components/nav'
import { advertisement, videos } from '@/app/Data/pricedata'
import React, { useState } from 'react'

const Advertisement = () => {

    const [ProductVideo, setProductVideo] = useState<any>(advertisement)

  return (
    <>
    <Nav/>
    <div className="main  grid grid-cols-1 gap-2 p-5  lg:grid-cols-3 bg-[#141414]">
        <section className=" flex justify-start col-span-1 items-end">
             <video src={'/landing page video.mp4'} autoPlay loop muted playsInline className="LandingVid bg-cover rounded-s-lg  "></video>
             <h1 className=" text-white p-3 hover:-translate-y-3 duration-500 lg:text-5xl uppercase font-bold flex absolute">advertisement</h1>
        </section>
        <section className=" grid grid-cols-1 md:grid-cols-3 col-span-2  gap-1 rounded-r-lg p-1 overscroll-y-auto bg-black h-full">
        {
            ProductVideo.map((product:{id:number, title:string, video:string, info:string}) => {
                const { title, video, info, id} = product;
                return (
                    <>
                    <section key={id} className=" gap-1  h-60">
                        <video src={product.video} autoPlay loop muted playsInline className=' h-full LandingVid '></video>
                    </section>
                    </>
                )
            })
        }
        </section>
    </div>
    </>
  )
}

export default Advertisement