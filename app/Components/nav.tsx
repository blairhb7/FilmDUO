import Link from 'next/link'
import React from 'react'

const nav = () => {
  return (
    <>
    <main className="  bg-[#141414] rounded-xl flex justify-center items-center flex-row-reverse md:mt-20 md:mx-20  absolute px-1 md:px-6 z-50">
        <section className=' flex flex-row  py-4 px-2 uppercase'>
            <div className="flex flex-row gap-3 ">
                <Link href={'/'}> 
                    <div className="flex">
                        <h1 id='logo' className=" hidden md:block text-[.5em] md:text-base px-1 font-bold leading-tight text-white shadow-black ">FilmDUO</h1>
                    </div>
                </Link>
                <Link href={'/Page-Sections/FeaturedWorkPage'}>
                    <h2 className=" uppercase hover:border border-[#efe7d2] font-thin rounded-lg px-1 duration-300">Work</h2>
                </Link>
                <Link href={'/Page-Sections/AboutPage'}>
                    <h2 className=" uppercase hover:border border-[#efe7d2] font-thin rounded-lg px-1 duration-300">About</h2>
                </Link>
                <Link href={'/Page-Sections/PricesPage'}>
                    <h2 className=" uppercase hover:border border-[#efe7d2] font-thin rounded-lg px-1 duration-300">Pricing</h2>
                </Link>
                <Link href={'/Page-Sections/ContactPage'}>
                    <h2 className=" uppercase hover:border border-[#efe7d2] font-thin rounded-lg px-1 duration-300">Contact</h2>
                </Link>
            </div>
        </section>
        <section>
        <header className=' flex justify-center items-center'>
                <input type='checkbox' id='toggle' className='hidden' />
                <label className='toggle-btn  px-1 ' htmlFor='toggle'>
                    <div className="bar"></div>
                    <div className="bar"></div>
                    <div className="bar"></div>
                </label>
                <nav id='nav' className=' menu'>
                    <ul className=' z-50 list flex flex-col gap-2 text-3xl md:text-6xl  items-center font-extrabold text-white h-screen uppercase'>
                    <li className=' hover:-translate-x-3 duration-500'><Link className='Link hover:underline underline-offset-8  duration-500 ' href={'/'}>Home</Link></li>
                    <li className='hover:-translate-x-3 duration-500'><Link className='Link  hover:underline underline-offset-8 hover:translate-x-3' href={'/Page-Sections/FeaturedWorkPage'}>Featured Project</Link></li>
                    <li className='hover:-translate-x-3 duration-500'><Link className='Link  hover:underline underline-offset-8 hover:translate-x-3' href={'/Page-Sections/AboutPage'}>About</Link></li>
                    <li className='hover:-translate-x-3 duration-500'><Link className='Link  hover:underline underline-offset-8 hover:translate-x-3' href={'/Page-Sections/PricesPage'}>Pricing</Link></li>
                    <li className='hover:-translate-x-3 duration-500'><Link className='Link  hover:underline underline-offset-8 hover:translate-x-3' href={'/Page-Sections/ContactPage'}>Contact Us</Link></li>
                    <div className=" flex gap-3 z-50 justify-center py-1 ">
                            <Link href={`https://www.instagram.com/filmduo/`}><img className='h-10 w-10 hover:-translate-y-1 duration-200' src={"/instagram.png"} alt={"instagram"}  /></Link>
                            <Link href={`https://www.youtube.com/@filmduo3423`}><img  className='h-10 w-10 hover:-translate-y-1 duration-200' src={"/youtube.png"} alt={"youtube"}  /></Link>
                    </div>
                    </ul>
                    
                </nav>
            </header>
        </section>
    </main>
    </>
  )
}

export default nav