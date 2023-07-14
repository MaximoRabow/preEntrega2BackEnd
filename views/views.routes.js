import { Router } from 'express';
import { productService } from '../src/product/product.service.js';

const viewsRouter = Router();

viewsRouter.use('/', async (req, res) => {
	try {
		const product = await productService.getAllProduct();
		res.render('product', { product });
	} catch (err) {
		res.render('error');
	}
});

export default viewsRouter;