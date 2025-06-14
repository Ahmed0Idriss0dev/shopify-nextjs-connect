import { shopifyClient } from "./Shopify";

export async function getAllProducts() {
  return shopifyClient({
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
            variants(first: 1) {
        edges {
          node {
            price {
              amount
              currencyCode
            }
          }
        }
      }
              
            }
          }
        }
      }`
  });
}