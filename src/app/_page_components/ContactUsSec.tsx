import { MapPin, PhoneCall, RocketIcon } from 'lucide-react'
import Image from 'next/image'
import React from 'react'
import { MdEmail } from 'react-icons/md'

type Props = {}

const ContactUsSec = (props: Props) => {

  return (
    <div id='contact' className='relative w-full h-full component bg-[url("/images/h4-bg-section-01-removebg-preview.png")] bg-fixed  bg-no-repeat'>
      <div className='w-full container'>
        <div className='flex w-full h-full flex-col md:flex-row-reverse gap-5'>

          <div className="w-full max-w-full lg:max-w-[500px] justify-center items-center">
            <div className='relative w-full h-full  flex justify-center items-center'>
              <div className=' flex w-full h-full justify-center items-center border-2 p-5 bg-white border-[#4f1a03] overflow-hidden'>
                <Image
                  src={"/images/pickelbg2.jpg"}
                  alt='logo'
                  width={1200}
                  height={1800}
                  className='w-full max-w-[500px]  hover:scale-125 transition-all duration-500 ease-linear'
                />
              </div>
            </div>
          </div>
          <div className="w-full h-full text-start flex flex-col gap-y-5 xl:gap-y-10">
            <div>
              <h3 className='text-greenMain text-16 sm:text-18 md:text-22 xl:text-24 font-lily'>Contact Us</h3>
              <h1 className='text-20 md:text-24 xl:text-28 xxl:text-32 '>Feel free to contact with us any time.</h1>
            </div>

            <div className='w-full grid grid-cols-1  gap-3 xl:gap-y-5 '>
              <div className='w-full flex justify-start items-start'>
                <div className='w-full max-w-[400px] xl:max-w-[500px] xxl:max-w-[600px] h-full bg-bg-gray px-5 py-5 border rounded-lg group/card bg-white hover:bg-lightGray cursor-pointer transition-all duration-300 ease-linear' >
                  <div className='hover:bg-bg-gray flex  gap-3 justify-center items-center h-full w-full transition-all duration-300 ease-linear'>
                    <div className="service_Icon bg-greenMain flex-shrink-0 h-[52px] w-[52px] md:h-[46px] md:w-[46px] xl:h-[52px] xl:w-[52px] text-white group-hover/card:bg-redMain group-hover/card:text-white  flex justify-center items-center rounded-full transition-all duration-300 ease-linear">
                      <PhoneCall />
                    </div>
                    <div className='flex-grow service_content text-start'>
                      <h2 className='text-12'>Mobile No</h2>
                      <h2 className='text-14 lg:text-16 '>+91 25361 14526 </h2>
                    </div>
                  </div>
                </div>
              </div>
              <div className='w-full flex justify-end items-end'>
                <div className='w-full max-w-[400px] xl:max-w-[500px] xxl:max-w-[600px] h-full bg-bg-gray px-5 py-5 border rounded-lg group/card bg-white hover:bg-lightGray cursor-pointer transition-all duration-300 ease-linear' >
                  <div className='hover:bg-bg-gray flex  gap-3 justify-center items-center h-full w-full transition-all duration-300 ease-linear'>
                    <div className="service_Icon bg-greenMain flex-shrink-0 h-[52px] w-[52px] md:h-[46px] md:w-[46px] xl:h-[52px] xl:w-[52px] text-white group-hover/card:bg-redMain group-hover/card:text-white  flex justify-center items-center rounded-full transition-all duration-300 ease-linear">
                      <MdEmail className='h-5 w-5' />
                    </div>
                    <div className='flex-grow service_content text-start'>
                      <h2 className='text-12'>Email Address</h2>
                      <h2 className='text-14 lg:text-16 '>bhartiben@gmail.com</h2>
                    </div>
                  </div>
                </div>
              </div>
              <div className='w-full flex justify-start items-start'>
                <div className='w-full max-w-[400px] xl:max-w-[500px] xxl:max-w-[600px] h-full bg-bg-gray px-5 py-5 border rounded-lg group/card bg-white hover:bg-lightGray cursor-pointer transition-all duration-300 ease-linear' >
                  <div className='hover:bg-bg-gray flex  gap-3 justify-center items-center h-full w-full transition-all duration-300 ease-linear'>
                    <div className="service_Icon bg-greenMain flex-shrink-0 h-[52px] w-[52px] md:h-[46px] md:w-[46px] xl:h-[52px] xl:w-[52px] text-white group-hover/card:bg-redMain group-hover/card:text-white  flex justify-center items-center rounded-full transition-all duration-300 ease-linear">
                      <MapPin />
                    </div>
                    <div className='flex-grow service_content text-start'>
                      <h2 className='text-12'>Address</h2>
                      <h2 className='text-14 lg:text-16 '>
                        A/30 , Commercial Road Fratton,
                        India
                      </h2>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* <div className='fixed bottom-0 start-0 -z-20 w-full'>
        <img
          src={"/images/h4-bg-section-01-removebg-preview.png"}
          alt='logo'
          className=''
        />
      </div> */}
     
    </div>)
}

export default ContactUsSec