"use client"

import React, { useRef } from 'react'
import PickesList from './PickesList'
import PickelListSlider from './PickelListSlider'
import { ArrowLeft, ArrowRight } from 'lucide-react'
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/pagination';

import { FreeMode, Navigation, Pagination } from 'swiper/modules';
import Link from 'next/link'
import { Button } from '@/components/ui/button';
import Image from 'next/image';
import { RiDoubleQuotesL } from 'react-icons/ri'


const ReviewList = [
    {
        id: 1,
        content: "Renowned for its tangy crunch and bold flavor, Pickel delivers a burst of satisfaction in every bite, making it a must-have condiment for any culinary adventure."
    },
    {
        id: 2,
        content: "Pickel Review brings a fresh perspective to skincare, offering concise and honest evaluations of products in just a few lines. It's your go-to source for quick yet insightful assessments, helping you make informed decisions for your skincare routine."
    },
    {
        id: 3,
        content: "Refreshing, tangy, and bursting with flavor, Pickel's unique blend of spices and crispness delights the palate with every bite. A perfect accompaniment to sandwiches or a crunchy snack on its own, Pickel delivers a satisfying crunch that leaves you craving more."
    },
]



type Props = {}

const SpotLightSec = (props: Props) => {
    const swiperRef = useRef<any>(null)
    const nextslide = () => {
        swiperRef.current?.swiper?.slidePrev()
    }
    const prevslide = () => {
        swiperRef.current?.swiper?.slideNext()
    }

    return (
        <div id='spotLight' className=' w-full'>
            <div className=' component'>

                <div className='relative w-full h-[450px] md:h-[650px] lg:h-[700px] bg-[url("/images/sweet-spicy-pickles-afarmgirlsdabbles-01v.jpg")] bg-fixed bg-center bg-cover bg-no-repeat'>
                    <div className='bg-black/40 w-full h-full '>
                        <div className=' categorys__list h-full w-full flex flex-col gap-5 lg:gap-8 justify-center items-center container overflow-hidden'>
                            <div className='w-full h-[250px]  lg:h-[300px] px-3'>
                                <Swiper
                                    ref={swiperRef}
                                    slidesPerView={1}
                                    spaceBetween={20}
                                    freeMode={true}
                                    modules={[FreeMode]}
                                    className="w-full flex justify-center items-center"
                                >
                                    {
                                        ReviewList.map((item: any, itemIndex: any) => (
                                            <SwiperSlide className='category w-full  rounded-lg font-lora flex justify-center  items-center' key={itemIndex}>
                                                <div className=' w-full flex justify-center items-center h-[250px]  lg:h-[300px] '>
                                                    <div className='w-full max-w-[400px]  lg:max-w-[512px] bg-white h-full rounded-lg p-5 lg:p-8'>
                                                        <div className='border-2 border-greenMain flex flex-col rounded-xl rotate-3 w-full h-full p-5'>
                                                            <RiDoubleQuotesL className='w-8 h-8 text-greenMain flex-shrink-0' />
                                                            <div className='-rotate-3 flex justify-center items-center flex-grow overflow-hidden'>
                                                                <p className='text-textGray text-14'>
                                                                    {item.content}
                                                                </p>
                                                            </div>
                                                            <div className='w-full flex justify-end items-end flex-shrink-0'>
                                                                <RiDoubleQuotesL className='w-8 h-8 text-greenMain rotate-180' />
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </SwiperSlide>
                                        ))
                                    }
                                </Swiper>
                            </div>
                            <div className='flex justify-center items-center gap-3'>
                                <Button className={`bg-greenMain   text-white rounded-full h-[38px] w-[38px] md:h-[42px] md:w-[42px] p-0 hover:bg-redMain transition-all duration-300 ease-linear`} onClick={nextslide}><ArrowLeft className='h-5 w-5 md:w-6 md:h-6' /></Button>
                                <Button className={`bg-greenMain  text-white rounded-full h-[38px] w-[38px] md:h-[42px] md:w-[42px] p-0 hover:bg-redMain transition-all duration-300 ease-linear `} onClick={prevslide}><ArrowRight className='h-5 w-5 md:w-6 md:h-6' /></Button>
                            </div>
                        </div>
                    </div>
                </div>  
            </div>

        </div>
    )
}

export default SpotLightSec