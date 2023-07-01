import { Router } from 'express';
import { cartService } from '../service/cart.service.js';

const cartRouter = Router();

cartRouter.get('/', async (req, res) => {
	try {
		const cart = await cartService.getAllCart();
		res.send(cart);
	} catch (err) {
		res.status(500).send({ err });
	}
});

cartRouter.post('/', async (req, res) => {
	const cart = req.body;
	try {
		const cartAdded = await cartService.addCart(cart);
		res.send(cartAdded);
	} catch (err) {
		res.status(500).send({ err });
	}
});

cartRouter.post('/:cartId', async (req, res) => {
	const cartId = req.params.cartId;
	const productId = req.body.pId;
	try {
		const cartAdded = await cartService.addProductCart(
			cartId,
			productId
		);
		res.send(cartAdded);
	} catch (err) {
		res.status(500).send({ err });
	}
});

export default cartRouter;