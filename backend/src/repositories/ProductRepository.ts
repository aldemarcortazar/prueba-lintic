import { getRepository } from 'typeorm';
import { Product } from '../models/Product';

export class ProductRepository {
  private repo = getRepository(Product);

  async create(product: Product): Promise<Product> {
    return this.repo.save(product);
  }

  async findAll(): Promise<Product[]> {
    return this.repo.find();
  }

  async findById(id: number): Promise<Product | null> {
    return this.repo.findOne({ where: { id } });
  }

  async update(id: number, data: Partial<Product>): Promise<void> {
    await this.repo.update(id, data);
  }

  async delete(id: number): Promise<void> {
    await this.repo.delete(id);
  }
}
