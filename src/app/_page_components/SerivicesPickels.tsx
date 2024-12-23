import { ArrowRightIcon } from 'lucide-react'
import Image from 'next/image'
import React from 'react'

type Props = {}

const SerivicesPickels = (props: Props) => {
  return (
    <div id='services' className='w-full component'>
      <div className='w-full '>
        <div className='grid grid-cols-1 md:grid-cols-2  gap-5 container'>
          <div className='relative w-full h-[200px] md:h-[250px] overflow-hidden rounded-lg lg:rounded-2xl group/item bg-lightGreen'>
            <div className='flex flex-col justify-between ps-8 pt-8 xl:ps-10 xl:pt-10 gap-5 w-[300px]'>
              <h4 className='text-20 xsm:text-22 md:text-24 xl:text-28 font-lora font-600'>The best Organic
                pickels</h4>
              <div>
                <button className='text-greenMain text-16 lg:text-20 flex justify-center items-center gap-2 lg:gap-3 relative before:absolute before:w-0 before:h-[2px] before:bg-greenMain before:top-8 group-hover/item:before:w-full before:transition-all before:duration-300 before:ease-linear transition-all duration-300 ease-linear'>see now <ArrowRightIcon className='w-4 h-4 md:w-5 md:h-5' /></button>
              </div>
            </div>
            <div className='absolute flex justify-center end-5 md:end-10 bottom-5 z-10'>
              <div>
                <Image
                  src={"/images/h9-banner2.png"}
                  alt='c1'
                  width={186}
                  height={125}
                  className='w-[120px] h-[85px] sm:w-[150px] sm:h-[115px] xl:w-[186px] xl:h-[145px] group-hover/item:scale-110 transition-all duration-300 ease-linear'
                />
              </div>
            </div>
          </div>

          <div className='relative w-full h-[200px] md:h-[250px] overflow-hidden rounded-lg lg:rounded-2xl group/item bg-lightYellow'>
            <div className='flex flex-col justify-between ps-8 pt-8 xl:ps-10 xl:pt-10 gap-5 w-[300px]'>
              <h4 className='text-20 xsm:text-22 md:text-24 xl:text-28 font-lora font-600'>Everyday Fresh &
                Clean with Our
                pickels</h4>
              <div>
                <button className='text-greenMain text-16 lg:text-20 flex justify-center items-center gap-2 lg:gap-3 relative before:absolute before:w-0 before:h-[2px] before:bg-greenMain before:top-8 group-hover/item:before:w-full before:transition-all before:duration-300 before:ease-linear transition-all duration-300 ease-linear'>see now <ArrowRightIcon className='w-4 h-4 md:w-5 md:h-5' /></button>
              </div>
            </div>
            <div className='absolute flex justify-center end-5 md:end-10 bottom-5 z-10'>
              <div>
                <Image
                  src={"/images/hero (2).png"}
                  alt='hero image'
                  width={263}
                  height={192}
                  className='w-[120px] h-[85px] sm:w-[150px] sm:h-[115px] xl:w-[186px] xl:h-[145px] group-hover/item:scale-110 transition-all duration-300 ease-linear'
                />
              </div>
            </div>
          </div>
          <div className='relative w-full h-[200px] md:h-[250px] overflow-hidden rounded-lg lg:rounded-2xl group/item bg-lightRed'>
            <div className='flex flex-col justify-between ps-8 pt-8 xl:ps-10 xl:pt-10 gap-5 w-[300px]'>
              <h4 className='text-20 xsm:text-22 md:text-24 xl:text-28 font-lora font-600'>Make your Food
                Memorable</h4>
              <div>
                <button className='text-greenMain text-16 lg:text-20 flex justify-center items-center gap-2 lg:gap-3 relative before:absolute before:w-0 before:h-[2px] before:bg-greenMain before:top-8 group-hover/item:before:w-full before:transition-all before:duration-300 before:ease-linear transition-all duration-300 ease-linear'>see now <ArrowRightIcon className='w-4 h-4 md:w-5 md:h-5' /></button>
              </div>
            </div>
            <div className='absolute flex justify-center end-5 md:end-10 bottom-5 z-10'>
              <div>
                <Image

                  src={"/images/bowl-removebg-preview.png"}
                  alt='hero image'
                  width={480}
                  height={450}
                  className='w-[120px] h-[85px] sm:w-[150px] sm:h-[115px] xl:w-[186px] xl:h-[145px] group-hover/item:scale-110 transition-all duration-300 ease-linear'
                />
              </div>
            </div>
          </div>
          <div className='relative w-full h-[200px] md:h-[250px] overflow-hidden rounded-lg lg:rounded-2xl group/item bg-lightPurpule'>
            <div className='flex flex-col justify-between ps-8 pt-8 xl:ps-10 xl:pt-10 gap-5 w-[300px]'>
              <h4 className='text-20 xsm:text-22 md:text-24 xl:text-28 font-lora font-600'>The best Organic
                pickels</h4>
              <div>
                <button className='text-greenMain text-16 lg:text-20 flex justify-center items-center gap-2 lg:gap-3 relative before:absolute before:w-0 before:h-[2px] before:bg-greenMain before:top-8 group-hover/item:before:w-full before:transition-all before:duration-300 before:ease-linear transition-all duration-300 ease-linear'>see now <ArrowRightIcon className='w-4 h-4 md:w-5 md:h-5' /></button>
              </div>
            </div>
            <div className='absolute flex justify-center end-5 md:end-10 bottom-5 z-10'>
              <div>
                <Image
                  src={"/images/pickles-removebg-preview.png"}
                  alt='c1'
                  width={508}
                  height={491}
                  className='w-[120px] h-[85px] sm:w-[150px] sm:h-[115px] xl:w-[186px] xl:h-[145px] group-hover/item:scale-110 transition-all duration-300 ease-linear'
                />
              </div>
            </div>
          </div>


        </div>
      </div>


    </div>
  )
}

export default SerivicesPickels