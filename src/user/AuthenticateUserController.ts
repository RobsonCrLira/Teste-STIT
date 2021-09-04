import { Request, Response } from 'express';

import { AuthenticateUserServices } from './AuthenticateUserServices';

class AuthenticateUserController {
    async handle(request: Request, response: Response) {
        const { email, password } = request.body;

        const authenticateUserServices = new AuthenticateUserServices();

        const auth = await authenticateUserServices.execute({
            email,
            password,
        });

        return response.json({ token: auth });
    }
}

export { AuthenticateUserController };
