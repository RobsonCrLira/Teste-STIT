import { Request, Response } from 'express';
import { ProductServices } from './ProductServices';

class ProductController {
    async handle(request: Request, response: Response) {
        const { department } = response.locals;
        const tagsQuery = request.query.tags;

        const productServices = new ProductServices();

        const product = await productServices.execute(
            department,
            tagsQuery as string,
        );

        return response.json(product);
    }
}

export { ProductController };
