import Image from 'next/image'
import React from 'react'

type Props = {}

const AboutUsSec = (props: Props) => {
    
    return (
        <div id='about' className='relative w-full h-full component '>
            <div className='w-full container component' >
                <div className='flex w-full h-full flex-col md:flex-row gap-5'>

                    <div className="w-full max-w-[500px] justify-center items-center hidden lg:flex">
                        <div className='relative w-full h-full  flex justify-center items-center'>
                            <div className='w-[250px] xl:w-[280px] flex bg-white -rotate-6 hover:rotate-0 transition-all duration-300 ease-linear p-3 border-2 border-greenMain justify-center items-center z-10 '>
                                <Image
                                    src={"/images/about.jpg"}
                                    alt='logo'
                                    width={571}
                                    height={709}
                                    className=''
                                />
                                {/* <Image
                                    src={"/images/about.webp"}
                                    alt='logo'
                                    width={571}
                                    height={709}
                                    className=''
                                /> */}
                            </div>
                            <div className='h-full w-full absolute flex justify-center items-center'>
                                <Image
                                    src={"/images/h10-shape-spin.png"}
                                    alt='logo'
                                    width={400}
                                    height={400}
                                    className='about-spin w-[300px] lg:w-full'
                                />
                            </div>
                        </div>
                    </div>
                    <div className='lg:hidden flex justify-center items-center' >
                        <div className='w-[250px] flex bg-white rotate-0 md:-rotate-6 p-3 border-2 border-greenMain justify-center items-center '>
                            <Image
                                src={"/images/about.jpg"}
                                alt='logo'
                                width={571}
                                height={709}
                                className=''
                            />
                        </div>

                    </div>
                    <div className="w-full h-full text-start flex flex-col gap-3 p-5">
                        <div>
                            <h3 className='text-greenMain text-16 sm:text-18 md:text-22 xl:text-24 font-lily'>About Us</h3>
                            <h1 className='text-28 md:text-32 xl:text-38 xxl:text-42 ' >Preserving Tradition, One Crunch at a Time</h1>
                        </div>
                        <h5 className='text-16 xl:text-18'>Welcome to <span className='text-greenMain  text-18 lg:text-22 font-lily'>Bharti's <span className='text-redMain'>Kitchen</span></span>, where we're passionate about pickels!</h5>
                        <h6 className='text-12 xl:text-14  font-pt'>
                            Whether you're a pickel connoisseur or just discovering the joys of pickeld goodness, we invite you to explore our wide range of pickel varieties, from classic dill pickels to adventurous spicy kimchi pickels. Each jar is packed with love and care, ensuring every crunchy bite is a burst of flavor.
                        </h6>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default AboutUsSec