import request from 'supertest';
import { app } from '../app';

describe('Test Welcome API endpoint request', () => {
	test('GET should return correct message', async () => {
		const res = await request(app).get('/tea');
		expect(res.statusCode).toEqual(200);
		expect(res.text).toEqual('Welcome and enjoy our tea 🫖 API!');
	});
});