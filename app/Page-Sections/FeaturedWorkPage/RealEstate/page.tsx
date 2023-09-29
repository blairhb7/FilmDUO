"use client"

import React, { useState } from 'react'
import Nav from '../../../Components/nav'
import { videos } from '../../../Data/pricedata'
import { Play } from 'next/font/google'
import { IoCloseOutline } from "react-icons/io5";
import { BiLoaderAlt } from "react-icons/bi";
import HoverVideoPlayer from 'react-hover-video-player';
import { info } from 'console'


const RealEstate = () => {

    const [Gallery, setGallery] = useState<any>(videos)
    const [modal, setModal] = useState(false);
    const [videoLoading, setVideoLoading] = useState(true);

  const openModal = () => {
    setModal(!modal);
  };

  const spinner = () => {
    setVideoLoading(!videoLoading);
  };


  return (
    <>
    <Nav/>
    <main className=" flex flex-col gap-1 bg-[#141414]">
      
    <h1 className=" text-5xl col-span-2 py-8 px-5 uppercase">Real Estate</h1>
            {
                Gallery.map((videos: {id:number, model:boolean, info:string, bed:string, bath:string, sqft:string,  video:string, text:string} ) =>  {

                const { id, text, video, model, info, bed, bath, sqft} = videos 

                return (
                  <>
                  <section key={id}  className=" flex flex-col xl:flex-row  gap-3 rounded-xl mx-6 lg:h-[550px] ">
                        <video src={videos.video}   controls className=' lg:w-[770px] w-full rounded-xl LandingVid object-cover '/> 
                        <div className=" flex flex-col px-3 justify-center  border h-full  border-[#efe7d271] w-full rounded-xl">
                          <h1 className=" text-6xl">CINEMATIC VIDEO TOURS</h1>
                         <h1 className="flex pt-6 uppercase py-4 text-4xl "> {videos.text}</h1>
                         <div className="flex py-2 gap-4">
                          <h4 className="">{videos.bed}</h4>
                          <h4 className="">{videos.bath}</h4>
                          <h4 className="">{videos.sqft}</h4>
                         </div>
                         <hr className='pb-4' />
                         <p className=" text-xs md:text-sm pb-3">{videos.info}</p>
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

/* {
                          id === id ? null : <video src={videos.video} className=''/>
                        
                        
                        
                        
                        
                        
                        
                        
                        
                        
                                 {modal&& id === id ? (
          <section className="modal__bg">
            <div className="modal__align">
              <div className="modal__content" modal={modal}>
                <IoCloseOutline
                  className="modal__close"
                  arial-label="Close modal"
                  onClick={setModal}
                />
                <div className="modal__video-align">
                  {videoLoading ? (
                    <div className="modal__spinner">
                      <BiLoaderAlt
                        className="modal__spinner-style"
                        fadeIn="none"
                      />
                    </div>
                  ) : null}
                  <iframe
                    className="modal__video-style"
                    onLoad={spinner}
                    loading="lazy"
                    width="800"
                    height="500"
                    src={video}
                    title="YouTube video player"
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                  ></iframe>
                </div>
              </div>
            </div>
          </section>
        ) : null}}*/ 