import request from 'supertest';
import { app } from '../app';

test('GET /tearequest should return correct object', async () => {
	const res = await request(app)
		.get('/tearequest')
		.query({ teaName: 'Black Tea' });
		expect(res.statusCode).toEqual(200);
		expect(res.body).toEqual({
		drinkType: 'Tea',
		name: 'Black Tea',
	});
});

test('GET /tearequest with no param should return correct object', async () => {
	const res = await request(app)
		.get('/tearequest')
		expect(res.statusCode).toEqual(200);
		expect(res.body).toEqual({
		drinkType: 'Tea',
		name: 'Black Tea',
	});
});

test('GET /tearequest with different param should return correctobject', async () => {
	const res = await request(app)
		.get('/tearequest')
		.query({ teaName: 'White Tea' });
		expect(res.statusCode).toEqual(200);
		expect(res.body).toEqual({
		drinkType: 'Tea',
		name: 'White Tea',
	});
});

test('GET /tearequest with different param should return correct object', async () => {
	const res = await request(app)
		.get('/tearequest')
		.query({ teaName: 'Herbal Tea' });
		expect(res.statusCode).toEqual(200);
		expect(res.body).toEqual({
		drinkType: 'Tea',
		name: 'Herbal Tea',
	});
});

test('GET /tearequest with param empty should return correct object', async () => {
	const res = await request(app)
		.get('/tearequest')
		.query({ teaName: '' });
		expect(res.statusCode).toEqual(200);
		expect(res.body).toEqual({
		drinkType: 'Tea',
		name: '',
	});
});