import { Heart, ShoppingCart } from 'lucide-react'
import React from 'react'

const Nav = () => {
  return (
    <nav className='px-12 flex py-5 justify-between items-center'>
        <h1>Shop</h1>
        <div className="flex items-center gap-1">
            <Heart/>
            <ShoppingCart/>
        </div>
    </nav>
  )
}

export default Nav