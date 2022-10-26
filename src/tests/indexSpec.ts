import supertest from 'supertest';
import app from '../index';

const request = supertest(app);

describe('testing routes', () => {
    it('checks if main route exists', async () => {
        await request.get('/api').expect(200);
    });
});

describe('testing resize image route', () => {
    it('checks if resize fjord succeed', async () => {
        await request
            .get('/api/images?filename=fjord&width=500&height=500')
            .expect(200);
    });
});
