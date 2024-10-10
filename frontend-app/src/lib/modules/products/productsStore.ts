// src/services/ProductStore.ts
import { writable } from 'svelte/store';
import { fetchProducts, createProduct, editProduct, deleteProduct } from './productsService';

// Define el tipo para un producto
interface Product {
  id: string;
  name: string;
  price: number;
  description?: string;
}

export const products = writable<Product[]>([]); 

export async function loadProducts() {
  const loadedProducts = await fetchProducts();
  products.set(loadedProducts);
}

export async function createProductAction(newProduct: Omit<Product, 'id'>) { 
  const product = await createProduct({ id: crypto.randomUUID() ,...newProduct });
  if (product) {
    products.update((currentProducts) => [...currentProducts, product]);
  }
}

export async function editProductAction(updatedProduct: Product) { 
  const product = await editProduct(updatedProduct);
  if (product) {
    products.update((currentProducts) =>
      currentProducts.map((p) => (p.id === updatedProduct.id ? product : p))
    );
  }
}

export async function removeProduct(id: string) {
  await deleteProduct(id);
  products.update((currentProducts) => currentProducts.filter((p) => p.id !== id));
}
