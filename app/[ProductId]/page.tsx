'use client'
export const dynamicParams = true // true | false,
import { GETbyId } from '@/lib/GetById'
import { useParams } from 'next/navigation'
import React from 'react'

async function page() {
    const {ProductId} = useParams<{ProductId:string}>()
    const ProductData = await GETbyId({id:ProductId})
    console.log(ProductData)
  return (
    <div>

        {ProductId}
    </div>
  )
}

export default page