export interface ShopifyProductsResponse {
  Products?: {
    body?: {
      data?: {
        products?: {
          edges?: ProductEdge[];
        };
      };
    };
  };
}

export interface ProductEdge {
  node: ProductNode;
}

export interface ProductNode {
  id: string;
  title: string;
  description: string;
  images: {
    edges: ImageEdge[];
  };
  variants: {
    edges: VariantEdge[];
  };
}

export interface ImageEdge {
  node: {
    url: string;
  };
}

export interface VariantEdge {
  node: {
    price: {
      amount: string;
      currencyCode: string;
    };
  };
}
