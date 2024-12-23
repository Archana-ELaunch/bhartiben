import Image from 'next/image'
import React from 'react'
import { ArrowLeft, ArrowRight } from 'lucide-react'
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/pagination';

import { FreeMode, Navigation, Pagination } from 'swiper/modules';
import Link from 'next/link'
import CategoriesList from './CategoriesList';



type Props = {}

const Categories = (props: Props) => {
    return (
        <div id='category' className='relative w-full z-20'>
            <div className='container  z-20 component'>
                <div className='w-full flex flex-col gap-2 justify-center items-center text-center py-5'>
                    <h3 className='text-greenMain text-16 sm:text-18 md:text-22 xl:text-24 font-lily'>Categories</h3>
                    <div className='w-full max-w-[600px] xl:max-w-[700px]'>
                        <h1 className='text-20 md:text-24 xl:text-28 xxl:text-32 font-lora'>From Classic to Bold Spices Explore Our pickel Pantry!</h1>
                    </div>
                </div>

                <div className='mt-5'>

                    <CategoriesList/>
                </div>
            </div>
            <div className='absolute bottom-0 start-0 w-full h-full  -z-10'>
                <Image
                    src={"/images/bg.jpg"}
                    alt='hero image'
                    width={862}
                    height={289}
                    className='w-full h-full rotate-180'
                />
            </div>
        </div>
    )
}

export default Categories