"use client"

import { MoveUp, Rocket } from 'lucide-react'
import React, { useEffect, useState } from 'react'

type Props = {}

const BackToTop = (props: Props) => {

    const [scrHeight, setscrHeight] = useState(0)
    const [scrScrollY, setscrScrollY] = useState(0)
    // useEffect(() => {
    //     screenScrollYwindow.scrollY
    //     screenHeight = window.screen.height

    //     console.log("scoll >>> ", screenScrollY)
    //     console.log("screenHeight >>> ", screenHeight)

    // })
    useEffect(() => {
        const top_up = document.getElementsByClassName("top_up")
        const handleScroll = () => {
            setscrScrollY(window.scrollY)
            setscrHeight(window.screen.height - 500)
            if (scrScrollY > scrHeight) {
                top_up[0].classList.replace("hidden", "block")
            } else {
                top_up[0].classList.replace("block", "hidden")
            }
        }

        window.addEventListener("scroll", handleScroll)
        return () => {
            window.removeEventListener("scroll", handleScroll)
        }

    })

    return (
        <button className='top_up fixed end-[10px] bottom-[10px] md:end-[20px] md:bottom-[20px]  z-50 hidden' onClick={() => window.scrollTo({ top: 0, left: 0, behavior: 'smooth' })}>
            <div className='lg:w-[50px] lg:h-[50px] w-[40px] h-[40px] bg-greenMain hover:text-white border border-greenMain hover:border-redMain hover:bg-redMain text-white flex justify-center items-center rounded-full animate-pulse focus:border-none focus:ring-0 transition-all duration-300 ease-linear'>
                <MoveUp className='h-4 w-4 lg:w-6 lg:h-6' />
            </div>
        </button>
    )
}

export default BackToTop