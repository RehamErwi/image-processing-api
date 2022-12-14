import express, { Request, Response } from 'express';
import images from './api/images';

const routes = express.Router();

routes.get('/', (req: Request, res: Response) => {
    res.status(200).send('<h1>Main Route</h1>');
});

routes.use('/images', images);

routes.get('*', (req:Request, res:Response) => {
    res.status(404);
    res.send('404 Page not found');
});

export default routes;
