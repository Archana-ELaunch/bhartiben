import React from 'react'
import HeroSection from './_page_components/HeroSection'
import FeaturedPickels from './_page_components/FeaturedPickels'
import AboutUsSec from './_page_components/AboutUsSec'
import SerivicesPickels from './_page_components/SerivicesPickels'
import Categories from './_page_components/Categories'
import PickelsSec from './_page_components/PickesSec'
import SpotLightSec from './_page_components/SpotLightSec'
import ContactUsSec from './_page_components/ContactUsSec'
import Gallary from './_page_components/Gallary'

type Props = {}

const page = (props: Props) => {
  return (
    <>
        <HeroSection/>
        {/* <FeaturedPickels/> */}
        <SerivicesPickels/>
        <Categories/>
        <AboutUsSec/>
        <PickelsSec/>
        <ContactUsSec/>
        <SpotLightSec/>
        <Gallary/>
    </>
  )
}

export default page