export async function shopifyClient({ query, variables }:{query:unknown, variables?:unknown}) {
  const endpoint = process.env.NEXT_PUPLIC_SHOPIFY_STORE_DOMAIN as string
  const key = process.env.NEXT_PUPLIC_STOREFRONT_ACCESS_TOKEN  as string;

  try {
    const result = await fetch(endpoint, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'X-Shopify-Storefront-Access-Token': key 
      },
      body: JSON.stringify({ query, variables })
    });

    return {
      body: await result.json()
    };
  } catch (error) {
    console.error('Error:', error);
    return {
      status: 500,
      error: 'Error receiving data'
    };
  }
}