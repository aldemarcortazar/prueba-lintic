<!-- src/components/ProductList.svelte -->
<script lang="ts">
  import { onMount } from 'svelte';
  import { products, loadProducts } from './../modules/products/productsStore'; 
  import { createProduct, deleteProduct } from './../modules/products/productsService';
  import ProductForm from './ProductForm.svelte';
  import type { Product } from '../../interfaces/Product';
  

  let currentProduct: Product = { id: '', name: '', price: 0, description: '' }; 
  let isEditing = false;

  onMount(async () => {
    await loadProducts(); 
  });

  const editProduct = (product: Product) => {
    currentProduct = product;
    isEditing = true;
  };

  const resetEditing = () => {
    currentProduct = { id: '', name: '', price: 0, description: '' }; 
    isEditing = false;
  };

  const handleDelete = async (productId: string) => {
    await deleteProduct(productId); 
    await loadProducts(); 
  };
</script>

<ProductForm 
  { currentProduct } 
  isEditing={isEditing} 
  on:reset={resetEditing} 
/>

<ul class="mt-4">
  {#each $products as product}
    <li class="flex justify-between items-center border-b p-2">
      <div class="flex">
        <strong>{product.name}</strong> - ${product.price}
        <p>{product?.description}</p>
      </div>
      <div>
        <button on:click={() => editProduct(product)} class="bg-yellow-500 text-white rounded px-2">Edit</button>
        <button on:click={() => handleDelete(product.id)} class="bg-red-500 text-white rounded px-2 ml-2">Delete</button>
      </div>
    </li>
  {/each}
</ul>
