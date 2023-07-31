import { Router } from 'express';
import { productService } from '../src/product/product.service.js';


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

viewsRouter.get('/login', (req, res)=>{
	res.render('login', {tittle: 'USUARIO NUEVO'})
})

export default viewsRouter;