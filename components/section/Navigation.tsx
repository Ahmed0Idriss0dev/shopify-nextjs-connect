import { Heart, Search, ShoppingCart } from 'lucide-react'
import React from 'react'

const Navigation = () => {
  return (
    <nav className='section border-b border-neutral-300 flex justify-between items-center py-3 '>
      <h1>COCO LINA </h1>
      <div className="flex items-center gap-2">
      <Search/>
      <ShoppingCart/>
      <Heart/>

      </div>
    </nav>
  )
}

export default Navigation