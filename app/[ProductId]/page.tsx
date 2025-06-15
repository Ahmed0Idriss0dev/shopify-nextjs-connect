import { getByHandle } from "@/lib/GetById"
import { ShopifyProductsResponse } from "@/types"

export const dynamicParams = true // true | false,

async function page({params}:{params:Promise<{ProductId:string}>}) {
    const {ProductId} = await params
    const response:ShopifyProductsResponse = await getByHandle({id:ProductId})
    const {} =response.body?.data?.products?.edges
  return (
    <div className="grid grid-cols-1 h-dvh sm:grid-cols-2 gap-2">
       <div className="w-full h-dvh  "></div>
       <div className="w-full py-7 flex justify-start flex-col  gap-1 h-full ">
           <h1 className="text-3xl ">Title of this product</h1>
           <p>description of this product</p>
           <p>199MDH</p>
           <div className="flex">

           </div>
           <button className='w-96 h-12  bg-green-950 text-white cursor-pointer' >Join</button>

       </div>
    </div>
  )
}

export default page