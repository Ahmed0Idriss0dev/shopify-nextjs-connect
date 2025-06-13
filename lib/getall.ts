import { shopifyFetch } from "./Shopify";

export async function getAllProducts() {
  return shopifyFetch({
    query: `{
        products(sortKey: TITLE, first: 3) {
          edges{
            node {
              id
              title
              description
              images(first:1){
                edges{
                  node{
                    url
                  }
                }
              }
              
            }
          }
        }
      }`
  });
}