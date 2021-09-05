import * as fs from 'fs';
import * as readline from 'readline';
import { FindAllDepartments } from '../interface/FindAllDepartments';
import { IOrganization } from '../interface/IOrganization';

class ListProduct {
    async search(department: IOrganization, tags: string) {
        const readFile = 'src/db/product.txt';
        const findAllDepartments = new FindAllDepartments();
        const stream = fs.createReadStream(readFile, 'utf8');
        const rl = readline.createInterface(stream);
        const products: any[] = [];
        const tagsSplit = tags.split(',');

        const departments = await findAllDepartments.execute(department);

        // eslint-disable-next-line no-restricted-syntax
        for await (const line of rl) {
            const [dado] = line.split(/\r?\n/g);
            const product = JSON.parse(dado);
            if (departments) {
                departments.forEach((dep) => {
                    if (
                        product.department.toLocaleLowerCase() ===
                        dep.name.toLocaleLowerCase()
                    )
                        products.push(product);
                });
            }
            if (
                product.department.toLocaleLowerCase() ===
                department.name.toLocaleLowerCase()
            )
                products.push(product);
        }

        const productsSelect = products.filter((product) => {
            // eslint-disable-next-line no-restricted-syntax
            for (const tag of tagsSplit) {
                if (product.tags.includes(tag)) return true;
            }
            return false;
        });

        // return products;
        return { Total: productsSelect.length, Product: productsSelect };
    }
}
export { ListProduct };
