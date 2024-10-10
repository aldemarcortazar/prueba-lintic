import { writable } from 'svelte/store';
import type { Order } from '../../../interfaces/Order';


export const orders = writable<Order[]>([]);
