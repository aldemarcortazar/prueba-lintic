export interface Order {
    id: string;
    productId: string;
    quantity: number;
    totalPrice: number;
    customerName: string;
    status: 'pending' | 'completed' | 'cancelled';
}
  