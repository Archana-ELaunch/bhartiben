import Image from 'next/image'
import React from 'react'

type Props = {}

const Gallary = (props: Props) => {
    return (
        <div id='gallary' className=' w-full'>
            <div className='container component'>
                <div className='w-full flex flex-col gap-2 justify-center items-center text-center pb-5'>
                    <h3 className='text-greenMain text-16 sm:text-18 md:text-22 xl:text-24 font-lily'>Instagram Pickle Spotlight</h3>
                    <div className='w-full'>
                        <h1 className='text-18 sm:text-20 md:text-24 xl:text-28 xxl:text-32 font-lora'>Discover Instagram Pickle Spotlight for a flavorful journey of reviews and mouthwatering visuals!</h1>
                    </div>
                </div>


                <div>

                    <div className='grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3  gap-5 container'>
                        <div className='relative w-full h-[200px] sm:h-[250px] xl:h-[300px] overflow-hidden group/item rounded-pan'>
                            <Image
                                src={"/images/bg3.jpg"}
                                alt='c1'
                                width={612}
                                height={408}
                                className='h-full w-full object-cover object-center group-hover/item:scale-110 duration-300 ease-linear'
                            />
                            <div className='absolute h-full flex justify-center start-0 top-0 z-10'>
                                <div className='flex flex-col justify-between ms-10 my-12 lg:my-16 w-[250px]'>

                                </div>
                            </div>
                        </div>
                        <div className='relative w-full h-[200px] sm:h-[250px] xl:h-[300px] overflow-hidden group/item rounded-pan'>
                            <Image
                                src={"/images/Garlic_Pickle_03.webp"}
                                alt='c1'
                                width={1200}
                                height={1080}
                                className='h-full w-full object-cover object-center group-hover/item:scale-110 duration-300 ease-linear'
                            />
                            <div className='absolute h-full flex justify-center start-0 top-0 z-10'>
                                <div className='flex flex-col justify-between ms-10 my-12 lg:my-16 w-[250px]'>

                                </div>
                            </div>
                        </div>
                        <div className='relative w-full h-[200px] sm:h-[250px] xl:h-[300px] overflow-hidden group/item rounded-pan'>
                            <Image
                                src={"/images/mango-saberjeli-pickles-3.jpg"}
                                alt='c1'
                                width={445}
                                height={500}
                                className='h-full w-full object-cover object-center group-hover/item:scale-110 duration-300 ease-linear'
                            />
                            <div className='absolute h-full flex justify-center start-0 top-0 z-10'>
                                <div className='flex flex-col justify-between ms-10 my-12 lg:my-16 w-[250px]'>

                                </div>
                            </div>
                        </div>
                        <div className='relative w-full h-[200px] sm:h-[250px] xl:h-[300px] overflow-hidden group/item rounded-pan'>
                            <Image
                                src={"/images/pickles.jpg"}
                                alt='c1'
                                width={600}
                                height={579}
                                className='h-full w-full object-cover object-center group-hover/item:scale-110 duration-300 ease-linear'
                            />
                            <div className='absolute h-full flex justify-center start-0 top-0 z-10'>
                                <div className='flex flex-col justify-between ms-10 my-12 lg:my-16 w-[250px]'>

                                </div>
                            </div>
                        </div>
                        <div className='relative w-full h-[200px] sm:h-[250px] xl:h-[300px] overflow-hidden group/item rounded-pan'>
                            <Image
                                src={"/images/magaya_pickle_mango_thokku_460x.jpg"}
                                alt='c1'
                                width={460}
                                height={460}
                                className='h-full w-full object-cover object-center group-hover/item:scale-110 duration-300 ease-linear'
                            />
                            <div className='absolute h-full flex justify-center start-0 top-0 z-10'>
                                <div className='flex flex-col justify-between ms-10 my-12 lg:my-16 w-[250px]'>

                                </div>
                            </div>
                        </div>
                        <div className='relative w-full h-[200px] sm:h-[250px] xl:h-[300px] overflow-hidden group/item rounded-pan'>
                            {/* <Image
                                src={"/images/sweet-spicy-pickles-afarmgirlsdabbles-01v.jpg"}
                                alt='c1'
                                width={1400}
                                height={2100}
                                className='h-full w-full object-cover object-center group-hover/item:scale-110 duration-300 ease-linear'
                            /> */}
                            <Image
                                src={"/images/hro1.jpg"}
                                alt='c1'
                                width={1985}
                                height={1324}
                                className='h-full w-full object-cover object-center group-hover/item:scale-110 duration-300 ease-linear'
                            />
                            <div className='absolute h-full flex justify-center start-0 top-0 z-10'>
                                <div className='flex flex-col justify-between ms-10 my-12 lg:my-16 w-[250px]'>

                                </div>
                            </div>
                        </div>
                    </div>

                </div>
            </div>

        </div>)
}

export default Gallary