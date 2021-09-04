import { sign } from 'jsonwebtoken';

import authConfig from '../config/AuthConfig';
import usersDB from '../db/users.json';

import { ILogin } from './ILogin';

class AuthenticateUserServices {
    async execute({ email, password }: ILogin): Promise<string> {
        const userFind = usersDB.find((data) => data.email === email);

        if (!userFind) {
            return 'not found';
        }

        const pswValidate = userFind.password === password;

        if (!pswValidate) {
            return 'Email/Password Incorrect !';
        }

        const token = sign(
            {
                email,
                roles: userFind.roles,
            },
            authConfig.secret,
            {
                subject: userFind.userId,
                expiresIn: authConfig.tokenExpiryTimeInSeconds,
            },
        );

        return token;
    }
}

export { AuthenticateUserServices };
