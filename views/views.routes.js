import { Router } from 'express';
import { productService } from '../src/product/product.service.js';
import { userService } from '../src/users/user.service.js'

const viewsRouter = Router();

viewsRouter.get('/', async (req, res) => {
	try {
		const product = await productService.getAllProduct();
		res.render('product', { product });
	} catch (err) {
		res.render('error');
	}
});

viewsRouter.get('/users', (req, res)=>{
	res.render('users', {tittle: 'USUARIO NUEVO'})
})

export default viewsRouter;