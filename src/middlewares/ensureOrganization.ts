import { NextFunction, Request, Response } from 'express';
import departmentsALl from '../db/organization.json';
import { AppError } from '../errors/AppError';
import { IOrganization } from '../interface/IOrganization';

export function ensureOrganization(
    request: Request,
    response: Response,
    next: NextFunction,
) {
    const accessLevel = [
        { user: 'senior', level: [0, 1, 2] },
        { user: 'middle', level: [1, 2] },
        { user: 'junior', level: [2] },
        { user: 'intern', level: [0, 1, 2] },
    ];

    const { organization } = request.params;
    const { roles } = request;

    const departments = departmentsALl.find(
        (department) =>
            department.name.toLowerCase() === organization.toLowerCase(),
    );

    if (!departments) {
        throw new AppError(`${organization.toUpperCase()} not found`, 404);
    }

    const verifyAccess = accessLevel.filter(
        (lvl) => lvl.user === roles && lvl.level.includes(departments.level),
    );

    if (verifyAccess.length === 0) {
        throw new AppError('Unauthorized', 401);
    }

    if (
        roles === 'intern' &&
        (departments.parent !== 'STUFF A' ||
            'STUFF A01' ||
            'STUFF A02' ||
            'STUFF A02')
    ) {
        throw new AppError('Unauthorized', 401);
    }

    response.locals.department = departments;
    return next();
}
