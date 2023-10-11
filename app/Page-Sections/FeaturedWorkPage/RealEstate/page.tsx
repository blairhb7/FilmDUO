"use client"
import React, { useState } from 'react'
import Nav from '../../../Components/nav'
import { videos } from '../../../Data/pricedata'
import BookingWidget from '@/app/Components/Widget';



const RealEstate = () => {

    const [Gallery, setGallery] = useState<any>(videos)
    

  return (
    <>
    <BookingWidget/>
    <Nav/>
    <main className=" flex flex-col gap-1 bg-[#141414]">
      
    <h1 className=" text-5xl col-span-2 pt-16 pb-6 lg:py-10 px-5 uppercase">Real Estate</h1>
            {
                Gallery.map((videos: {id:number, model:boolean, title:string, info:string, bed:string, bath:string, sqft:string,  video:string, text:string} ) =>  {

                const { id, text, video, model, info, bed, bath, sqft, title} = videos 

                return (
                  <>
                  <section key={id}  className=" flex flex-col xl:flex-row  gap-3 rounded-xl mx-6 lg:h-[550px] ">
                        <video src={videos.video}   controls className=' lg:w-[770px] w-full rounded-xl LandingVid object-cover '/> 
                        <div className=" flex flex-col px-3 justify-center  border h-full  border-[#efe7d271] w-full rounded-xl">
                          <h1 className=" text-3xl lg:text-6xl text-white">{videos.title}</h1>
                         <h1 className="flex pt-6 uppercase py-4 text-xl lg:text-4xl "> {videos.text}</h1>
                         <div className="flex py-2 gap-4">
                          <h4 className="">{videos.bed}</h4>
                          <h4 className="">{videos.bath}</h4>
                          <h4 className="">{videos.sqft}</h4>
                         </div>
                         <hr className='pb-4' />
                         <p className=" text-xs md:text-sm pb-3 text-white">{videos.info}</p>
                        </div>
                  </section>
                  </>
                )
                })
            }
    </main>
    </>
  )
}

export default RealEstate

