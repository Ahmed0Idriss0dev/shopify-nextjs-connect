import { getAllProducts } from "@/lib/getall";
import { ShopifyResponse } from "@/types";
import Image from "next/image";
import Link from "next/link";

export default async function Home() {
  const data:ShopifyResponse = await getAllProducts()
  const products =data.body.data.products.edges
  return (
  <> 
  
  <div className="w-full h-dvh px-12 grid grid-cols-3 gap-1.5">

  {products.map(({node},i)=>{
    const newId = node.id.split('/').pop()
    return (
       <Link href={`/${newId}`} key={i} className=" w-full h-max">
     <Image className="w-full h-full object-cover" alt="products" src={node.images.edges[0].node.url as string} width={300} height={300}/>
     <h1>{node.title} </h1>
     <h1>{node.description} </h1>
    </Link >
    )
  })}
  </div>
  </>
  );
}
