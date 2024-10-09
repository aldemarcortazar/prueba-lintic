import { Request, Response } from 'express';
import { OrderService } from '../services/OrderService';

export class OrderController {
    private orderService: OrderService;

    constructor(orderService: OrderService) {
      this.orderService = orderService;
    }

  async getAll(req: Request, res: Response): Promise<Response> {
    const orders = await this.orderService.findAll();
    return res.json(orders);
  }

  async getById(req: Request, res: Response): Promise<Response> {
    const id = parseInt(req.params.id);
    const order = await this.orderService.findById(id);
    return order ? res.json(order) : res.status(404).json({ message: 'Order not found' });
  }

  async create(req: Request, res: Response): Promise<Response> {
    const newOrder = await this.orderService.create(req.body);
    return res.status(201).json(newOrder);
  }

  async update(req: Request, res: Response): Promise<Response> {
    const id = parseInt(req.params.id);
    const updatedOrder = await this.orderService.update(id, req.body);
    return updatedOrder ? res.json(updatedOrder) : res.status(404).json({ message: 'Order not found' });
  }

  async delete(req: Request, res: Response): Promise<Response> {
    const id = parseInt(req.params.id);
    await this.orderService.delete(id);
    return res.status(204).send();
  }
}
