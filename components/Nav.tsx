import { Heart, ShoppingCart } from 'lucide-react'
import React from 'react'

const Nav = () => {
  return (
    <nav className='px-12 border-b border-neutral-50/10 text-white flex py-5 justify-between items-center'>
        <div className="flex items-center gap-4">
           <a href="">shop</a>
           <a href="">Contanct</a>
           <a href="">About</a>

        </div>
        <h1 className='font-Wasted-Vindey text-2xl'>Fashion</h1>
        <div className="flex items-center gap-4">
            <Heart/>
            <ShoppingCart/>
        </div>
    </nav>
  )
}

export default Nav