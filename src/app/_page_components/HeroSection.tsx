"use client"

import { Button } from '@/components/ui/button'
import { ArrowRight, ArrowRightIcon } from 'lucide-react'
import Image from 'next/image'
import React from 'react'
import 'animate.css';


type Props = {}

const HeroSection = (props: Props) => {
    return (
        <div className='relative h-[350px] md:h-[550px] lg:h-[700px] bg-yellowMainLight z-10'>
            <div className=' flex w-full h-full container z-20'>
                <div className='h-full w-full flex justify-start items-start mt-12 md:mt-0 md:items-center pb-10 '>
                    <div className='flex flex-col gap-4 '>
                        <h2 className='text-32 sm:text-38 lg:text-42 xl:text-46 xxl:text-52 3xl:text-56 font-500 animate__animated animate__fadeInDown'>
                            Adding a Little Zing to Every Bite!
                            {/* Don't Settle For Boring Food , Pickel it Up */}
                        </h2>
                        <h3 className=' text-14 md:text-16'>Brand Of Organic Pickels</h3>

                        <div className='flex gap-7 animate__animated animate__fadeInUp mb-0 md:mb-14 lg:mb-20'>
                            <Button className='rounded-full bg-redMain text-white flex gap-2 px-3 md:px-4 h-9 sm:h-10 md:h-12 hover:bg-greenMain transition-all duration-300 ease-linear '>View More <ArrowRightIcon className='w-5 h-5 md:w-6 md:h-6' /></Button>
                            <div className='-mt-6'>
                                <Image
                                    src={"/images/slider-arow1.png"}
                                    alt='hero image'
                                    width={50}
                                    height={56}
                                    className=''
                                />
                            </div>
                        </div>
                    </div>
                </div>
                <div className='side_image w-full h-full justify-end items-center overflow-hidden hidden md:flex'>
                    {/* <Image
                        src={"/images/bg11.png"}
                        alt='hero image'
                        width={613}
                        height={407}
                        className=''
                    /> */}


                    {/* 1 */}
                    {/* <Image
                        src={"/images/hro.png"}
                        alt='hero image'
                        width={445} 
                        height={500}
                        className=''
                    /> */}
                    {/* 2 */}
                    <Image
                        src={"/images/hro1-removebg-preview.png"}
                        alt='hero image'
                        width={612}
                        height={408}
                        className='animate__animated animate__fadeInRight'
                    />

                </div>


            </div>
            <div className='absolute top-5 end-5 -z-10 hidden md:block'>
                <Image
                    src={"/images/pata.png"}
                    alt='hero image'
                    width={158}
                    height={165}
                    className='rotate-180'
                />

            </div>
            <div className='absolute bottom-5 end-10 -z-10 hidden xsm:block'>
                <Image
                    src={"/images/pata.png"}
                    alt='hero image'
                    width={120}
                    height={140}
                    className='-rotate-90'
                />
            </div>

            <div className='absolute bottom-0 start-0 w-[300px] sm:w-[400px] lg:w-[600px] -z-10 '>
                <Image
                    src={"/images/landing-layer1.png"}
                    alt='hero image'
                    width={600}
                    height={200}
                    className='rotate-180'
                />
            </div>
        </div>
    )
}

export default HeroSection