<script lang="ts">
    import { onMount } from 'svelte';
    import { fetchOrders, createOrder, updateOrder, deleteOrder } from './../../modules/orders/orderService';
    import OrderForm from './OrderForm.svelte';
    import { orders } from './../../modules/orders/orderStore';
    import type { Order } from '../../../interfaces/Order';
  
    let currentOrder: Order = { id: '', productId: '', quantity: 1, totalPrice: 0, customerName: '', status: 'pending' };
    let isEditing = false;
  
    
    onMount(async () => {
      const fetchedOrders = await fetchOrders();
      orders.set(fetchedOrders);
    });

    const handleCreateOrder = async (event: CustomEvent<Order>) => {
      const order = event.detail; 
      await createOrder(order);
    };
  
    const handleUpdateOrder = async (event: CustomEvent<Order>) => {
      const order = event.detail; 
      await updateOrder(order);
    };
  
    const handleDeleteOrder = async (orderId: string) => {
      await deleteOrder(orderId);
    };
  
    const editOrder = (order: Order) => {
      currentOrder = { ...order };
      isEditing = true;
    };

    const resetEditing = () => {
      currentOrder = { id: '', productId: '', quantity: 1, totalPrice: 0, customerName: '', status: 'pending' };
      isEditing = false;
    };
  </script>
  
  <OrderForm 
    {currentOrder} 
    {isEditing} 
    on:createOrder={handleCreateOrder}  
    on:updateOrder={handleUpdateOrder}  
    reset={resetEditing} 
  />
  
  <ul class="mt-4">
    {#each $orders as order (order.id)}
      <li class="flex justify-between items-center border-b py-2">
        <div>
          <strong>{order.customerName}</strong> - Quantity: {order.quantity}, Status: {order.status}
        </div>
        <div>
          <button on:click={() => editOrder(order)} class="bg-yellow-500 text-white px-2 rounded">Edit</button>
          <button on:click={() => handleDeleteOrder(order.id)} class="bg-red-500 text-white px-2 ml-2 rounded">Delete</button>
        </div>
      </li>
    {/each}
  </ul>
  