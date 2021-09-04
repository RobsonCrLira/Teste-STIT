import * as fs from 'fs';
import * as readline from 'readline';

class ListProduct {
    async search() {
        const readFile = 'src/db/product.txt';
        const stream = fs.createReadStream(readFile, 'utf8');
        const rl = readline.createInterface(stream);
        const product = [];
        // eslint-disable-next-line no-restricted-syntax
        for await (const line of rl) {
            const [dado] = line.split(/\r?\n/g);
            product.push(JSON.parse(dado));
        }

        return product;
    }
}
export { ListProduct };
