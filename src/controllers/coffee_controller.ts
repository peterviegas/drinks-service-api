import { Request, Response } from 'express';
import * as coffeeService from '../services/coffee_service';

export const getCoffee = async (
	req: Request<object, object, object, { coffeeName: string |
		undefined }>,
	res: Response) =>
{
	const coffeeName = req.query.coffeeName;
	const coffee = coffeeService.getCoffee(coffeeName as string);
	res.json(coffee).status(200);
};

export const getWelcome = async (
	req: Request,
	res: Response) =>
{
	const coffeeName = req.query.coffeeName;
	const coffee = coffeeService.getCoffee(coffeeName as string);
	res.send('Welcome to the Drinks API!');
};

export const getCoffeLover = async (
	req: Request,
	res: Response) =>
{
	const coffeeName = req.query.coffeeName;
	const coffee = coffeeService.getCoffee(coffeeName as string);
	res.send('Welcome to the Drinks API!');
};