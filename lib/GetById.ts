import { shopifyClient } from "./Shopify";
type idtype={
 id:string
}
export async function GetById({id}:idtype) {
  return shopifyClient({
    query: `query {
      node(id: "gid://shopify/Product/${id}") {
    ... on Product {
      id
      title
      description
      images(first: 2) {
        edges {
          node {
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


`
  });
}