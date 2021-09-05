import { sign } from 'jsonwebtoken';

import * as yup from 'yup';
import authConfig from '../config/AuthConfig';
import usersDB from '../../db/users.json';
import { AppError } from '../errors/AppError';

import { ILogin } from './ILogin';

class AuthenticateUserServices {
    async execute({ email, password }: ILogin): Promise<string> {
        const schema = yup.object().shape({
            email: yup.string().email().required(),
            password: yup.string().required().min(10),
        });

        try {
            await schema.validate({ email, password }, { abortEarly: false });
        } catch (error) {
            throw new AppError(`${error}`);
        }

        const userFind = usersDB.find((data) => data.email === email);

        if (!userFind) {
            throw new AppError('Not Found', 404);
        }

        const pswValidate = userFind.password === password;

        if (!pswValidate) {
            throw new AppError('Email/Password Incorrect !');
        }

        const token = sign(
            {
                email,
                roles: userFind.roles[0],
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
