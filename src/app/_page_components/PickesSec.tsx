import React from 'react'
import PickesList from './PickesList'
import PickelListSlider from './PickelListSlider'
import Image from 'next/image'


type Props = {}

const PickelsSec = (props: Props) => {
    return (
        <div id='pickels' className=' relative w-full z-20'>
            <div className='container component  z-20'>
                <div className='w-full flex flex-col gap-2 justify-center items-center text-center pb-5'>
                    <h3 className='text-greenMain text-16 sm:text-18 md:text-22 xl:text-24 font-lily'>Pickels</h3>
                    <div className='w-full max-w-[600px] xl:max-w-[700px]'>
                        <h1 className='text-20 md:text-24 xl:text-28 xxl:text-32 font-lora'>Handcrafted with Love !  Our Pickles Promise Organic, Fresh Flavor</h1>
                    </div>
                </div>


                <div className='mt-5'>
                    {/* <PickesList /> */}
                    <PickelListSlider/>
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

export default PickelsSec