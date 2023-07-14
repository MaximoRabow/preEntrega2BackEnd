import { Router } from 'express';
import { productService } from '../product/product.service.js';

const productRouter = Router();

productRouter.get('/', async (req, res) => {
	try {
		const product = await productService.getAllProduct();
		res.send(product);
	} catch (err) {
		res.status(500).send({ err });
	}
});

productRouter.post('/', async (req, res) => {
	const product = req.body;
	try {
		const productAdd = await productService.addProduct(product);
		res.send(productAdd);
	} catch (err) {
		res.status(500).send({ err });
	}
});

productRouter.delete('/:uid', async (req, res) => {
	const uid = req.params.uid;
	try {
		await productService.removeProduct(uid);
		res.sendStatus(204);
	} catch (err) {
		res.status(500).send({ err });
	}
});

export default productRouter;