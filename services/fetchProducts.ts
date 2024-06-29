// services/fetchProducts.ts
export async function fetchProducts() {
    const response = await fetch('/data/response.json');
    if (!response.ok) {
      throw new Error('Failed to fetch products');
    }
    const data = await response.json();
    return data.products;
  }
  