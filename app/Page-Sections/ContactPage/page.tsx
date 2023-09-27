import Nav from '@/app/Components/nav'
import Link from 'next/link'
import React from 'react'
import ContactForm from '../../Components/Contactform'


const Page = () => {
  return (
   <>
   <Nav/>
    <main className=" grid grid-cols-1 lg:grid-cols-2 bg-[#141414] gap-3 p-4 h-full md:h-screen overflow-hidden">
        <section className=" rounded-xl flex justify-start items-end bg-[url('/phone.jpg')] h-96 md:h-[500px] lg:h-full bg-cover ">
            <h1 className=" text-2xl lg:text-8xl font-bold p-3 flex uppercase">Let's Connect</h1>
        </section>
        <section className=" rounded-xl flex flex-col justify-center items-center border h-full  border-[#efe7d271]">
            <h2 className=" flex uppercase text-2xl lg:text-4xl py-3">send a message</h2>
            <ContactForm/>
        </section>
    </main>
   </>
  )
}

export default Page