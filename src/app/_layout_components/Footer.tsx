import { Facebook, Linkedin, Mail, MapPin, Phone, Twitter, WheatIcon } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import { FaWhatsapp } from 'react-icons/fa6'

type Props = {}

const Footer = (props: Props) => {
  return (
    <footer className='relative h-full w-screen bg-white  pb-5 pt-20 z-20'>
      <div className='container text-10 lg:text-12 font-300 z-20'>
        <div className='flex flex-col lg:flex-row gap-5 xl:gap-10 mb-5 md:my-8 gap-y-5'>
          <div className='flex-col w-full max-w-full lg:max-w-[300px] xl:max-w-md flex-shrink-0 justify-start items-start flex gap-2'>
            <Link className='logo flex gap-2 items-end' href={'/'}>
              <div className='logo flex w-[40px] md:w-[60px] h-[40px] md:h-[60px] border border-greenMain rounded-full overflow-hidden items-center text-24'>
                <Image
                  src={"/Bharti's Kitchen New-Logo.png"}
                  alt='logo'
                  width={760}
                  height={557}
                  className='w-full h-full object-cover object-center'
                />
              </div>
              <h2 className='font-lily text-20 md:text-24 xl:text-28 text-greenMain'>Bharti's  <span className='text-redMain'>Kitchen</span></h2>
            </Link>
            <div >
              <h2 className='font-pt text-textGray text-12 md:text-14'>Explore our crunchy creations, crafted with care and flavor-packed goodness. Join us in savoring the taste of tradition, one bite at a time</h2>
            </div>
          </div>

          <div className='flex-grow w-full flex flex-col-reverse gap-y-5 lg:flex-col lg:justify-between justify-center items-center lg:items-end'>
            <ul className='social_icon flex gap-3'>
              <li><Link href={"/"} className='flex justify-center items-center w-[25px] h-[25px] sm:h-[30px] sm:w-[30px] md:h-[35px] md:w-[35px] text-white rounded-full hover:bg-white hover:text-lightBlue transition-all duration-300 ease-linear bg-lightBlue '>
                <Twitter className='h-3 w-3 sm:h-4 sm:w-4' />
              </Link>
              </li>
              <li><Link href={"/"} className='flex justify-center items-center w-[25px] h-[25px] sm:h-[30px] sm:w-[30px] md:h-[35px] md:w-[35px]  text-white rounded-full hover:bg-white hover:text-[#3B5998] transition-all duration-300 ease-linear bg-[#3B5998]'>
                <Facebook className='h-3 w-3 sm:h-4 sm:w-4' />
              </Link>
              </li>
              <li><Link href={"/"} className='flex justify-center items-center w-[25px] h-[25px] sm:h-[30px] sm:w-[30px] md:h-[35px] md:w-[35px] text-white rounded-full hover:bg-white hover:text-[#0976B4] transition-all duration-300 ease-linear bg-[#0976B4]'>
                <Linkedin className='h-3 w-3 sm:h-4 sm:w-4 ' />
              </Link>
              </li>
              <li><Link href={"/"} className='flex justify-center items-center w-[25px] h-[25px] sm:h-[30px] sm:w-[30px] md:h-[35px] md:w-[35px] text-white rounded-full hover:bg-white hover:text-green-600 transition-all duration-300 ease-linear bg-green-600'>
                <FaWhatsapp className='h-3 w-3 sm:h-4 sm:w-4 ' />
              </Link>
              </li>
            </ul>

            <ul className='grid text-12 md:text-14 gap-y-4 grid-cols-3 md:flex md:justify-between w-full'>
              <li>
                <Link href={"/"} className='h-full w-full mx-3 flex items-center justify-center relative before:absolute before:h-[2px] before:rounded-full before:bg-greenMain before:bottom-0 before:w-0 hover:text-greenMain hover:before:w-full before:transition-all before:duration-300  before:ease-linear'>Home</Link>
              </li>
              <li>
                <Link href={"/"} className='h-full w-full mx-3 flex items-center justify-center relative before:absolute before:h-[2px] before:rounded-full before:bg-greenMain before:bottom-0 before:w-0 hover:text-greenMain hover:before:w-full before:transition-all before:duration-300  before:ease-linear'>About Us</Link>
              </li>
              <li>
                <Link href={"/"} className='h-full w-full mx-3 flex items-center justify-center relative before:absolute before:h-[2px] before:rounded-full before:bg-greenMain before:bottom-0 before:w-0 hover:text-greenMain hover:before:w-full before:transition-all before:duration-300  before:ease-linear'>pickels  </Link>
              </li>
              <li>
                <Link href={"/"} className='h-full w-full mx-3 flex items-center justify-center relative before:absolute before:h-[2px] before:rounded-full before:bg-greenMain before:bottom-0 before:w-0 hover:text-greenMain hover:before:w-full before:transition-all before:duration-300  before:ease-linear'>Categories</Link>
              </li>
              <li>
                <Link href={"/"} className='h-full w-full mx-3 flex items-center justify-center relative before:absolute before:h-[2px] before:rounded-full before:bg-greenMain before:bottom-0 before:w-0 hover:text-greenMain hover:before:w-full before:transition-all before:duration-300  before:ease-linear'>blogs</Link>
              </li>
              <li>
                <Link href={"/"} className='h-full w-full mx-3 flex items-center justify-center relative before:absolute before:h-[2px] before:rounded-full before:bg-greenMain before:bottom-0 before:w-0 hover:text-greenMain hover:before:w-full before:transition-all before:duration-300  before:ease-linear'>Contact Us</Link>
              </li>
            </ul>
          </div>
        </div>

        <div className='text-center border-t'>
          <h3 className='mt-5'>
            @ 20224 Bharti's Kitchen reserved
          </h3>
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
    </footer>
  )
}

export default Footer