export interface ShopifyProductImageNode {
  url: string;
}

export interface ShopifyProductImageEdge {
  node: ShopifyProductImageNode;
}

export interface ShopifyProductImages {
  edges: ShopifyProductImageEdge[];
}

export interface ShopifyProductNode {
  id: string;
  title: string;
  description: string;
  images: ShopifyProductImages;
}

export interface ShopifyProductEdge {
  node: ShopifyProductNode;
}

export interface ShopifyProducts {
  edges: ShopifyProductEdge[];
}

export interface ShopifyData {
  products: ShopifyProducts;
}

export interface ShopifyBody {
  data: ShopifyData;
}

export interface ShopifyResponse {
  status: number;
  body: ShopifyBody;
}
