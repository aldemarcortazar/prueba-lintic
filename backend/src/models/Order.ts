import { Entity, PrimaryGeneratedColumn, Column, ManyToOne } from 'typeorm';
import { Product } from './Product';  // Importamos el modelo de Producto

@Entity()
export class Order {
  @PrimaryGeneratedColumn()
  id!: number;

  @Column()
  customerName!: string;

  @Column()
  customerEmail!: string;

  @Column('float')
  totalAmount!: number;

  @ManyToOne(() => Product, (product) => product.orders)
  product!: Product;

  @Column()
  quantity!: number;

  @Column()
  orderDate!: Date;
}
