"use client"
import React, { useRef } from 'react'
import { ArrowLeft, ArrowRight } from 'lucide-react'
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/pagination';

import { FreeMode, Navigation, Pagination } from 'swiper/modules';
import Link from 'next/link'
import { Button } from '@/components/ui/button';
import Image from 'next/image';

type Props = {}

const pickelsData = [
    {
        id: 1,
        name: "Date & Tamarind Chutney",
        image: "/images/b1.webp",
    },

    {
        id: 2,
        name: "Green Chilli Pickel In Olive Oil",
        image: "/images/b2.webp",
    },
    {
        id: 3,
        name: "Mengo Pickel in olive Oil",
        image: "/images/b3.webp",
    },
    {
        id: 4,
        name: "Carrot & menogo Mixed Pickel",
        image: "/images/b4.webp",
    },
    {
        id: 5,
        name: "Red chilli pickel in Oilers",
        image: "/images/b5.webp",
    },
    {
        id: 6,
        name: "Mengo Pickel in olive Oil",
        image: "/images/b3.webp",
    },
    {
        id: 7,
        name: "Carrot & menogo Mixed Pickel",
        image: "/images/b4.webp",
    },
    {
        id: 8,
        name: "Red chilli pickel in Oilers",
        image: "/images/b5.webp",
    },

]



const PickelListSlider = (props: Props) => {
    const swiperRef = useRef<any>(null)
    const nextslide = () => {
        swiperRef.current?.swiper?.slidePrev()
    }
    const prevslide = () => {
        swiperRef.current?.swiper?.slideNext()
    }
    return (
        <div className='categorys__list h-full w-full '>
            <Swiper
                ref={swiperRef}
                // slidesPerView={1}
                // spaceBetween={20}
                freeMode={true}

                breakpoints={{
                    1350: {
                        slidesPerView: 5,
                        spaceBetween: 20
                    },
                    1200: {
                        slidesPerView: 5,
                        spaceBetween: 20
                    },
                    800: {
                        slidesPerView: 4,
                        spaceBetween: 15
                    },
                    720: {
                        slidesPerView: 3,
                        spaceBetween: 15
                    },
                    576: {
                        slidesPerView: 2,
                        spaceBetween: 20
                    },
                    350: {
                        slidesPerView: 2,
                        spaceBetween: 15
                    }
                }}
                modules={[FreeMode]}
                className="w-full"
            >
                {
                    pickelsData.map((item, itemIndex) => (
                        <SwiperSlide className='category w-full h-full rounded-lg overflow-hidden font-lora bg-white' key={itemIndex}>
                            <div className='w-full min-h-[270px] border-white border-2 hover:border-[#4f1a03] rounded-lg transition-all duration-300 ease-linear'>
                                <div className='pickel_image h-[200px] w-full overflow-hidden p-5 flex justify-center items-center '>
                                    <Image
                                        src={item.image}
                                        alt='logo'
                                        width={150} 
                                        height={150}
                                        className='h-full object-cover object-center'
                                    />
                                </div>
                                <div className='text-center px-3'>
                                    <h2 className='text-14 xl:text-16 xxl:text-18 font-poppins'>{item.name}</h2>
                                </div>
                            </div>
                        </SwiperSlide>
                    ))
                }
            </Swiper>

            <div className='see__all relative w-full flex justify-start items-center mt-3'>
                <div className='w-full justify-end items-end flex gap-2 md:gap-3'>
                    <Button className={`bg-greenMain text-white rounded-full h-[38px] w-[38px] md:h-[42px] md:w-[42px] p-0 hover:bg-redMain transition-all duration-300 ease-linear`} onClick={nextslide}><ArrowLeft /></Button>
                    <Button className={`bg-greenMain text-white rounded-full h-[38px] w-[38px] md:h-[42px] md:w-[42px] p-0 hover:bg-redMain transition-all duration-300 ease-linear `} onClick={prevslide}><ArrowRight /></Button>
                </div>
            </div>
        </div>
    )
}

export default PickelListSlider