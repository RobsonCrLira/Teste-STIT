import { Router } from 'express';
import { ProductController } from './product/ProductController';

import { AuthenticateUserController } from './user/AuthenticateUserController';

const routes = Router();
const authenticateUserController = new AuthenticateUserController();
const prodController = new ProductController();
routes.post('/login', authenticateUserController.handle);
routes.get('/products', prodController.handle);

export { routes };
