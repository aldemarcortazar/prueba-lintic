<script lang="ts">
  import { fetchProducts } from './../modules/products/productsService';
  import type { Product } from '../../interfaces/Product';
  import { createProduct, editProduct } from './../modules/products/productsService';
  export let currentProduct: Product = { id: '', name: '', price: 0, description: '' };
  export let isEditing = false;
  
  const handleSubmit = async (event: Event) => {
    event.preventDefault();
    const newProduct = { name: currentProduct.name, price: currentProduct.price, id: currentProduct.id, description: currentProduct.description };
    if (isEditing) {
      await editProduct({ ...newProduct, id: currentProduct.id || '' });
      isEditing = false;
    } else {
      await createProduct(newProduct);
    }
    resetForm();
    await fetchProducts(); 
  };

  const resetForm = () => {
    currentProduct = {
      id: '',
      name: '',
      price: 0,
      description: ''
    }
  };
</script>

<form on:submit={handleSubmit} class="mb-4 p-4 border rounded">
  <h2 class="text-lg mb-2">{isEditing ? 'Edit' : 'Add'} Product</h2>
  <div class="mb-2">
    <label for="name" class="block mb-1">Name:</label>
    <input id="name" type="text" bind:value={currentProduct.name} class="border rounded p-2 w-full" required />
  </div>
  <div class="mb-2">
    <label for="price" class="block mb-1">Price:</label>
    <input id="price" type="number" bind:value={currentProduct.price} class="border rounded p-2 w-full" required />
  </div>

  <div class="mb-2">
    <label for="description" class="block mb-1">Description:</label>
    <textarea id="description"  bind:value={currentProduct.description} class="border rounded p-2 w-full description" required />
  </div>
  <button type="submit" class="bg-blue-500 text-white rounded px-4 py-2">{isEditing ? 'Update' : 'Add'}</button>
</form>

<style>
  .description{
    resize: none;
  }
</style>