import { Order } from '../models/Order';
import { AppDataSource } from '../data-source';

export class OrderService {
  private repo = AppDataSource.getRepository(Order);

  async findAll(): Promise<Order[]> {
    return await this.repo.find({ relations: ['product'] });  
  }

  async findById(id: number): Promise<Order | undefined> {
    const order = await this.repo.findOne({
      where: { id },
      relations: ['product'], 
    });
    return order ?? undefined; 
  }

  async create(orderData: Partial<Order>): Promise<Order> {
    const order = this.repo.create(orderData);
    return await this.repo.save(order);
  }

  async update(id: number, orderData: Partial<Order>): Promise<Order | undefined> {
    let order = await this.findById(id);
    if (order) {
      order = this.repo.merge(order, orderData);
      return await this.repo.save(order);
    }
    return undefined;
  }

  async delete(id: number): Promise<void> {
    await this.repo.delete(id);
  }
}
