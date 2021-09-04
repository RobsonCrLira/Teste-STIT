import { Request, Response } from 'express';
import { ProductServices } from './ProductServices';

class ProductController {
    async handle(request: Request, response: Response) {
        const productServices = new ProductServices();
        const product = await productServices.execute();
        return response.json(product);
    }
}

export { ProductController };
