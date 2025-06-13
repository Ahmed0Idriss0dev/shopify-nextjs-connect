import { shopifyFetch } from "./Shopify";
type idtype={
 id:string
}
export async function GETbyId({id}:idtype) {
  return shopifyFetch({
    query: `{
     node(id: "gid://shopify/Product/9961705767229") {
    ... on Product {
      id
      title
      description
      images(first: 1) {
        edges {
          node {
            url
          }
        }
      }
      variants(first: 1) {
        edges {
          node {
            price
          }
        }
      }
    }
  }
}

`
  });
}