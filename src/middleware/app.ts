import { NextFunction, Request, RequestHandler, Response } from 'express';

export const Logger: RequestHandler = (
    req: Request,
    res: Response,
    next: NextFunction
) => {
    const method = req.method;
    const url = req.url;
    const statusCode = res.statusCode;
    const log = `Logger => ${method} ${url} ${statusCode}`;
    console.log(log);
    next();
};
