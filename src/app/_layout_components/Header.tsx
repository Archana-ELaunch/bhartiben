"use client"

import { NavigationMenu, NavigationMenuContent, NavigationMenuItem, NavigationMenuLink, NavigationMenuList, NavigationMenuTrigger } from '@/components/ui/navigation-menu'
import Image from 'next/image'
import Link from 'next/link'
import React, { useEffect, useState } from 'react'
import LeftSideNavigationPanel from './LeftSideNavigationPanel'
import { ChevronDown, MenuIcon, Phone } from 'lucide-react'
import { usePathname } from 'next/navigation'
import SmallSlidebar from './SmallSlidebar'

type Props = {}

const Header = (props: Props) => {

    const pathname = usePathname()
    const [openSidebar, setopenSidebar] = useState(false)

    // useEffect(() => {

    //     const handleScroll = () => {
    //         const scrollY = window.scrollY
    //         console.log(scrollY);
    //         const header = document.getElementsByClassName('header')
    //         const top_panel = document.getElementsByClassName('top_panel')

    //         if (scrollY > 100) {
    //             top_panel[0].classList.replace('h-10', 'h-0')
    //         } else {
    //             top_panel[0].classList.replace('h-0', 'h-10')
    //         }
    //     }



    //     document.addEventListener("scroll", handleScroll)
    //     return () => {
    //         document.removeEventListener("scroll", handleScroll)
    //     }
    // },)


    useEffect(() => {

        const handleResize = () => {
            const screenWidth = window.innerWidth

            // console.log("screen x width >>> ", screenWidth);
            if (screenWidth > 992) {
                setopenSidebar(false)
            }
        }


        window.addEventListener("resize", handleResize)
        return () => {
            window.removeEventListener("resize", handleResize)
        }
    })

    const handleCloseSidebar = () => {
        setopenSidebar(false)
    }

    return (
        <header className='w-screen header_wrapper '>
            <div className='top_panel bg-greenMain h-6 sm:h-8  overflow-visible transition-all duration-300 ease-linear'>
                <div className='container w-full h-full flex justify-between items-center '>
                    <h6 className='text-white text-[8px] sm:text-10 lg:text-12 font-light'>
                        Welcome to Bharti's Kitchen!
                    </h6>
                    <h3 className='flex gap-1 justify-center items-center text-white text-[8px] sm:text-10 lg:text-12 font-light'><Phone className='h-3 w-3 lg:h-4 lg:w-4' /> +87697 87654</h3>
                </div>
            </div>
            <div className='header w-full bg-white h-[70px] hidden lg:block shadow'>
                <div className='container w-full h-full flex items-center '>
                    {/* <LeftSideNavigationPanel/> */}
                    <ul className='w-full h-full flex justify-between'>
                        <li className={`uppercase h-full w-full mx-3 flex items-center justify-center relative before:absolute before:h-[3px] before:rounded-full before:bg-greenMain before:bottom-0 ${pathname === "/" ? "before:w-full text-greenMain" : "before:w-0 hover:text-greenMain hover:before:w-full"} before:transition-all before:duration-300  before:ease-linear`}>
                            <Link href={"/"}
                                onClick={handleCloseSidebar}
                                className='flex text-14 font-500 w-full h-full justify-center items-center gap-2'>Home</Link>
                        </li>
                        <li className={`uppercase h-full w-full mx-3 flex items-center justify-center relative before:absolute before:h-[3px] before:rounded-full before:bg-greenMain before:bottom-0 ${pathname === "/about" ? "before:w-full text-greenMain" : "before:w-0 hover:text-greenMain hover:before:w-full"} before:transition-all before:duration-300  before:ease-linear`}>
                            <Link
                                // href={"/about"}
                                href={"#about"}
                                onClick={handleCloseSidebar}
                                className='flex text-14 font-500 w-full h-full justify-center items-center gap-2'>About Us</Link>
                        </li>
                        <li className={`uppercase h-full w-full mx-3 flex items-center justify-center relative before:absolute before:h-[3px] before:rounded-full before:bg-greenMain before:bottom-0 ${pathname === "/pickels" ? "before:w-full text-greenMain" : "before:w-0 hover:text-greenMain hover:before:w-full"} before:transition-all before:duration-300  before:ease-linear`}>
                            <Link
                                // href={"/pickels"}
                                href={"#pickels"}
                                onClick={handleCloseSidebar}
                                className='flex text-14 font-500 w-full h-full justify-center items-center gap-2'>pickels</Link>
                        </li>
                    </ul>
                    <div className='relative w-full flex justify-center items-center '>
                        <Link className='logo flex my-2 w-[70px] h-[70px] rounded-full overflow-hidden gap-2 items-center text-24' href={'/'} onClick={handleCloseSidebar}>
                            <Image
                                src={"/Bharti's Kitchen New-Logo.png"}
                                alt='logo'
                                width={760}
                                height={557}
                                className='w-full h-full object-cover object-center'
                            />
                        </Link>
                    </div>
                    <ul className='w-full h-full flex justify-between'>
                        <li className={`uppercase h-full w-full mx-3 flex items-center justify-center relative before:absolute before:h-[3px] before:rounded-full before:bg-greenMain before:bottom-0 ${pathname === "/categories" ? "before:w-full text-greenMain" : "before:w-0 hover:text-greenMain hover:before:w-full"} before:transition-all before:duration-300  before:ease-linear`}>
                            <Link
                                // href={"/categories"}
                                href={"#category"}
                                onClick={handleCloseSidebar}
                                className='flex text-14 font-500 w-full h-full justify-center items-center gap-2'>Categories</Link>
                        </li>
                        <li className={`uppercase h-full w-full mx-3 flex items-center justify-center relative before:absolute before:h-[3px] before:rounded-full before:bg-greenMain before:bottom-0 ${pathname === "/blogs" ? "before:w-full text-greenMain" : "before:w-0 hover:text-greenMain hover:before:w-full"} before:transition-all before:duration-300  before:ease-linear`}>
                            <Link
                                // href={"/gallery"}
                                href={"#spotLight"}
                                onClick={handleCloseSidebar}
                                className='flex text-14 font-500 w-full h-full justify-center items-center gap-2'>Gallery</Link>
                        </li>
                        <li className={`uppercase h-full w-full mx-3 flex items-center justify-center relative before:absolute before:h-[3px] before:rounded-full before:bg-greenMain before:bottom-0 ${pathname === "/contact" ? "before:w-full text-greenMain" : "before:w-0 hover:text-greenMain hover:before:w-full"} before:transition-all before:duration-300  before:ease-linear`}>
                            <Link
                                // href={"/contact"}
                                href={"#contact"}
                                onClick={handleCloseSidebar}
                                className='flex text-14 font-500 w-full h-full justify-center items-center gap-2'>Contact</Link>
                        </li>
                    </ul>
                </div>
            </div>

            <div className='block lg:hidden shadow'>
                <div className='container w-full h-full flex items-center justify-between'>
                    <div className='logo flex gap-2 items-center'>
                        <Link className='logo flex my-2 w-[40px] h-[40px] rounded-full overflow-hidden gap-2 items-center text-24' href={'/'} onClick={handleCloseSidebar}>
                            <Image
                                src={"/Bharti's Kitchen New-Logo.png"}
                                alt='logo'
                                width={760}
                                height={557}
                                className='w-full h-full object-cover object-center'
                            />
                        </Link>
                        <h2 className='font-lily text-18 hidden xsm:block sm:text-24 text-greenMain'>Bharti's  <span className='text-redMain'>Kitchen</span></h2>
                    </div>
                    <div onClick={() => setopenSidebar(true)} className='cursor-pointer'>
                        <MenuIcon className='h-6 w-6' />
                    </div>
                </div>
            </div>


            <div className={`fixed top-0 start-0 w-screen h-screen ${openSidebar ? "block" : "hidden"} bg-black/40 z-40`} onClick={handleCloseSidebar}>

            </div>
            <SmallSlidebar openSidebar={openSidebar} setopenSidebar={setopenSidebar} />
        </header>
    )
}

export default Header