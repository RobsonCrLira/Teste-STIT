import * as fs from 'fs';

const stream = fs.createReadStream('src/db/product.txt');

stream.resume();

stream.on('data', (chunk) => {
    console.log(chunk.toString());
});
