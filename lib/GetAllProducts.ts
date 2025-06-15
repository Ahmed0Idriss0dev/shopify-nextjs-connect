import { GETALLPRODUCTS } from "@/graphQl";
import { shopifyClient } from "./shopifyClient";

export async function getAllProducts() {
  return shopifyClient({
    query: GETALLPRODUCTS 
  });
}