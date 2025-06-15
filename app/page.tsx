import Hero from '@/components/section/Hero'
import Products from '@/components/section/Products'
import Sbscribe from '@/components/section/Sbscribe'
import Link from 'next/link'
import React from 'react'

const page = () => {
  return (
   <>
    <Hero/>
    <Products/>
    <Sbscribe/>
   </>
  )
}

export default page