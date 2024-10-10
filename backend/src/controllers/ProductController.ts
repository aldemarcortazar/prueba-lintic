import { Request, Response } from 'express';
import { ProductService } from '../services/ProductService';

export class ProductController {
  private service = new ProductService();

  async getAll(req: Request, res: Response) {
    const products = await this.service.getAllProducts();
    res.json(products);
  }

  async getById(req: Request, res: Response) {
    const product = await this.service.getProductById(req.params.id);
    res.json(product);
  }

  async create(req: Request, res: Response) {
    const newProduct = await this.service.createProduct(req.body);
    res.status(201).json(newProduct);
  }

  async update(req: Request, res: Response) {
    await this.service.updateProduct(req.params.id, req.body);
    res.status(204).send();
  }

  async delete(req: Request, res: Response) {
    await this.service.deleteProduct(req.params.id);
    res.status(204).send();
  }
}
