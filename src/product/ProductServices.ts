import { ListProduct } from './ListProduct';

class ProductServices {
    async execute() {
        const listProduct = new ListProduct();
        const product = await listProduct.search();
        return product;
    }
}

export { ProductServices };
