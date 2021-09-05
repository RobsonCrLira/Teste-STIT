import { IOrganization } from '../interface/IOrganization';
import { ListProduct } from './ListProduct';

class ProductServices {
    async execute(organization: IOrganization, tags: string) {
        const listProduct = new ListProduct();

        const products = await listProduct.search(organization, tags);

        return products;
    }
}

export { ProductServices };
