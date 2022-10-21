import cors from 'cors';
import express from 'express';
import { Logger } from './middleware/app';
import routes from './routes';

const app = express();
const port = 3000;
const middleware = [cors(), Logger];

app.use(middleware);

app.use('/api', routes);

app.listen(port, () => {
    return console.log(`Hey, hey, server is listening on ${port} `);
});

export default app;
