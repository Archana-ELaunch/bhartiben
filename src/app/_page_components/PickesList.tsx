import Image from 'next/image'
import React from 'react'

type Props = {}


const pickelsData=[
        {
            id:1,
            name:"Date & Tamarind Chutney",
            image:"/images/b1.webp",
        },
        
        {
            id:2,
            name:"Green Chilli Pickel In Olive Oil",
            image:"/images/b2.webp",
        },
        {
            id:3,
            name:"Mengo Pickel in olive Oil",
            image:"/images/b3.webp",
        },
        {
            id:3,
            name:"Carrot & menogo Mixed Pickel",
            image:"/images/b4.webp",
        },
        {
            id:3,
            name:"Red chilli pickel in Oilers",
            image:"/images/b5.webp",
        },

]


const PickesList = (props: Props) => {
    return (
        <div className='w-full h-full pickles__list'>
            <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4  gap-3 lg:gap-5 pt-8'>
                {
                   pickelsData.map((item, index) => (
                        <div className='w-full h-[300px]' key={index}>
                            <div className='pickel_image h-[250px] w-full overflow-hidden p-5 flex justify-center items-center'>
                                <Image
                                    src={item.image}
                                    alt='logo'
                                    width={150}
                                    height={150}
                                    className='h-full object-cover object-center'
                                />
                            </div>
                            <div className='text-center'>
                                <h2 className='text-16 xl:text-18 xxl:text-20 font-poppins'>{item.name}</h2>
                            </div>
                        </div>
                    ))
                }
            </div>
        </div>
    )
}

export default PickesList