"use client"

import Link from 'next/link'
import React, { FC, SetStateAction, useEffect } from 'react'
import { MdClose, MdReviews } from 'react-icons/md'
import { usePathname } from 'next/navigation'
import { Blocks, Home, Mail } from 'lucide-react'
import { FaHeadset, FaHome, FaPhone, FaPortrait, FaUsers } from 'react-icons/fa'
import { FaBowlFood, FaBridgeLock, FaJar } from 'react-icons/fa6'
import Image from 'next/image'

type Props = {
    openSidebar: boolean
    setopenSidebar: React.Dispatch<SetStateAction<boolean>>
}

const SmallSlidebar: FC<Props> = ({ openSidebar, setopenSidebar }) => {
    const pathname = usePathname()


    const handleCloseSidebar = () => {
        setopenSidebar(false)
    }


    return (
        <div className={`cart__Componen fixed  top-0 ${openSidebar ? "start-0" : "-start-[400px]"}  transition-all duration-300 ease-linear shadow w-full max-w-sm  bg-white h-screen z-50`}>
            <div className='w-full flex items-end justify-end pt-5 pe-5'>
                <button className='text-textGray' onClick={handleCloseSidebar}>
                    <MdClose className='w-5 h-5' />
                </button>
            </div>

            <div className='relative w-full flex justify-center items-center '>
                <Link className='logo flex my-2 w-[90px] h-[90px] rounded-full overflow-hidden gap-2 items-center text-24' href={'/'} onClick={handleCloseSidebar}>
                    <Image
                        src={"/Bharti's Kitchen New-Logo.png"}
                        alt='logo'
                        width={760}
                        height={557}
                        className='w-full h-full object-cover object-center'
                    />
                </Link>
            </div>
            <div className='text-center pb-5 flex justify-center items-center'>
                <Link href={"/"}><h2 className='font-lily text-28 sm:text-30 text-greenMain' onClick={handleCloseSidebar}>Bharti's  <span className='text-redMain'>Kitchen</span></h2></Link>
            </div>


            <div className='p-5 pb-10 px-10'>
                <ul className='flex flex-col gap-2'>
                    <li className={`navLinkItem uppercase h-full w-full rounded-lg hover:bg-lightGreen px-5 flex items-start justify-start ${pathname === "/" ? "text-greenMain bg-lightGreen" : "hover:text-greenMain "} transition-all duration-200  ease-linear`}>
                        <Link href={"/"}
                            onClick={handleCloseSidebar}
                            className='flex text-14 font-500 py-5 w-full h-full justify-start items-center gap-3'>
                            <FaHome className='h-5 w-5' />
                            Home</Link>
                    </li>
                    <li className={`navLinkItem uppercase h-full w-full rounded-lg hover:bg-lightGreen px-5 flex items-start justify-start ${pathname === "/about" ? "text-greenMain bg-lightGreen" : "hover:text-greenMain "} transition-all duration-200  ease-linear`}>
                        <Link href={"#about"}
                            onClick={handleCloseSidebar}
                            className='flex text-14 font-500 py-5 w-full h-full justify-start items-center gap-3'>
                            <FaUsers className='h-5 w-5' />
                            About Us</Link>
                    </li>
                    <li className={`navLinkItem uppercase h-full w-full rounded-lg hover:bg-lightGreen px-5 flex items-start justify-start ${pathname === "/pickels" ? "text-greenMain bg-lightGreen" : "hover:text-greenMain "} transition-all duration-200  ease-linear`}>
                        <Link href={"#pickels"}
                            onClick={handleCloseSidebar}
                            className='flex text-14 font-500 py-5 w-full h-full justify-start items-center gap-3'>
                            <FaJar className='h-5 w-5' />
                            pickels</Link>
                    </li>
                    <li className={`navLinkItem uppercase h-full w-full rounded-lg hover:bg-lightGreen px-5 flex items-start justify-start ${pathname === "/categories" ? "text-greenMain bg-lightGreen" : "hover:text-greenMain "} transition-all duration-200  ease-linear`}>
                        <Link href={"#category"}
                            onClick={handleCloseSidebar}
                            className='flex text-14 font-500 py-5 w-full h-full justify-start items-center gap-3'>
                            <Blocks className='h-5 w-5' />
                            Categories</Link>
                    </li>
                    <li className={`navLinkItem uppercase h-full w-full rounded-lg hover:bg-lightGreen px-5 flex items-start justify-start ${pathname === "/gallery" ? "text-greenMain bg-lightGreen" : "hover:text-greenMain "} transition-all duration-200  ease-linear`}>
                        <Link href={"#spotLight"}
                            onClick={handleCloseSidebar}
                            className='flex text-14 font-500 py-5 w-full h-full justify-start items-center gap-3'>
                            <MdReviews className='h-5 w-5' />
                            Gallery</Link>
                    </li>
                    <li className={`navLinkItem uppercase h-full w-full rounded-lg hover:bg-lightGreen px-5 flex items-start justify-start ${pathname === "/contact" ? "text-greenMain bg-lightGreen" : "hover:text-greenMain "} transition-all duration-200  ease-linear`}>
                        <Link href={"#contact"}
                            onClick={handleCloseSidebar}
                            className='flex text-14 font-500 py-5 w-full h-full justify-start items-center gap-3'>
                            <Mail className='h-5 w-5' />
                            Contact</Link>
                    </li>
                </ul>


            </div>
            <hr />
        </div>
    )
}

export default SmallSlidebar