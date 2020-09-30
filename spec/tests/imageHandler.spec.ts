import app from '../../src/server';
import supertest from 'supertest';
const request = supertest(app);

it('checks image endpoint works', async (done) => {
  // Sends GET Request to test endpoint
  const res = await request.post('/api/images');
  const resJson = res.body.error;
  expect(resJson).toBe('bad request');
  done();
});
