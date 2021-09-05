import { NextFunction, Request, Response } from 'express';
import { verify } from 'jsonwebtoken';
import auth from '../config/AuthConfig';
import { AppError } from '../errors/AppError';
import { IPayload } from '../interface/IPayload';

export function ensureAuthenticate(
    request: Request,
    response: Response,
    next: NextFunction,
) {
    const authToken = request.headers.authorization;

    if (!authToken) {
        throw new AppError('Unauthorized', 401);
    }
    const [, token] = authToken.split(' ');

    try {
        const { sub, roles } = verify(token, auth.secret) as IPayload;
        request.userId = sub;
        request.roles = roles;
        return next();
    } catch (error) {
        throw new AppError('Unauthorized', 401);
    }
}
