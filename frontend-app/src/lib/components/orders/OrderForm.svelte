<script lang="ts">
    import type { Order } from '../../../interfaces/Order';
  
    export let currentOrder: Order = { id: '', productId: '', quantity: 1, totalPrice: 0, customerName: '', status: 'pending' };
    export let isEditing = false;
    export let reset: () => void;
  
    const handleSubmit = () => {
      const event = new CustomEvent(isEditing ? 'updateOrder' : 'createOrder', {
        detail: currentOrder
      });
      dispatchEvent(event);
      reset();
    };
  </script>
  
  <form on:submit|preventDefault={handleSubmit} class="space-y-4">
    <div>
      <label for="customerName" class="block text-sm font-medium">Customer Name</label>
      <input type="text" id="customerName" bind:value={currentOrder.customerName} required class="block w-full mt-1 border border-gray-300 rounded-md" />
    </div>
  
    <div>
      <label for="quantity" class="block text-sm font-medium">Quantity</label>
      <input type="number" id="quantity" bind:value={currentOrder.quantity} required class="block w-full mt-1 border border-gray-300 rounded-md" />
    </div>
  
    <div>
      <label for="status" class="block text-sm font-medium">Status</label>
      <select id="status" bind:value={currentOrder.status} class="block w-full mt-1 border border-gray-300 rounded-md">
        <option value="pending">Pending</option>
        <option value="completed">Completed</option>
        <option value="cancelled">Cancelled</option>
      </select>
    </div>
  
    <button type="submit" class="bg-blue-500 text-white px-4 py-2 rounded">
      {isEditing ? 'Update Order' : 'Create Order'}
    </button>
  </form>
  