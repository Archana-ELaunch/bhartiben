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

const categoryData = [
    {
        id: 1,
        image: "/images/s1.webp",
    },

    {
        id: 2,
        image: "/images/s2.webp",
    },
    {
        id: 3,
        image: "/images/s3.webp",
    },
    {
        id: 4,
        image: "/images/s4.webp",
    },
    {
        id: 5,
        image: "/images/s5.webp",
    },
    {
        id: 6,
        image: "/images/s6.webp",
    },
    {
        id: 7,
        image: "/images/s7.webp",
    },

]



const CategoriesList = (props: Props) => {
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
                slidesPerView={1}
                spaceBetween={20}
                freeMode={true}

                breakpoints={{
                    // 1350: {
                    //     slidesPerView: 5,
                    //     spaceBetween: 20
                    // },
                    1200: {
                        slidesPerView: 4,
                        spaceBetween: 20
                    },
                    992: {
                        slidesPerView: 3,
                        spaceBetween: 15
                    },
                    930: {
                        slidesPerView: 3,
                        spaceBetween: 15
                    },
                    576: {
                        slidesPerView: 2,
                        spaceBetween: 20
                    },
                    350: {
                        slidesPerView: 1,
                        spaceBetween: 15
                    }
                }}
                modules={[FreeMode]}
                className="w-full"
            >
                {
                    categoryData.map((item, itemIndex) => (
                        <SwiperSlide className='category w-full h-full overflow-hidden font-popins' key={itemIndex}>
                            <div className='h-[300px] md:h-[350px] xxl:h-[400px] bg-white p-5 border-2 border-white group/item hover:border-greenMain transition-all ease-in duration-300'>
                                <div className='h-full w-full  overflow-hidden   transition-all ease-in duration-300 '>
                                    <Image
                                        src={item.image}
                                        alt='logo'
                                        width={460}
                                        height={460}
                                        className='h-full w-full group-hover/item:scale-110 transition-all duration-300 ease-linear object-cover object-center'
                                    />
                                </div>
                            </div>
                        </SwiperSlide>
                    ))
                }
            </Swiper>

            <div className='see__all w-full flex justify-start items-center mt-3'>
                <div className='w-full justify-end items-end flex gap-2 md:gap-3'>
                    <Button className={`bg-greenMain text-white rounded-full h-[38px] w-[38px] md:h-[42px] md:w-[42px] p-0 hover:bg-redMain transition-all duration-300 ease-linear`} onClick={nextslide}><ArrowLeft /></Button>
                    <Button className={`bg-greenMain text-white rounded-full h-[38px] w-[38px] md:h-[42px] md:w-[42px] p-0 hover:bg-redMain transition-all duration-300 ease-linear `} onClick={prevslide}><ArrowRight /></Button>
                </div>
            </div>
        </div>
    )
}

export default CategoriesList