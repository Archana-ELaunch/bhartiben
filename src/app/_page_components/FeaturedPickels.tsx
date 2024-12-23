import Image from 'next/image'
import React from 'react'

type Props = {}

const FeaturedPickels = (props: Props) => {
  return (
    <div  className='w-full component'>
      <div className='w-full '>
        <div className='grid grid-cols-1 md:grid-cols-2  gap-5 container'>
        <div className='relative w-full h-[200px] sm:h-[250px] xl:h-[300px] overflow-hidden rounded-lg lg:rounded-2xl group/item'>
            <Image
              src={"/images/bg3.jpg"}
              alt='c1'
              width={612}
              height={408}
              className='h-full w-full object-cover object-center group-hover/item:scale-110 group-hover/item:blur-[2px] duration-300 ease-linear'
            />
            <div className='absolute h-full flex justify-center start-0 top-0 z-10'>
              <div className='flex flex-col justify-between ms-10 my-12 lg:my-16 w-[250px]'>
                <h4 className='text-18 sm:text-20 xl:text-24 text-white'>The best Organic
                  pickels</h4>
                <div>
                  {/* <button className='text-white bg-greenMain px-3 py-2 rounded text-14 hover:bg-redMain hover:border hover:border-redMain hover:text-white border border-greenMain transition-all duration-300 ease-linear      '>shop now</button> */}
                </div>
              </div>
            </div>
          </div>
          <div className='relative w-full h-[200px] sm:h-[250px] xl:h-[300px] overflow-hidden rounded-lg lg:rounded-2xl group/item'>
            <Image
              src={"/images/Garlic_pickel_03.webp"}
              alt='c1'
              width={1200}
              height={1080}
              className='h-full w-full object-cover object-center group-hover/item:scale-110 group-hover/item:blur-[2px] duration-300 ease-linear'
            />
            <div className='absolute h-full flex justify-center start-0 top-0 z-10'>
              <div className='flex flex-col justify-between ms-10 my-12 lg:my-16 w-[250px]'>
                <h4 className='text-18 sm:text-20 xl:text-24 text-white'>Everyday Fresh &
                  Clean with Our
                  pickels</h4>
                <div>
                  {/* <button className='text-white bg-greenMain px-3 py-2 rounded text-14 hover:bg-redMain hover:border hover:border-redMain hover:text-white border border-greenMain transition-all duration-300 ease-linear'>shop now</button> */}
                </div>
              </div>
            </div>
          </div>
          <div className='relative w-full h-[200px] sm:h-[250px] xl:h-[300px] overflow-hidden rounded-lg lg:rounded-2xl group/item'>
            <Image
              src={"/images/bg8.jpg"}
              alt='c1'
              width={900}
              height={600}
              className='h-full w-full object-cover object-center group-hover/item:scale-110 group-hover/item:blur-[2px] duration-300 ease-linear'
            />
            <div className='absolute h-full flex justify-center start-0 top-0 z-10'>
              <div className='flex flex-col justify-between ms-10 my-12 lg:my-16 w-[250px]'>
                <h4 className='text-18 sm:text-20 xl:text-24 text-white'>Make your Food
                  Memorable</h4>
                <div>
                  {/* <button className='text-white bg-greenMain px-3 py-2 rounded text-14  hover:bg-redMain hover:border hover:border-redMain hover:text-white border border-greenMain transition-all duration-300 ease-linear             '>shop now</button> */}
                </div>
              </div>
            </div>
          </div>
          <div className='relative w-full h-[200px] sm:h-[250px] xl:h-[300px] overflow-hidden rounded-lg lg:rounded-2xl group/item'>
            <Image
              src={"/images/pickelbg2.jpg"}
              alt='c1'
              width={1500}
              height={1500}
              className='h-full w-full object-cover object-center group-hover/item:scale-110 group-hover/item:blur-[2px] duration-300 ease-linear'
            />
            <div className='absolute h-full flex justify-center start-0 top-0 z-10'>
              <div className='flex flex-col justify-between ms-10 my-12 lg:my-16 w-[250px]'>
                <h4 className='text-18 sm:text-20 xl:text-24 text-white'>The best Organic
                  pickels</h4>
                <div>
                  {/* <button className='text-white bg-greenMain px-3 py-2 rounded text-14 hover:bg-redMain hover:border hover:border-redMain hover:text-white border border-greenMain transition-all duration-300 ease-linear      '>shop now</button> */}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default FeaturedPickels