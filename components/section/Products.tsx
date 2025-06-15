import { getAllProducts } from '@/lib/GetAllProducts'
import { ShopifyProductsResponse } from '@/types'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const Products =  async () => {
  const response:ShopifyProductsResponse = await getAllProducts()
  const Products= response.body?.data?.products?.edges
  console.log(response)
  return (
    <main className='grid py-3 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-1.5'>
        
        {
          Products?.map(({node},i)=>(
                <Link href={`/${node.handle}`} key={i} className="w-full  h-96 bg-neutral-200">
                    <Image className='w-full h-full' src={node.images.edges[0].node.url} width={300} height={300} alt='logo' />
                    <div className="">
                        <h2>{node.title} </h2>
                        {
                            node.variants.edges.map(({node},i)=>(
                                <div className="">
                                    <p>{node.price.amount} </p>
                                    <p>{node.price.currencyCode} </p>

                                </div>


                            ))
                        }
                    </div>
                </Link>

            ))
        }
      
    </main>
  )
}

export default Products