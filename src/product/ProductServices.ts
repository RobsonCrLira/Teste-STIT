import * as fs from 'fs';
import * as readline from 'readline';
import { IOrganization } from '../interface/IOrganization';
import { VerifyNames } from '../utils/Verify';
import { FindAllDepartments } from './FindAllDepartments';

class ProductServices {
    async execute(department: IOrganization, tags: string) {
        const findAllDepartments = new FindAllDepartments();
        const tagsSplit = tags.split(',');

        const readFile = 'db/product.txt';
        const stream = fs.createReadStream(readFile, 'utf8');
        const rl = readline.createInterface(stream);
        const products = [];

        const departments = await findAllDepartments.execute(department);

        // eslint-disable-next-line no-restricted-syntax
        for await (const line of rl) {
            const [dado] = line.split(/\r?\n/g);
            const product = JSON.parse(dado);
            if (departments) {
                departments.forEach((dep) => {
                    if (VerifyNames(product.department, dep.name))
                        products.push(product);
                });
            }
            if (VerifyNames(product.department, department.name))
                products.push(product);
        }

        const productsSelect = products.filter((product) => {
            // eslint-disable-next-line no-restricted-syntax
            for (const tag of tagsSplit) {
                if (product.tags.includes(tag)) return true;
            }
            return false;
        });

        return { Total: productsSelect.length, Product: productsSelect };
    }
}

export { ProductServices };
