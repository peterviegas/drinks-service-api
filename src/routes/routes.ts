import express from 'express';
import * as coffeeController from '../controllers/coffee_controller';
import * as teaController from '../controllers/tea_controller';

export const router = express.Router();

router.get('/', coffeeController.getWelcome);
router.get('/coffeelover', coffeeController.getCoffeLover);
router.get('/coffee', coffeeController.getCoffee);

router.get('/tea', teaController.getWelcome);
router.get('/tealover', teaController.getTeaLover);
router.get('/teaRequest', teaController.getTea);
