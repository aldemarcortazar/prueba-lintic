import { orders } from './orderStore';
import type { Order } from '../../../interfaces/Order';

const apiUrl = 'http://localhost:3000/api/orders';

export async function fetchOrders(): Promise<Order[]> {
  const response = await fetch(apiUrl);
  if (!response.ok) {
    throw new Error('Failed to fetch orders');
  }
  return await response.json();
}

export async function createOrder(order: Order): Promise<Order> {
  const response = await fetch(apiUrl, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(order)
  });
  if (!response.ok) {
    throw new Error('Failed to create order');
  }
  const newOrder = await response.json();
  orders.update(currentOrders => [...currentOrders, newOrder]);
  return newOrder;
}

export async function updateOrder(order: Order): Promise<Order> {
  const response = await fetch(`${apiUrl}/${order.id}`, {
    method: 'PUT',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(order)
  });
  if (!response.ok) {
    throw new Error('Failed to update order');
  }
  const updatedOrder = await response.json();
  orders.update(currentOrders => currentOrders.map(o => o.id === order.id ? updatedOrder : o));
  return updatedOrder;
}

export async function deleteOrder(orderId: string): Promise<void> {
  const response = await fetch(`${apiUrl}/${orderId}`, {
    method: 'DELETE'
  });
  if (!response.ok) {
    throw new Error('Failed to delete order');
  }
  orders.update(currentOrders => currentOrders.filter(order => order.id !== orderId));
}
