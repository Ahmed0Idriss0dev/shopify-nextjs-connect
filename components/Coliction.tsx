import { getAllProducts } from '@/lib/GetAllProducts'
import { Heart } from 'lucide-react'
import Image from 'next/image'
import React from 'react'

const Coliction = async () => {
    const data = await getAllProducts()
    const products = data.body.data.products.edges
  return (
    <div className='w-full gap-2 h-dvh grid grid-cols-3'>
        {products.map(({node}, i)=>{
            return (
                <div key={i} className={`w-full h-full text-white flex justify-between p-3 flex-col`}>
                    <Image src={node.images.edges[0].node.url} width={400} height={600} alt='logo' />
                    <div className="flex h-full justify-between items-center ">
                    <h1>{node.title} </h1>
                    <div className="flex items-center gap-1">
                      <Heart/>
                     <p>{node.variants.edges[0].node.price .currencyCode} </p>
                    <p>{node.variants.edges[0].node.price.amount } </p>

                    </div>
                    </div>

                </div>
            )
        })}
    
       
    </div>
  )
}

export default Coliction