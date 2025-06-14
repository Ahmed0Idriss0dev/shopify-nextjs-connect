import Image from 'next/image'
import React from 'react'

const Hero = () => {
  return (
<div className='relative w-full h-dvh flex justify-center items-center text-white'>
      <Image className='absolute opacity-30 rotate-4' src='/images/hero.jpg'  width={400} height={600} alt=''/>
     <div className="absolute text-center">

      <h1 className='font-Wasted-Vindey text-6xl'>A sleek, high-end vibe—perfect for a boutique with luxe pieces</h1>
      <p>A cozy haven for effortless elegance. This boutique curates timeless wardrobe pieces with a  modern twist—think soft neutrals, high-quality fabrics, <br /> and artful layering. Each collection celebrates balanced sophistication, perfect for the woman who values quiet luxury and everyday ease.</p>
     </div>
    </div>  )
}

export default Hero