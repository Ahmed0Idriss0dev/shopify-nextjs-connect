'use client'
export const dynamicParams = true // true | false,
import { useParams } from 'next/navigation'
import React, { useEffect, useState } from 'react'

 function page() {
    const {ProductId} = useParams<{ProductId:string}>()
    
  return (
    <div>

        {ProductId}
    </div>
  )
}

export default page