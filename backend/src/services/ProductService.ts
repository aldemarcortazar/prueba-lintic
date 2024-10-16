import { Product } from '../models/Product';
import { AppDataSource } from './../data-source';

export class ProductService {
  private repository = AppDataSource.getRepository(Product);

  async getAllProducts(): Promise<Product[]> {
    return this.repository.find({
      relations: ['orders'],
    });
  }
  
  async getProductById(id: string): Promise<Product | null> {
    return this.repository.findOne({ where: { id } });
  }

  async createProduct(productData: Partial<Product>): Promise<Product> {
    console.log('estoy creando producto: ');
    const product = this.repository.create({ ...productData, orders: [] }); 
    return await this.repository.save(product); 
}

  async updateProduct(id: string, data: Partial<Product>): Promise<void> {
    await this.repository.update(id, data);
  }

  async deleteProduct(id: string): Promise<void> {
    await this.repository.delete(id);
  }
}
