import { Entity, PrimaryGeneratedColumn, Column, OneToMany } from 'typeorm';
import { Order } from './Order';

@Entity()
export class Product {
  @PrimaryGeneratedColumn('uuid')
  id!: string;

  @Column()
  name!: string;

  @Column('decimal')
  price!: number;

  @Column()
  description!: string;

  @OneToMany(() => Order, (order) => order.product)
  orders!: Order[];
}
