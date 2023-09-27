"use client"
import Nav from '@/app/Components/nav'
import { PREMIERPACKAGE, LUXURYPACKAGE, ProductPackage } from '@/app/Data/pricedata'
import Link from 'next/link'
import React, { useState } from 'react'

const Page = () => {

    const [PremierPackage, setPremierPackage] = useState<any>(PREMIERPACKAGE)
    const [LuxuryPackage, setLuxuryPackage] = useState<any>(LUXURYPACKAGE)
    const [AdvertisementPackage, setAdvertisementPackage] = useState<any>(ProductPackage)


  return (
    <>
    <Nav/>
    <main className=" lg:grid h-full grid-cols-1 lg:grid-cols-3 p-2 gap-3 bg-[#141414] ">
        <section className="p-3 h-64 lg:h-screen flex justify-start items-end col-span-3 bg-[url('/videoshoot.jpg')] bg-cover rounded-xl">
            <h1 className=" flex text-2xl lg:text-8xl text-white font-semibold uppercase">Featured Packages</h1>
        </section>
        <section className=" flex flex-col col-span-1 lg:col-span-2  text-black gap-6 lg:gap-3 lg:py-0 py-8 ">
            <div className=" h-full lg:h-80  bg-white rounded-xl">
                <h1 className=' text-4xl p-3 font-light'>PREMIER PACKAGE</h1>
                {
                    PremierPackage.map((data: {id:number, social:string, video:string, hightlightreel:string, drone:string, price:string}) => {
                        const {social, video, drone, hightlightreel, price, id} = data

                        return (
                            <>
                            <section key={data.id} className=' flex flex-col  md:flex-row justifly-between  w-full'>
                                <div className="flex flex-col">
                                    <h1 className="flex text-2xl lg:text-4xl px-4 py-1 font-bold uppercase">Services</h1>
                                    <ul className=" flex flex-col text-black justifly-center p-4 md:w-[400px] lg:w-[600px]">
                                        <li className="flex lg:text-xl font-light">{data.drone}</li>
                                        <li className="flex lg:text-xl font-light">{data.video}</li>
                                        <li className="flex lg:text-xl font-light">{data.social}</li>
                                        <li className="flex lg:text-xl font-light">{data.hightlightreel}</li>
                                    </ul>
                                </div>
                                <div className="flex flex-col px-7 flex-1">
                                <h1 className="flex text-2xl lg:text-4xl py-1 font-bold uppercase">Price</h1>
                                <h2 className=" flex text-2xl w-full font-light">{data.price}</h2>
                                <div className="flex py-10 gap-2">
                                    <Link href={''}><button className=" uppercase w-32 bg-black text-white p-2 rounded-xl hover:-translate-y-3 duration-500">book</button></Link>
                                    <Link href={''}><button className=" uppercase w-32 bg-black text-white p-2 rounded-xl hover:-translate-y-3 duration-500 ">demo</button></Link>
                                </div>
                                </div>
                            </section>
                            </>
                        )

                    })
                }
            </div>
            <div className="h-full  lg:h-80 bg-white rounded-xl">
                <h1 className=' text-4xl p-3 font-light'>LUXURY PACKAGE</h1>
                {
                    LuxuryPackage.map((data: {id:number, photos:string, dronePhotos:string, social:string, video:string, hightlightreel:string, drone:string, price:string}) => {
                        const {social, video, drone, hightlightreel, dronePhotos, photos, price, id} = data

                        return (
                            <>
                            <section key={data.id} className='  flex flex-col  md:flex-row  justifly-between  w-full'>
                                <div className="flex flex-col">
                                    <h1 className="flex text-2xl lg:text-4xl px-4 py-1 font-bold uppercase">Services</h1>
                                    <ul className=" flex flex-col text-black justifly-center overflow-hidden p-4 md:w-[400px] lg:w-[600px]">
                                        <li className="flex lg:text-xl font-light">{data.photos}</li>
                                        <li className="flex lg:text-xl font-light">{data.drone}</li>
                                        <li className="flex lg:text-xl font-light">{data.dronePhotos}</li>
                                        <li className="flex lg:text-xl font-light">{data.video}</li>
                                        <li className="flex lg:text-xl font-light">{data.social}</li>
                                        <li className="flex lg:text-xl font-light">{data.hightlightreel}</li>
                                    </ul>
                                </div>
                                <div className="flex flex-col px-7 flex-1">
                                <h1 className="flex text-2xl lg:text-4xl py-1 font-bold uppercase">Price</h1>
                                <h2 className=" flex text-2xl w-full font-light">{data.price}</h2>
                                <div className="flex py-10 gap-2">
                                    <Link href={''}><button className=" uppercase w-32 bg-black text-white p-2 rounded-xl hover:-translate-y-3 duration-500">book</button></Link>
                                    <Link href={''}><button className=" uppercase w-32 bg-black text-white p-2 rounded-xl hover:-translate-y-3 duration-500">demo</button></Link>
                                </div>
                                </div>
                            </section>
                            </>
                        )

                    })
                }
            </div>
        </section>
        <section className="  col-span-1 border-4  p-3  border-[#efe7d2] rounded-xl">
            <h1 className=" flex text-4xl text-white font-semibold uppercase px-4">Advertisment Package</h1>
            {
                    AdvertisementPackage.map((data: {id:number, Service:string,  social:string, video:string, hightlightreel:string,  price:string}) => {
                        const {social, video,  hightlightreel, Service,  price, id} = data

                        return (
                            <>
                            <section key={data.id} className='  flex flex-col text-white   justifly-between  w-full'>
                                <div className="flex flex-col pt-8">
                                    <h1 className="flex text-2xl lg:text-4xl px-4 py-1 font-bold uppercase">Services</h1>
                                    <ul className=" flex flex-col text-white justifly-center  px-3 py-6 ">
                                        <li className="flex lg:text-xl font-light">{data.Service}</li>
                                        <li className="flex lg:text-xl font-light">{data.video}</li>
                                        <li className="flex lg:text-xl font-light">{data.social}</li>
                                        <li className="flex lg:text-xl font-light">{data.hightlightreel}</li>
                                    </ul>
                                </div>
                                <div className="flex flex-col pt-8 px-3 flex-1 text-white ">
                                <h1 className="flex text-2xl lg:text-4xl py-1 font-bold uppercase">Price</h1>
                                <h2 className=" flex text-xl w-full font-medium">{data.price}</h2>
                                <div className="flex py-10 gap-2">
                                    <Link href={''}><button className=" uppercase w-32 bg-white text-black p-2 rounded-xl hover:-translate-y-3 duration-500">book</button></Link>
                                    <Link href={''}><button className=" uppercase w-32 bg-white text-black p-2 rounded-xl hover:-translate-y-3 duration-500">demo</button></Link>
                                </div>
                                </div>
                            </section>
                            </>
                        )

                    })
                }
        </section>
        <section className=" col-span-3 h-[650px]  rounded-xl overflow-hidden ">
            <video src={'/popchips.mp4'} autoPlay loop muted playsInline className="LandingVid bg-cover rounded-xl scale-110   "></video>
        </section>
    </main>
    </>
  )
}

export default Page