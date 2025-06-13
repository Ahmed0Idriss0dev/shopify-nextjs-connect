import { getAllProducts } from "@/lib/getall";
import { ShopifyProductResponse } from "@/types";

export async function Products() {
      const resopnse:ShopifyProductResponse = await getAllProducts()
      const Products = resopnse.data?.products.edges
      return Products
}