import { Router } from 'express';
import { ensureAuthenticate } from './middlewares/ensureAuthenticate';
import { ensureOrganization } from './middlewares/ensureOrganization';
import { ProductController } from './product/ProductController';

import { AuthenticateUserController } from './user/AuthenticateUserController';

const routes = Router();
const authenticateUserController = new AuthenticateUserController();
const prodController = new ProductController();
routes.post('/login', authenticateUserController.handle);
routes.get(
    '/products/:organization',
    ensureAuthenticate,
    ensureOrganization,
    prodController.handle,
);

export { routes };
