export const GETALLPRODUCTS=`
{
        products(sortKey: TITLE, first: 3) {
          edges{
            node {
              handle
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
      }
` ;
export const GETBYHANDLE=`
 query GetProductData($handle:String!){
  productByHandle(handle:$handle){
    title 
    description 
    priceRangeV2{
      minVariantPrice{
        amount
      }
    }
    images(first:1){
      edges{
        node{
          altText 
          url
        }
      }
    }
  }
}`