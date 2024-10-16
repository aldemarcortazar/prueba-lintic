import type { Product } from "../../../interfaces/Product";
import { createProductAction } from "./productsStore";

const API_URL = import.meta.env.VITE_API_URL;

export async function fetchProducts() {
  try {
    const response = await fetch(`${API_URL}/products`);
    if (!response.ok) {
      throw new Error('Failed to fetch products');
    }
    return await response.json();
  } catch (error) {
    console.error(error);
    return [];
  }
}

export async function createProduct(product: Product) {
  try {
    const response = await fetch(`${API_URL}/products`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(product),
    });
    if (!response.ok) {
      throw new Error('Failed to create product');
    }
    return await response.json();
  } catch (error) {
    console.error(error);
  }
}


export async function editProduct(product: Product) {
  console.log('edit product');
  try {
    const response = await fetch(`${API_URL}/products/${product.id}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(product),
    });
    if (!response.ok) {
      throw new Error('Failed to update product');
    }
    if (response.status !== 204) {
      const data = await response.json();
      return data;
    }
    return;
  } catch (error) {
    console.error(error);
  }
}

export async function deleteProduct(id: string) {
  try {
    const response = await fetch(`${API_URL}/products/${id}`, {
      method: 'DELETE',
    });
    if (!response.ok) {
      throw new Error('Failed to delete product');
    }
    if (response.status !== 204) {
      const data = await response.json();
      return data;
    }
    return;
  } catch (error) {
    console.error(error);
  }
}
