import { RequestHandler } from 'express';

export const Logger: RequestHandler = (req, res, next) => {
    const method = req.method;
    const url = req.url;
    const statusCode = res.statusCode;
    const log = `Logger => ${method} ${url} ${statusCode}`;
    console.log(log);
    next();
};
